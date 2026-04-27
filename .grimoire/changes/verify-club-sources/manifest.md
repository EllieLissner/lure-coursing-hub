---
change-id: verify-club-sources
complexity: 2
status: draft
date: 2026-04-25
---

# Change: verify-club-sources

Add a verified `website` field to every club in `data.js`, correct club names where research found errors, and display the website link on each club card in the UI.

## Why

Several club entries appear to be hallucinated or contain incorrect full names. Linking each club to a real web presence (website or Facebook group that hosted a 2025 event) serves as existence proof and gives visitors somewhere to go for current information.

## Artifacts

- `features/club-sources/club-sources.feature` — club card link display behaviour
- `data.js` (runtime data, not a grimoire artifact) — website field additions and name corrections

## What Changes

### Full name corrections (7 confirmed errors)

| ID | Current name | Correct name |
|----|-------------|-------------|
| OKIGO | Ohio-Kentucky **Invitational** Gazehound Organization | Ohio, Kentucky, **Indiana** Gazehound Organization |
| LEGS | Lure Enthusiasts of the **Greater South** | Lure Enthusiasts of **Georgia** Sighthounds |
| OCRRC | Orange **County** Rhodesian Ridgeback Club | Orange **Coast** Rhodesian Ridgeback Club |
| UCBSC | Upper Chesapeake Bay **Sighthound** Club | Upper Chesapeake Bay **Saluki** Club |
| CCA | California **Coursers** Association | California **Coursing** Association |
| SWEPT | Sighthounds of Western & Pacific Territory | Silken Windhounds for Endurance, Performance & Training |
| SISFA | **Snake River** Sighthound Field Association | **Southern Idaho** Sighthound Field Association |

### Suspected hallucinations (needs user decision)

| ID | Issue |
|----|-------|
| SCIHC | "Sighthound Club of the Inner Heartland **Canada**" — club runs real events in East Helena MT but full name unverifiable; "Canada" in name is unexplained for a US ASFA club |
| SDCA | "Saluki Dog Club of America" — no evidence this club exists separately from SCOA (Saluki Club of America); same city/state as SCOA in data |
| SANE | "Sighthound Association of New England" — no online presence found; only GONE (Gazehounds of New England) appears active in Region 9 |
| LRTCS | ID doesn't match name "Luratics" — full name is "Luratics Canine All-Breed Lure Coursing Club"; no expansion of LRTCS is findable |

### Websites to add (clubs missing a website field)

| ID | URL | Type |
|----|-----|------|
| NCIWC | https://nciwc.org | standalone |
| SWC | https://casilkenwindhound.com | standalone |
| RMIWA | https://rmiwa.org | standalone |
| HCA | https://heartlandcoursing.com | standalone |
| MCA | https://www.facebook.com/groups/minnesotacoursingassociation/ | facebook |
| ICA | https://www.facebook.com/groups/IowaCoursingAssociation/ | facebook |
| SLASH | https://slashcoursing.org | standalone |
| SHOT | https://shotlurecoursing.org | standalone |
| LEGS | https://legscoursing.com | standalone |
| OKIGO | https://okigo.org | standalone |
| SCOA | https://salukiclub.org | standalone |
| OCRRC | https://ocrrc.com | standalone |
| BKC | https://blackknightscoursing.com | standalone |
| LRTCS | https://luratics.com | standalone |
| CFSRC | https://www.facebook.com/groups/714718341874468 | facebook |
| MDIHC | https://hanoverlurecoursingclubs.com | standalone (shared) |
| THLC | https://hanoverlurecoursingclubs.com | standalone (shared) |
| CHAMP | https://champlurecoursing2.org | standalone |

### No website found (Facebook-only or no web presence located)

SCIHC, SWEPT, CLCA, LLCC, USRCC (already in data as utahsighthounds.org — verify), ORCA, GTCWC, NCA, MBC, MGA, MWCC, TSSC, CCASH, SANE

## Prior Art

No build-vs-buy decision required — this is a data curation task plus a minor UI change (adding a link element to existing club cards). No third-party libraries needed; the website field already exists in the data model for 12 of 44 clubs.

## Assumptions

- Websites listed above were reachable as of April 2026 web research
- Facebook group URLs for MCA, ICA, CFSRC are public groups
- CHAMP's website (champlurecoursing2.org) returned ECONNREFUSED during research — confirm it is still live before adding

## Pre-Mortem

- **Stale links**: Facebook groups get deleted or go private; standalone sites go down. No mitigation in scope — accepted.
- **SCIHC / SDCA / SANE remain in data without verification**: If left as-is, the hallucination problem persists for those entries.
