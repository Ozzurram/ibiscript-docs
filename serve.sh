#!/usr/bin/env bash
# Local HTTP test server for IBISCRIPT documentation

PORT="${1:-8000}"
HOST="127.0.0.1"

# Ensure script runs from the directory where it resides
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

echo "----------------------------------------------------"
echo " Starting local preview server at: http://${HOST}:${PORT}"
echo " Serving root directory: ${SCRIPT_DIR}"
echo " Press Ctrl+C to stop."
echo "----------------------------------------------------"

python3 -c "
import http.server
import socketserver
import os

class DocsHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Translate the request path to a local filesystem path
        filepath = self.translate_path(self.path)

        # If a path ends in .md but only .html exists, rewrite transparently
        if filepath.endswith('.md') and not os.path.exists(filepath):
            html_path = filepath[:-3] + '.html'
            if os.path.exists(html_path):
                self.path = self.path[:-3] + '.html'

        # If requesting a directory without trailing slash, redirect with slash
        elif os.path.isdir(filepath) and not self.path.endswith('/'):
            self.send_response(301)
            self.send_header('Location', self.path + '/')
            self.end_headers()
            return

        return super().do_GET()

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('$HOST', int('$PORT')), DocsHTTPRequestHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped.')
"
