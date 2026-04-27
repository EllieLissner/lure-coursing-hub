# Tasks: add-lgra-org

> **Change**: Add LGRA as a first-class org, rename site to "US Lure Sports Hub", migrate regions to AKC 6-region taxonomy
> **Features**: `.grimoire/changes/add-lgra-org/features/org-filter/org-filter.feature`
> **Decisions**: `.grimoire/changes/add-lgra-org/decisions/akc-region-taxonomy.md`
> **Test command**: Open `web/index.html` in a browser and manually verify each scenario
> **Status**: 8/9 tasks complete (task 9 pending manual browser verification)

## Reuse

- `web/js/data.js` `REGION_NAMES` / `REGION_COLORS` — replace in-place, no new files
- `web/js/app.js:249` — single-line edit for popup region label
- `web/css/styles.css:371` `.org-lgra` — already exists, no CSS work needed

---

## 1. Region taxonomy — data.js
<!-- context:
  - .grimoire/changes/add-lgra-org/decisions/akc-region-taxonomy.md
  - web/js/data.js (lines 1–25)
-->

- [x] 1.1 In `web/js/data.js`, replace `REGION_NAMES` (lines 1–12) with the AKC 6-region names:
  ```js
  const REGION_NAMES = {
    1: 'Northeast',
    2: 'Southeast',
    3: 'North Central',
    4: 'South Central',
    5: 'Northwest',
    6: 'Southwest',
  };
  ```

- [x] 1.2 In `web/js/data.js`, replace `REGION_COLORS` (lines 14–25) with 6 entries (drop keys 7–10):
  ```js
  const REGION_COLORS = {
    1: '#6366f1',   // Northeast  — indigo
    2: '#eab308',   // Southeast  — amber
    3: '#a855f7',   // North Central — purple
    4: '#ef4444',   // South Central — red
    5: '#3b82f6',   // Northwest  — blue
    6: '#22c55e',   // Southwest  — green
  };
  ```

- [x] 1.3 In `web/js/data.js`, remap every existing club's `region` field from ASFA number to AKC number using the mapping below. Apply to the `CLUBS` array only — do not touch `EVENTS`.

  | AKC region | States |
  |---|---|
  | 1 Northeast | ME NH VT MA RI CT NY NJ PA DE MD DC WV VA |
  | 2 Southeast | NC SC TN GA AL MS FL |
  | 3 North Central | ND SD NE KS MN IA MO WI IL MI IN KY OH |
  | 4 South Central | CO NM OK TX AR LA |
  | 5 Northwest | AK WA OR MT ID WY |
  | 6 Southwest | CA NV UT AZ HI |

  Pre-computed remapping for all existing clubs (verify state matches before applying):

  | Club ID | State | Old ASFA region | New AKC region |
  |---------|-------|-----------------|----------------|
  | WWWA | WA | 1 | 5 |
  | SISFA | ID | 1 | 5 |
  | SWEPT | OR | 1 | 5 |
  | AWC | WA | 1 | 5 |
  | NCIWC | CA | 2 | 6 |
  | SWC | CA | 2 | 6 |
  | CLCA | CO | 3 | 4 |
  | LLCC | NM | 3 | 4 |
  | USRCC | UT | 3 | 6 |
  | RMIWA | CO | 3 | 4 |
  | ORCA | OK | 4 | 4 |
  | ICA | IA | 5 | 3 |
  | MCA | MN | 5 | 3 |
  | GTCWC | MN | 5 | 3 |
  | NCA | NE | 5 | 3 |
  | HCA | KS | 5 | 3 |
  | IHCUS | IA | 5 | 3 |
  | BCOA | NE | 5 | 3 |
  | MBC | OH | 6 | 3 |
  | MGA | MI | 6 | 3 |
  | MWCC | WI | 6 | 3 |
  | OKIGO | OH | 6 | 3 |
  | SLASH | IL | 6 | 3 |
  | GASM | TN | 7 | 2 |
  | LEGS | GA | 7 | 2 |
  | BaCOA | TN | 7 | 2 |
  | SHOT | VA | 8 | 1 |
  | TSSC | PA | 8 | 1 |
  | CHAMP | VA | 8 | 1 |
  | UCBSC | PA | 8 | 1 |
  | MDIHC | PA | 8 | 1 |
  | THLC | PA | 8 | 1 |
  | GONE | MA | 9 | 1 |
  | CLCNY | NY | 9 | 1 |
  | CCASH | CA | 10 | 6 |
  | CCA | CA | 10 | 6 |
  | OCRRC | CA | 10 | 6 |
  | IWCA | MO | null | 3 |
  | SCOA | MO | null | 3 |
  | DFB | AZ | null | 6 |
  | BKC | MS | null | 2 |
  | RACE | CA | 2 | 6 |
  | CFSRC | FL | null | 2 |

---

## 2. Existing clubs — add LGRA to org arrays
<!-- context:
  - web/js/data.js (CLUBS array)
  - https://www.lgra.club/node/4276 (LGRA member list for reference)
-->

- [x] 2.1 In `web/js/data.js`, add `'LGRA'` to the `org` array for each of the following clubs (they appear on the official LGRA member list):

  | Club ID | Current org | New org |
  |---------|-------------|---------|
  | WWWA | `['ASFA']` | `['ASFA', 'LGRA']` |
  | SWEPT | `['ASFA']` | `['ASFA', 'LGRA']` |
  | SWC | `['ASFA']` | `['ASFA', 'LGRA']` |
  | CLCA | `['ASFA']` | `['ASFA', 'LGRA']` |
  | CCASH | `['ASFA']` | `['ASFA', 'LGRA']` |
  | USRCC | `['ASFA']` | `['ASFA', 'LGRA']` |
  | HCA | `['ASFA']` | `['ASFA', 'LGRA']` |
  | ICA | `['ASFA']` | `['ASFA', 'LGRA']` |
  | SLASH | `['ASFA']` | `['ASFA', 'LGRA']` |
  | ORCA | `['ASFA']` | `['ASFA', 'LGRA']` |
  | GASM | `['ASFA']` | `['ASFA', 'LGRA']` |
  | BCOA | `['ASFA', 'AKC']` | `['ASFA', 'AKC', 'LGRA']` |
  | IWCA | `['ASFA', 'AKC']` | `['ASFA', 'AKC', 'LGRA']` |

  Note: `RACE` and `CFSRC` already carry `'LGRA'` — leave them unchanged.

---

## 3. New LGRA-only clubs — data.js
<!-- context:
  - web/js/data.js (CLUBS array, end of file)
  - .grimoire/changes/add-lgra-org/manifest.md (full club list)
  - https://www.lgra.club/node/4276
-->

- [x] 3.1 In `web/js/data.js`, append a new `// LGRA clubs` section to `CLUBS` (24 clubs added; Shi'Rayan and Tri-State skipped pending state research) with the following entries. For each club: look up the city by searching `"<club name> lure coursing <state>"` or the LGRA member contact address. Use the AKC region from the state table in task 1.3.

  Clubs to add (`id` = initialism you derive from the name, `org: ['LGRA']` for all unless noted):

  | Name | State | AKC region | Notes |
  |------|-------|------------|-------|
  | Cascadia Sighthound Association | WA | 5 | Contact city: Snohomish, WA |
  | Pacific Northwest Racing | WA | 5 | Look up city |
  | Pacific All-breed Racing Club | OR | 5 | Look up city |
  | Great Western Whippet Association | CA | 6 | Look up city |
  | Northern California Whippet Club | CA | 6 | Look up city |
  | Northstate Flyin' Hounds | CA | 6 | Northern CA — look up city |
  | Reata Whippet Racing Group | CA | 6 | Look up city |
  | River City Racing Association | CA | 6 | Sacramento area |
  | Turquoise Trail Borzoi Club | NM | 4 | Look up city |
  | Southern California Whippet Association | CA | 6 | Look up city |
  | Basenji Club of Southeast Wisconsin | WI | 3 | Look up city |
  | Detroit Area Racing Klub | MI | 3 | Detroit area |
  | Greater Chicago Whippet Club | IL | 3 | Chicago area |
  | Lorain Area Racing Klub | OH | 3 | Lorain, OH |
  | Northland Amateur Racing Club | MN | 3 | Look up city |
  | Shi'Rayan Sloughis Amateur Racing Association | unknown | unknown | Research state before adding |
  | Tri-State Whippet Association | unknown | unknown | Research state before adding |
  | Count Basie Racing Association | NJ | 1 | Look up city |
  | Granite State Greyhounds | NH | 1 | Look up city |
  | Irish Wolfhound Association of Delaware Valley | PA | 1 | Look up city |
  | Lehigh Valley Coursing Club | PA | 1 | Lehigh Valley, PA |
  | Mid-Atlantic Italian Greyhound Club | NJ | 1 | Look up city |
  | Potomac Valley Borzoi Club | MD | 1 | Look up city |
  | Gazehounds in Texas | TX | 4 | Look up city |
  | Sighthounds on the Lam | SC | 2 | Look up city |
  | Southernmost Sighthounds | FL | 2 | Look up city (Key West / South FL area) |

  Each entry shape:
  ```js
  { id: '<INITIALISM>', name: '<Full Name>', city: '<City>', state: '<ST>',
    lat: <lat>, lng: <lng>, org: ['LGRA'], region: <1-6> },
  ```

---

## 4. LGRA events — data.js
<!-- context:
  - web/js/data.js (EVENTS array)
  - https://www.lgra.club/meet-calendar/month
-->

- [x] 4.1 Fetch `https://www.lgra.club/meet-calendar/month` and extract all 2026 LGRA meet dates, hosting clubs, and locations. Add each as an entry to the `EVENTS` array using the existing shape:
  ```js
  { id: <next_id>, abbr: '<CLUB_ID>', clubName: '<Full Name>',
    name: 'LGRA Meet', startDate: 'YYYY-MM-DD', endDate: null,
    city: '<City>', state: '<ST>', lat: <lat>, lng: <lng>,
    org: 'LGRA', isSpecialty: false, isCancelled: false },
  ```
  - `id`: continue from the highest existing event id in the array
  - If the calendar only shows through mid-2026, add what's available and note the gap in a `// LGRA events — calendar may not extend to late 2026` comment
  - Group under `// LGRA meets` comment block, sorted chronologically

---

## 5. Org selector — index.html
<!-- context:
  - web/index.html (lines 43–47)
  - .grimoire/changes/add-lgra-org/features/org-filter/org-filter.feature
-->

- [x] 5.1 In `web/index.html`, add `<option value="LGRA">LGRA</option>` after the AKC option (line 46):
  ```html
  <option value="">All Orgs</option>
  <option value="ASFA">ASFA</option>
  <option value="AKC">AKC</option>
  <option value="LGRA">LGRA</option>
  ```
  Satisfies scenarios: "Selecting LGRA filters clubs, events, map, and hero stats to LGRA content"

---

## 6. Region filter — index.html
<!-- context:
  - web/index.html (lines 76–88)
  - .grimoire/changes/add-lgra-org/decisions/akc-region-taxonomy.md
-->

- [x] 6.1 In `web/index.html`, replace the `#region-filter` `<select>` contents (lines 76–88) with the 6 AKC regions:
  ```html
  <select id="region-filter" class="filter-select">
    <option value="">All Regions</option>
    <option value="1">Region 1 &mdash; Northeast</option>
    <option value="2">Region 2 &mdash; Southeast</option>
    <option value="3">Region 3 &mdash; North Central</option>
    <option value="4">Region 4 &mdash; South Central</option>
    <option value="5">Region 5 &mdash; Northwest</option>
    <option value="6">Region 6 &mdash; Southwest</option>
  </select>
  ```

---

## 7. Site copy — index.html
<!-- context:
  - web/index.html
-->

- [x] 7.1 In `web/index.html`, apply all copy changes:

  | Location | Old text | New text |
  |----------|----------|----------|
  | `<title>` (line 6) | US Lure Coursing Hub | US Lure Sports Hub |
  | Nav brand text (line 15) | US Lure Coursing Hub | US Lure Sports Hub |
  | Hero `<h1>` (line 26) | US Lure Coursing Hub | US Lure Sports Hub |
  | Hero `<p>` (line 27) | Every club. Every trial. All in one place. | Every club. Every meet. All in one place. |
  | Map section `<p>` (line 55) | Colors indicate ASFA region. | Colors indicate AKC region. |
  | Clubs section `<h2>` (line 67) | Lure Coursing Clubs | Lure Sports Clubs |
  | Clubs section `<p>` (line 68) | ASFA-affiliated regional clubs, national breed clubs, and independent AKC clubs across the United States. | ASFA, AKC, and LGRA clubs across the United States. |
  | Events section `<p>` (line 98) | ASFA trials, AKC lure coursing trials, and AKC Fast CAT events in chronological order. | ASFA trials, AKC lure coursing trials, AKC Fast CAT events, and LGRA meets in chronological order. |
  | Events section sources (line 99–100) | Sources: asfa.org · AKC Event Search. | Sources: asfa.org · AKC Event Search · lgra.club. (add `<a href="https://lgra.club" target="_blank" rel="noopener">lgra.club</a>`) |
  | Footer `<p>` (line 122–125) | …sourced from ASFA, AKC, and individual club websites. | …sourced from ASFA, AKC, LGRA, and individual club websites. (add LGRA link to `https://lgra.club`) |
  | Footer events note (line 126) | Events reflect the 2026 ASFA trial schedule. Always verify… | Events reflect the 2026 ASFA, AKC, and LGRA schedules. Always verify… |

---

## 8. Map popup region label — app.js
<!-- context:
  - web/js/app.js (line 249)
-->

- [x] 8.1 In `web/js/app.js`, change line 249 from:
  ```js
  ? `<p class="popup-region">ASFA Region ${club.region} &mdash; ${REGION_NAMES[club.region]}</p>`
  ```
  to:
  ```js
  ? `<p class="popup-region">Region ${club.region} &mdash; ${REGION_NAMES[club.region]}</p>`
  ```

---

## 9. Verification
- [ ] 9.1 Open `web/index.html` in a browser. Confirm:
  - Page title, nav, and hero all read "US Lure Sports Hub"
  - Org selector shows All Orgs / ASFA / AKC / LGRA
  - Region filter shows 6 AKC region names (not 10 ASFA names)
  - All existing clubs show a region badge that matches their state's AKC region (spot-check: CLCA/CO → Region 4 South Central, GASM/TN → Region 2 Southeast, GONE/MA → Region 1 Northeast)
- [ ] 9.2 Select "LGRA" in the org selector. Confirm:
  - Clubs grid shows only LGRA-affiliated clubs
  - Events list shows only events with `org: 'LGRA'`
  - Map shows only markers for LGRA clubs
  - Hero stats update to LGRA counts
- [ ] 9.3 Select "ASFA" then "AKC". Confirm existing filter behaviour is unchanged (no regression).
- [ ] 9.4 Select "LGRA" + a state filter. Confirm both filters apply together.
- [ ] 9.5 Click a map marker for a remapped club (e.g. CLCA). Confirm popup shows "Region 4 — South Central" not "ASFA Region 3 — Mountain West".
- [ ] 9.6 Confirm multi-org clubs (e.g. BCOA, IWCA) appear under both ASFA and LGRA filter selections.
