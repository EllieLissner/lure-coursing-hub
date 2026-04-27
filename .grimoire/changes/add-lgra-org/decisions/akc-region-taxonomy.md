---
status: proposed
date: 2026-04-26
decision-makers: [ellie]
---

# Use AKC 6-Region Taxonomy for Club Display

## Context and Problem Statement

The site currently displays clubs using ASFA's 10-region taxonomy. As the site expands to cover LGRA (and already covers AKC), a single region system that works across all three orgs is needed. Regions currently show on club cards and drive the region filter.

## Decision Drivers

- Competitors who care about regions care about them for competitive point purposes
- AKC lure coursing uses 6 regions with varying point schedules (introduced March 2023) — this is the only regional taxonomy with direct competitive impact
- ASFA regions are administrative only: no effect on points or title requirements; used only to organize Regional Invitationals
- LGRA regions are administrative only: points are based on race performance (WAVE system), not geography
- New LGRA-only clubs have no ASFA region assignment; assigning them to ASFA regions would be misleading
- A single, consistent taxonomy across all three orgs reduces UI complexity

## Considered Options

1. **Keep ASFA 10 regions** — current state; doesn't extend naturally to LGRA-only clubs
2. **AKC 6 regions** (Northeast, Southeast, North Central, South Central, Northwest, Southwest) — competitively meaningful; broadly understood by competitors across all three orgs
3. **LGRA 5 regions** (Northwest, Southwest, Midwest, East, Southeast) — administrative only; narrower community familiarity
4. **No regions** — simplest, but loses a useful filter dimension for AKC competitors

## Decision Outcome

Chosen option: **AKC 6 regions**, because they are the only taxonomy with competitive significance (point schedules), apply to all clubs regardless of org, and are already familiar to AKC participants who make up a large share of the site's audience.

### Consequences

- Good: Single consistent region system across ASFA, AKC, and LGRA
- Good: Region filter becomes meaningful to AKC competitors (affects their point strategy)
- Good: LGRA-only clubs can be assigned regions without fabricating ASFA membership
- Bad: Existing ASFA Regional Invitational events lose their direct tie to a numbered region; they remain identifiable by event name
- Bad: Requires remapping all existing club `region` fields from ASFA numbers to AKC names
- Bad: Requires remapping all existing club `region` fields from ASFA numbers to AKC numbers (one-time migration)

### Cost of Ownership

- **Maintenance burden**: If AKC redraws region boundaries (rare), `REGION_NAMES`, `REGION_COLORS`, the region filter options, and club data all need updating

### State-to-Region Mapping (AKC, effective March 2023)

| Region | Name | States |
|--------|------|--------|
| 1 | Northeast | ME, NH, VT, MA, RI, CT, NY, NJ, PA, DE, MD, DC, WV, VA |
| 2 | Southeast | NC, SC, TN, GA, AL, MS, FL |
| 3 | North Central | ND, SD, NE, KS, MN, IA, MO, WI, IL, MI, IN, KY, OH |
| 4 | South Central | CO, NM, OK, TX, AR, LA |
| 5 | Northwest | AK, WA, OR, MT, ID, WY |
| 6 | Southwest | CA, NV, UT, AZ, HI |
- **Ongoing benefits**: Region filter works meaningfully for all three orgs
- **Sunset criteria**: Revisit if AKC abolishes regional point schedules or if a fourth org with a different taxonomy is added
