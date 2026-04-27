---
change-id: add-lgra-org
complexity: 3
status: draft
date: 2026-04-26
---

# Change: add-lgra-org

Add LGRA (Large Gazehound Racing Association) as a first-class organisation alongside ASFA and AKC. Simultaneously rename the site to "US Lure Sports Hub" and migrate the region taxonomy from ASFA's 10 administrative regions to AKC's 6 competitive regions.

## Why

Field event competitors often compete in ASFA, AKC, and LGRA. The site currently ignores LGRA entirely, making it an incomplete resource. LGRA has ~36 member clubs and a published meet calendar. The region migration is bundled here because LGRA-only clubs cannot be meaningfully assigned to ASFA regions — doing the migration now avoids adding ~20 clubs with a broken region field.

## Artifacts

- `features/org-filter/org-filter.feature` — updated baseline: LGRA added as a selectable org alongside ASFA and AKC
- `decisions/akc-region-taxonomy.md` — records the decision to use AKC 6-region taxonomy

## What Changes

### Site identity
- Page title, nav brand, and hero headline: "US Lure Coursing Hub" → "US Lure Sports Hub"
- Hero subtitle: "Every club. Every trial. All in one place." → "Every club. Every meet. All in one place."

### Org selector (index.html)
- Add `<option value="LGRA">LGRA</option>` to the `#org-selector`

### Region taxonomy (data.js + index.html)
- Replace `REGION_NAMES` (10 ASFA regions) with AKC 6 regions:
  - 1: Northeast, 2: Southeast, 3: North Central, 4: South Central, 5: Northwest, 6: Southwest
- Replace `REGION_COLORS` accordingly
- Remap all existing club `region` fields from ASFA numbers to AKC region numbers
- Update `#region-filter` options in index.html to match AKC region names
- Update the ASFA region label in map popups (`app.js`) to just say "Region"

### CSS (styles.css)
- Add `org-lgra` badge style (distinct colour from ASFA/AKC)

### Clubs data (data.js)
- Add LGRA to the `org` array for existing clubs that are LGRA members:
  SWEPT, WWWA, SWC, CLCA, CCASH, USRCC, HCA, ICA, SLASH, ORCA, GASM, BCOA, IWCA
- Add ~20 new LGRA-only clubs (full list from lgra.club/node/4276):
  - Cascadia Sighthound Association (CSA) — WA
  - Pacific Northwest Racing — WA/OR
  - Pacific All-breed Racing Club — OR/WA
  - Great Western Whippet Association — CA
  - Northern California Whippet Club — CA
  - Northstate Flyin' Hounds — CA (Northern)
  - Reata Whippet Racing Group — CA
  - River City Racing Association — CA (Sacramento)
  - Turquoise Trail Borzoi Club — NM
  - Southern California Whippet Association — CA
  - Basenji Club of Southeast Wisconsin — WI
  - Detroit Area Racing Klub — MI
  - Greater Chicago Whippet Club — IL
  - Lorain Area Racing Klub — OH
  - Northland Amateur Racing Club — MN
  - Shi'Rayan Sloughis Amateur Racing Association — (state TBD)
  - Tri-State Whippet Association — (state TBD)
  - Count Basie Racing Association — NJ
  - Granite State Greyhounds — NH
  - Irish Wolfhound Association of Delaware Valley — PA
  - Lehigh Valley Coursing Club — PA
  - Mid-Atlantic Italian Greyhound Club — NJ
  - Potomac Valley Borzoi Club — MD
  - Gazehounds in Texas — TX
  - Sighthounds on the Lam — SC
  - Southernmost Sighthounds — FL

### Events data (data.js)
- Add LGRA meet events using the existing event shape (`org: 'LGRA'`, `name: 'LGRA Meet'`)
- LGRA 2025 calendar source: lgra.club/meet-calendar/month

## Prior Art

No third-party libraries needed. The LGRA org value is already used in two club entries (`RACE`, `CFSRC`) and the filter code already handles multi-value `org` arrays on clubs and single-value `org` on events — LGRA slots in without structural changes.

## Assumptions

- **AKC state-to-region mapping** (validated): Region 1 Northeast (ME NH VT MA RI CT NY NJ PA DE MD DC WV VA), Region 2 Southeast (NC SC TN GA AL MS FL), Region 3 North Central (ND SD NE KS MN IA MO WI IL MI IN KY OH), Region 4 South Central (CO NM OK TX AR LA), Region 5 Northwest (AK WA OR MT ID WY), Region 6 Southwest (CA NV UT AZ HI).
- **LGRA meet data** (unvalidated): LGRA event dates for 2026 will be sourced from lgra.club/meet-calendar at implementation time; the calendar may not extend to late 2026 yet.
- **New club cities/coords** (unvalidated): Lat/lng for new LGRA-only clubs need to be looked up; their home city is not always published on the LGRA member list.
- **Shi'Rayan Sloughis and Tri-State Whippet Association states** (unvalidated): State locations for these two clubs were not findable in pre-draft research.

## Pre-Mortem

- **Wrong AKC region assignments**: If we manually assign AKC regions incorrectly, competitors see their club in the wrong region and the point-schedule context is misleading. Mitigation: cross-reference a second source (e.g. North American Lure Coursing Facebook group) before publishing.
- **LGRA meet data goes stale faster**: LGRA clubs post meets on shorter notice than ASFA. Events section may look sparse or outdated for LGRA. Accepted — same risk as other orgs.
- **New LGRA clubs have no websites**: Most LGRA-only clubs have no standalone website. Club cards will display without a website link, which is consistent with the existing behaviour for clubs without a `website` field.
