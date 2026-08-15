---
title: Himan Brown Radio Dramas
date: "2024-08-23"
description: Building an automated restoration and packaging workflow for the Himan Brown transcription disc collection
hero: "cuny/hero.png"
---

From January to August 2024, I was contracted by CUNY TV to build the audio processing workflow for the Himan Brown transcription disc collection.

Himan Brown produced over 10,000 programs across nearly 85 years of radio, and left behind master recordings and scripts for well over 1400 shows. A collection of that size cannot be handled one file at a time by hand. The question the project had to answer was not how to restore a single recording well, but how to apply that treatment repeatedly across a collection that large.

What arrived from digitization was raw material rather than finished objects. Files came back in vendor directory structures with vendor vocabulary, mixed in with object photographs and checksum sidecars. Each transcription disc carried the marks of its own playback: surface noise and clicks from shellac, and dead air at either end where the tone arm dropped and the operator waited for the program to begin. Every one of those files needed the same set of decisions applied to it, and every one of those decisions needed to survive being questioned later.

That last constraint shaped everything else. The processed result is not the only end goal. The ability to explain and revisit what was done to it matters just as much. So the workflow had to be automated enough to run across hundreds of objects, and conservative enough that nothing it did was irreversible.

The approach was a chain of small scripts, each doing one stage and each safe to run again. The first stage takes what the vendor delivered and normalizes it into the archive's own package structure, sorting audio, images, and checksums into their proper places, folding vendor folder names into CUNY TV's vocabulary, and then validating that every package has the structure it claims to.

Restoration comes next, as an ffmpeg filter chain rather than a manual pass in a GUI. Rather than running one declicker across the whole signal, it splits the audio into three frequency bands, treats each on its own terms, mixes them back together, and bandlimits the result. Surface noise on a disc does not sit in one place, and separating the bands catches clicks that a single pass smears over. Because it is a filter chain and not a session file, the same treatment applies identically to the next four hundred discs, and the recipe itself is legible to whoever inherits it down the road.

The heart of the project was addressing the lead-in and lead-out issue, and it is where the constraint did the most work. Finding the two points where the program actually starts and ends is straightforward to automate. Trimming the file to those points was tempting, but that is the step to refuse. Instead the workflow converts the detected points into sample counts and writes them into the WAV's cue chunk, so the audio is untouched and the instruction to skip the dead air travels inside the file as metadata. Every derivative made afterward can honor that instruction, and anyone who disagrees with where the machine put the boundary can move it without going back to the original transfer.

Getting those two numbers reliably was the part that took real iteration. The first implementation ran the filter chain and read the timestamps out of ffmpeg's own console output, taking the first and last silence it reported. It worked, but it derived an archival decision from parsed log text, which is a thin foundation. Rewriting the detection in Python, using audio analysis libraries that return actual segment lists, meant the script was working with results instead of messages. That change paid for itself immediately: once the silences were real data, the same run could also produce a full breakdown of every silent portion, original and trimmed durations, a chapter file, an export of the resulting metadata, and a plot of the waveform with the detected silences shaded. All of it is written beside the object it describes, so the machine's judgment can be checked by a person looking at a picture rather than trusted on faith.

The final stage rewraps the audio losslessly into MKA and attaches the chapter information generated earlier, so that a multi-part program becomes a single file whose parts remain addressable. Supporting scripts handle the unglamorous rest: retiring superseded hand-made restorations into an archived directory with a log recording who moved what and when, and verifying that a file's header really is what its extension claims before anything touches it.

In the end, what the project delivered was less a set of processed files than a described and repeatable path from raw transfer to access copy, with the reasoning preserved at every step. Automation is worth having because it removes work that numbs the mind, but it earns its place in an archive only when it leaves behind enough evidence to be audited and undone if needed.

CUNY TV and Radio Drama Network launched "If You Please...Himan Brown's Radio Mystery Theater" on June 4, 2026, an anthology podcast presenting episodes of the "CBS Radio Mystery Theater" with behind-the-scenes context from scholar John Slavney, following the network's nine-part documentary "Audio Maverick." Radio Drama Network, founded by Brown in 1989 and now led by his granddaughter Melina Brown, stewards his archive and began re-releasing his most important work in 2026.

Thank you to Dave Rice, Catriona Schlosser, and Aida Garrido at CUNY TV, and to Sarah Wardrop, whose restoration work this builds on.
