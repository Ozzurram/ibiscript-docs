// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="intro.html">The IbiScript DSL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/index.html">Notation Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/guidelines.html">General Guidelines</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/index.html"><strong aria-hidden="true">1.</strong> Atomic Textual Units</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/textual-signs/index.html"><strong aria-hidden="true">1.1.</strong> As-Written Signs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/textual-signs/plain-realized.html"><strong aria-hidden="true">1.1.1.</strong> Realised Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/textual-signs/plain-coded.html"><strong aria-hidden="true">1.1.2.</strong> Coded Signs</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/whitespace.html"><strong aria-hidden="true">1.2.</strong> White Space</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/linebreak.html"><strong aria-hidden="true">1.3.</strong> Line Break</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/wordbreak.html"><strong aria-hidden="true">1.4.</strong> Word Break</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/language.html"><strong aria-hidden="true">1.5.</strong> Text Language</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/direction.html"><strong aria-hidden="true">1.6.</strong> Text Direction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/sectionbreak.html"><strong aria-hidden="true">1.7.</strong> Text Subdivision</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/atomic-textual-units/lexicalunit.html"><strong aria-hidden="true">1.8.</strong> Lexical Unit Boundary</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/index.html"><strong aria-hidden="true">2.</strong> Phenomena</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/vacat/index.html"><strong aria-hidden="true">2.1.</strong> Vacat</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/vacat/char.html"><strong aria-hidden="true">2.1.1.</strong> Uninscribed Signs or Spaces (v. or vac.)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/vacat/line.html"><strong aria-hidden="true">2.1.2.</strong> Uninscribed Remainder of Line (vacat)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/gap/index.html"><strong aria-hidden="true">2.2.</strong> Gaps</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/gap/known.html"><strong aria-hidden="true">2.2.1.</strong> Gap of Known Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/gap/range.html"><strong aria-hidden="true">2.2.2.</strong> Gap of Ranged Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/gap/unknown.html"><strong aria-hidden="true">2.2.3.</strong> Gap of Unknown Extent</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/fracture.html"><strong aria-hidden="true">2.3.</strong> Fractures</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/unclear/index.html"><strong aria-hidden="true">2.4.</strong> Unclear Signs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/unclear/plain.html"><strong aria-hidden="true">2.4.1.</strong> Unclear As-Written Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/unclear/previousseen.html"><strong aria-hidden="true">2.4.2.</strong> Unclear Signs Seen by Previous Editors</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/supplied/index.html"><strong aria-hidden="true">2.5.</strong> Supplied Signs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/supplied/plain.html"><strong aria-hidden="true">2.5.1.</strong> Supplied As-Written Signs</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/previousseen/index.html"><strong aria-hidden="true">2.6.</strong> Testimonies by Earlier Editors</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/previousseen/plain.html"><strong aria-hidden="true">2.6.1.</strong> Signs Seen by Earlier Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/previousseen/gap-known.html"><strong aria-hidden="true">2.6.2.</strong> Gap of Known Extent Seen by Previous Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/previousseen/gap-range.html"><strong aria-hidden="true">2.6.3.</strong> Gap of Ranged Extent Seen by Previous Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/previousseen/gap-unknown.html"><strong aria-hidden="true">2.6.4.</strong> Gap of Unknown Extent Seen by Previous Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/previousseen/erasure.html"><strong aria-hidden="true">2.6.5.</strong> Erasure Seen by Earlier Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/previousseen/ligature.html"><strong aria-hidden="true">2.6.6.</strong> Ligature of Signs Seen by Earlier Editors</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/omitted/index.html"><strong aria-hidden="true">2.7.</strong> Ancient Omissions</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/omitted/plain.html"><strong aria-hidden="true">2.7.1.</strong> Omitted Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/omitted/whitespace.html"><strong aria-hidden="true">2.7.2.</strong> Omitted White Spaces</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/omitted/linebreak.html"><strong aria-hidden="true">2.7.3.</strong> Omitted Line Breaks</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/surplus/index.html"><strong aria-hidden="true">2.8.</strong> Surplus of Signs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/surplus/plain.html"><strong aria-hidden="true">2.8.1.</strong> As-Written Superfluous Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/surplus/gap-known.html"><strong aria-hidden="true">2.8.2.</strong> Superfluous Gap of Known Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/surplus/gap-range.html"><strong aria-hidden="true">2.8.3.</strong> Superfluous Gap of Ranged Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/surplus/gap-unknown.html"><strong aria-hidden="true">2.8.4.</strong> Superfluous Gap of Unknown Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/surplus/unclear.html"><strong aria-hidden="true">2.8.5.</strong> Unclear Superfluous Signs</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/index.html"><strong aria-hidden="true">2.9.</strong> Signs Erased in Antiquity and Rasurae</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/plain.html"><strong aria-hidden="true">2.9.1.</strong> Erasure of As-Written Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/gap-known.html"><strong aria-hidden="true">2.9.2.</strong> Rasura (or Gap in Erasure) of Known Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/gap-range.html"><strong aria-hidden="true">2.9.3.</strong> Rasura (or Gap in Erasure) of Ranged Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/gap-unknown.html"><strong aria-hidden="true">2.9.4.</strong> Rasura (or Gap in Erasure) of Unknown Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/unclear.html"><strong aria-hidden="true">2.9.5.</strong> Erasure of Unclear Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/supplied.html"><strong aria-hidden="true">2.9.6.</strong> Erasure of Supplied Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/erasure/previousseen.html"><strong aria-hidden="true">2.9.7.</strong> Erasure with Signs Seen by Earlier Editors</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/index.html"><strong aria-hidden="true">2.10.</strong> Later Ancient Additions of Signs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/plain.html"><strong aria-hidden="true">2.10.1.</strong> Addition of As-Written Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/gap-known.html"><strong aria-hidden="true">2.10.2.</strong> Addition Containing Gap of Known Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/gap-range.html"><strong aria-hidden="true">2.10.3.</strong> Addition Containing Gap of Ranged Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/gap-unknown.html"><strong aria-hidden="true">2.10.4.</strong> Addition Containing Gap of Unknown Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/unclear.html"><strong aria-hidden="true">2.10.5.</strong> Addition of Unclear Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/supplied.html"><strong aria-hidden="true">2.10.6.</strong> Addition of Supplied Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/previousseen.html"><strong aria-hidden="true">2.10.7.</strong> Addition of Signs Seen by Earlier Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/surplus.html"><strong aria-hidden="true">2.10.8.</strong> Superfluous Addition</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/erasure.html"><strong aria-hidden="true">2.10.9.</strong> Erased Addition</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/addition/ligature.html"><strong aria-hidden="true">2.10.10.</strong> Addition of Ligated Signs</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/index.html"><strong aria-hidden="true">2.11.</strong> Ancient Corrections</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/index.html"><strong aria-hidden="true">2.11.1.</strong> Deleted Text in Correction</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/plain.html"><strong aria-hidden="true">2.11.1.1.</strong> As-Written Signs Deleted in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/gap-known.html"><strong aria-hidden="true">2.11.1.2.</strong> Deleted Text (in Correction) with Gap of Known Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/gap-range.html"><strong aria-hidden="true">2.11.1.3.</strong> Deleted Text (in Correction) with Gap of Ranged Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/gap-unknown.html"><strong aria-hidden="true">2.11.1.4.</strong> Deleted Text (in Correction) with Gap of Unknown Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/unclear.html"><strong aria-hidden="true">2.11.1.5.</strong> Unclear Signs Deleted in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/supplied.html"><strong aria-hidden="true">2.11.1.6.</strong> Supplied Signs Deleted in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/previousseen.html"><strong aria-hidden="true">2.11.1.7.</strong> Signs Deleted in Correction Seen by Earlier Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/erasure.html"><strong aria-hidden="true">2.11.1.8.</strong> Erasure of Deleted Text in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/deleted/ligature.html"><strong aria-hidden="true">2.11.1.9.</strong> Ligated Signs Deleted in Correction</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/index.html"><strong aria-hidden="true">2.11.2.</strong> Added Text in Correction</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/plain.html"><strong aria-hidden="true">2.11.2.1.</strong> As-Written Signs Added in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/gap-known.html"><strong aria-hidden="true">2.11.2.2.</strong> Added Text (in Correction) with Gap of Known Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/gap-range.html"><strong aria-hidden="true">2.11.2.3.</strong> Added Text (in Correction) with Gap of Ranged Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/gap-unknown.html"><strong aria-hidden="true">2.11.2.4.</strong> Added Text (in Correction) with Gap of Unknown Extent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/unclear.html"><strong aria-hidden="true">2.11.2.5.</strong> Unclear Signs Added in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/supplied.html"><strong aria-hidden="true">2.11.2.6.</strong> Supplied Signs Added in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/previousseen.html"><strong aria-hidden="true">2.11.2.7.</strong> Signs Added in Correction Seen by Earlier Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/erasure.html"><strong aria-hidden="true">2.11.2.8.</strong> Erasure of Added Text in Correction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/correction/added/ligature.html"><strong aria-hidden="true">2.11.2.9.</strong> Ligated Signs Added in Correction</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/ligature/index.html"><strong aria-hidden="true">2.12.</strong> Ligated Signs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/ligature/plain.html"><strong aria-hidden="true">2.12.1.</strong> Ligature of As-Written Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/ligature/unclear.html"><strong aria-hidden="true">2.12.2.</strong> Ligature of Unclear Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/ligature/supplied.html"><strong aria-hidden="true">2.12.3.</strong> Ligature of Supplied Signs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/ligature/previousseen.html"><strong aria-hidden="true">2.12.4.</strong> Ligature of Signs Seen by Earlier Editors</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/index.html"><strong aria-hidden="true">2.13.</strong> Abbreviations and Their Expansions</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-written/index.html"><strong aria-hidden="true">2.13.1.</strong> Abbreviated Text</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-written/plain.html"><strong aria-hidden="true">2.13.1.1.</strong> Legible Abbreviated Text</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-written/unclear.html"><strong aria-hidden="true">2.13.1.2.</strong> Unclear Abbreviated Text</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-written/supplied.html"><strong aria-hidden="true">2.13.1.3.</strong> Supplied Abbreviated Text</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-written/previousseen.html"><strong aria-hidden="true">2.13.1.4.</strong> Abbreviated Text Seen by Earlier Editors</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-written/surplus.html"><strong aria-hidden="true">2.13.1.5.</strong> Superfluous Abbreviated Text</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-written/erasure.html"><strong aria-hidden="true">2.13.1.6.</strong> Erased Abbreviated Text</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-expanded/index.html"><strong aria-hidden="true">2.13.2.</strong> Expansion and Its Certainty Degree</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-expanded/certain.html"><strong aria-hidden="true">2.13.2.1.</strong> Certain Expansion</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-expanded/uncertain.html"><strong aria-hidden="true">2.13.2.2.</strong> Uncertain Expansion</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/abbrevsegment-expanded/unexpandable.html"><strong aria-hidden="true">2.13.2.3.</strong> Unexpanded Abbreviation</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/expansresolution/index.html"><strong aria-hidden="true">2.13.3.</strong> Editorial Expansion Types</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/expansresolution/final_truncation.html"><strong aria-hidden="true">2.13.3.1.</strong> Abbreviation by Final Truncation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/expansresolution/initial_truncation.html"><strong aria-hidden="true">2.13.3.2.</strong> Abbreviation by Initial Truncation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/expansresolution/internal_truncation.html"><strong aria-hidden="true">2.13.3.3.</strong> Abbreviation by Internal Truncation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/expansresolution/suspended.html"><strong aria-hidden="true">2.13.3.4.</strong> Suspended Abbreviation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/abbreviation/expansresolution/truncated.html"><strong aria-hidden="true">2.13.3.5.</strong> Truncated Abbreviation</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/logogram/index.html"><strong aria-hidden="true">2.14.</strong> Logograms, Conventional Symbols and Heterograms</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/logogram/logogram.html"><strong aria-hidden="true">2.14.1.</strong> Logogram or conventional symbol</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/phenomena/logogram/heterogram.html"><strong aria-hidden="true">2.14.2.</strong> Heterogram</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/index.html"><strong aria-hidden="true">3.</strong> Critical and Editorial Apparatus</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/interpretation/epistemicity-scale/index.html"><strong aria-hidden="true">3.1.</strong> Interpretative Certainty or Precision Assessment</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/interpretation/epistemicity-scale/low.html"><strong aria-hidden="true">3.1.1.</strong> Low Epistemicity</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/interpretation/epistemicity-scale/high.html"><strong aria-hidden="true">3.1.2.</strong> High Epistemicity</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/interpretation/plausibilityassessment/index.html"><strong aria-hidden="true">3.2.</strong> Interpretative Plausibility Assessment</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/interpretation/plausibilityassessment/linkkind-preferred.html"><strong aria-hidden="true">3.2.1.</strong> Decreasing Plausibility among Lectiones</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/interpretation/plausibilityassessment/linkkind-alternative.html"><strong aria-hidden="true">3.2.2.</strong> Not-Given Plausibility among Lectiones</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/interpretation/plausibilityassessment/plausibilityseq-mixed.html"><strong aria-hidden="true">3.2.3.</strong> Examples of Mixed Plausibility Sequences</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/apparatus/index.html"><strong aria-hidden="true">3.3.</strong> Apparatus Notation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/apparatus/apparatusmark.html"><strong aria-hidden="true">3.3.1.</strong> Apparatus Mark</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/apparatus/apparatusnote.html"><strong aria-hidden="true">3.3.2.</strong> Apparatus Note</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/linguistic-analysis/lexicalunit.html"><strong aria-hidden="true">3.4.</strong> Linguistic Annotation of a Lexical Unit</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/referencing/index.html"><strong aria-hidden="true">3.5.</strong> References to Other Works</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/referencing/cite.html"><strong aria-hidden="true">3.5.1.</strong> Citation of External Works in Bibliography</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/critical-editorial/referencing/locus.html"><strong aria-hidden="true">3.5.2.</strong> Reference to a Textual Locus</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/formatting-internal-annotation/index.html"><strong aria-hidden="true">4.</strong> Formatting and Internal Annotation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/formatting-internal-annotation/emphasis.html"><strong aria-hidden="true">4.1.</strong> Italic Text (Emphasis)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/formatting-internal-annotation/strong.html"><strong aria-hidden="true">4.2.</strong> Bold Text</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/formatting-internal-annotation/comment/index.html"><strong aria-hidden="true">4.3.</strong> Comments</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/formatting-internal-annotation/comment/line.html"><strong aria-hidden="true">4.3.1.</strong> Opaque Line Comment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="notation/formatting-internal-annotation/comment/block.html"><strong aria-hidden="true">4.3.2.</strong> Opaque Block Comment</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/index.html"><strong aria-hidden="true">5.</strong> Software Guide</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/cli/index.html"><strong aria-hidden="true">5.1.</strong> ibis Command Line Interface</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/cli/compile.html"><strong aria-hidden="true">5.1.1.</strong> Compiling source files via the compile command</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/cli/format.html"><strong aria-hidden="true">5.1.2.</strong> Formatting source files via format</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/cli/minify.html"><strong aria-hidden="true">5.1.3.</strong> Minifying source files via minify</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/cli/restitute.html"><strong aria-hidden="true">5.1.4.</strong> Restitutio textus from multiple inscriptions with restitute</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/cli/annotations.html"><strong aria-hidden="true">5.1.5.</strong> Scanning work comments with annotations</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/editor/index.html"><strong aria-hidden="true">5.2.</strong> Integrated web editor</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/editor/file.html"><strong aria-hidden="true">5.2.1.</strong> Document Management and Data Persistence</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/editor/format.html"><strong aria-hidden="true">5.2.2.</strong> Syntactic Standardisation (Format)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/editor/preview.html"><strong aria-hidden="true">5.2.3.</strong> Error Tolerance in the Dynamic Preview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/editor/facsimile.html"><strong aria-hidden="true">5.2.4.</strong> Visual Management and Facsimile Data Persistence</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/editor/export.html"><strong aria-hidden="true">5.2.5.</strong> Exporting to Scientific Dissemination Formats</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="software/editor/shortcuts.html"><strong aria-hidden="true">5.2.6.</strong> Editor Keyboard Shortcuts</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/symbols.html"><strong aria-hidden="true">6.</strong> Technical Catalogue of Symbols</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/ws-iso-codes.html"><strong aria-hidden="true">7.</strong> Writing systems supported for key:value entry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">8.</strong> Glossary of terms</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

