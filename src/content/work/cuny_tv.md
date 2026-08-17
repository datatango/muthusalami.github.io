---
title: Himan Brown Radio Dramas
date: "2024-08-23"
description: Building an automated restoration and packaging workflow for the Himan Brown transcription disc collection
hero: "cuny/hero.png"
---

In 2024, I was contracted by CUNY TV to build an audio reprocessing workflow for the Himan Brown transcription disc collection.

Brown produced over 10,000 programs across nearly 85 years of radio, and left behind master recordings and scripts for over 1400 shows. A collection of that size cannot be handled one file at a time. The challenge was not how to restore a single recording for a better user experience, but how to apply that treatment repeatedly across all of the digital recordings.

What arrived from the vendor were digital files that carried the marks of their own playback, surface noise and clicks from shellac, and dead air at either end where the tone arm dropped. Every file needed the same decisions applied to it, and every one of those decisions needed to be non-destructive.

That last constraint shaped everything. The workflow had to be automated enough to run across hundreds of objects, and conservative enough that nothing it did was irreversible.

The workflow came together as a chain of small scripts, each doing one stage and each safe to run again. The first normalizes what the vendor delivered into CUNY TV's own package structure, then validates it. Restoration follows as an FFmpeg filter chain, splitting the audio into three frequency bands and declicking each independently, since surface noise does not sit in one place. The last stage rewraps the WAV file losslessly into MKA with chapter markers attached.

The heart of the workflow was handling the lead-in and lead-out points: it writes the detected points into the WAV's cue chunk as sample counts, so the audio is untouched and the instruction to skip the dead air travels inside the file as metadata. Changes can be easily made downstream without going back to the original transfer.

Detection itself went from parsing FFmpeg's console output to Python audio analysis returning real segment lists, which made the sidecars possible: a breakdown of every silent portion, original and trimmed durations, a chapter file, and a plot of the waveform with the silences shaded. All of it is written beside the object it describes.

CUNY TV and Radio Drama Network launched ["If You Please...Himan Brown's Radio Mystery Theater"](https://www.cuny.edu/news/cuny-tv-and-radio-drama-network-announce-the-new-archival-anthology-podcast-series-if-you-please-himan-browns-radio-mystery-theater-premiering-june-4/) on June 4, 2026, an anthology podcast presenting episodes of the "CBS Radio Mystery Theater" with behind-the-scenes context from scholar John Slavney.

Thank you to Dave Rice, Catriona Schlosser, and Aida Garrido at CUNY TV, and to Sarah Wardrop, whose restoration work this builds on.
