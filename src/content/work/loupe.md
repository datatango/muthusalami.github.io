---
title: "loupe-iiif"
date: "2026-07-22"
description: "A browser extension that checks and validates IIIF Presentation API manifests"
hero: "loupe/loupe.png"
---

<iframe
  src="https://www.youtube.com/embed/1BW7EvK3W7g"
  title="loupe-iiif"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

loupe-iiif is a browser extension that checks and validates IIIF manifests: the JSON files that tell viewers how to present digital objects (A/V, books, artworks, maps, scores) and where to find their media.

IIIF manifests can break in ways that are hard to spot: a missing comma, a misspelled field, an image URL that quietly 404s. loupe-iiif identifies and flags these issues - all in your browser.

How it works: paste a manifest, load it from a URL, or open a file. It appears in a code editor, and loupe-iiif checks it as you type. Problems are underlined where they occur and listed in a report; click any finding to jump to the exact spot in the JSON.

loupe-iiif auto-detects the Presentation API version from a manifest's @context and validates against that version's rules. Supported today: 2.1, 3.0 & 4.0.

It is available on [Chrome](https://chromewebstore.google.com/detail/loupe-iiif/bnnoohiohbljoianldgbnepljodndmdo) & [Firefox](https://addons.mozilla.org/en-US/firefox/addon/loupe-iiif/).
