const TODAY = new Date().toISOString().split('T')[0];

document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  populateStateFilters();
  renderClubs(CLUBS);
  renderEvents(EVENTS);
  initMap();
  setupFilters();
});

function updateStats() {
  const activeOrg = getActiveOrg();
  const filteredClubs = activeOrg ? CLUBS.filter(c => c.org.includes(activeOrg)) : CLUBS;
  const filteredEvents = activeOrg ? EVENTS.filter(e => e.org === activeOrg) : EVENTS;
  const nonCancelledEvents = filteredEvents.filter(e => !e.isCancelled);
  const states = new Set(filteredClubs.map(c => c.state));
  document.getElementById('club-count').textContent = filteredClubs.length;
  document.getElementById('event-count').textContent = nonCancelledEvents.length;
  document.getElementById('state-count').textContent = states.size;
}

function populateStateFilters() {
  const clubStates = [...new Set(CLUBS.map(c => c.state))].sort();
  const eventStates = [...new Set(EVENTS.map(e => e.state))].sort();

  const stateFilter = document.getElementById('state-filter');
  clubStates.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    stateFilter.appendChild(opt);
  });

  const eventStateFilter = document.getElementById('event-state-filter');
  eventStates.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    eventStateFilter.appendChild(opt);
  });
}

// ── Club rendering ──────────────────────────────────────────────────────────

function renderClubs(clubs) {
  const grid = document.getElementById('clubs-grid');
  if (!clubs.length) {
    grid.innerHTML = '<p class="no-results">No clubs match your filters.</p>';
    return;
  }

  const sorted = [...clubs].sort((a, b) => a.name.localeCompare(b.name));

  grid.innerHTML = sorted.map(club => {
    const regionLabel = club.region
      ? `<span class="region-badge" style="--region-color:${REGION_COLORS[club.region]}">Region ${club.region}</span>`
      : '';
    const orgBadges = club.org.map(o => `<span class="org-badge org-${o.toLowerCase()}">${o}</span>`).join('');
    const websiteLink = club.website
      ? `<a href="${club.website}" target="_blank" rel="noopener" class="club-link">Visit website &rarr;</a>`
      : '';

    return `
      <div class="club-card">
        <div class="club-header">
          <span class="club-abbr">${club.id}</span>
          ${regionLabel}
        </div>
        <h3 class="club-name">${club.name}</h3>
        <p class="club-location">${club.city}, ${club.state}</p>
        <div class="club-orgs">${orgBadges}</div>
        ${websiteLink}
      </div>
    `;
  }).join('');
}

// ── Event rendering ─────────────────────────────────────────────────────────

function formatDateRange(start, end) {
  const fmt = (d, opts) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', opts);

  if (!end) {
    return fmt(start, { weekday: 'short', month: 'short', day: 'numeric' });
  }
  return `${fmt(start, { month: 'short', day: 'numeric' })} – ${fmt(end, { month: 'short', day: 'numeric' })}`;
}

function renderEvents(events) {
  const list = document.getElementById('events-list');
  const sorted = [...events].sort((a, b) => a.startDate.localeCompare(b.startDate));

  if (!sorted.length) {
    list.innerHTML = '<p class="no-results">No events match your filters.</p>';
    return;
  }

  let lastMonth = '';
  const html = sorted.map(event => {
    const d = new Date(event.startDate + 'T12:00:00');
    const month = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const monthHeader = month !== lastMonth
      ? `<div class="month-header">${month}</div>`
      : '';
    lastMonth = month;

    const isPast = event.startDate < TODAY;
    const classes = [
      'event-item',
      isPast ? 'past' : '',
      event.isCancelled ? 'cancelled' : '',
      event.isSpecialty ? 'specialty' : '',
    ].filter(Boolean).join(' ');

    const specialtyBadge = event.isSpecialty
      ? '<span class="specialty-badge">Specialty</span>'
      : '';
    const cancelledBadge = event.isCancelled
      ? '<span class="cancelled-badge">Cancelled</span>'
      : '';

    return `
      ${monthHeader}
      <div class="${classes}">
        <div class="event-date">
          <span class="event-month">${d.toLocaleDateString('en-US', { month: 'short' })}</span>
          <span class="event-day">${d.getDate()}</span>
        </div>
        <div class="event-details">
          <div class="event-title">
            <span class="event-club-abbr">${event.abbr}</span>
            <span class="event-name">${event.name}</span>
            ${specialtyBadge}${cancelledBadge}
          </div>
          <p class="event-club-name">${event.clubName}</p>
          <p class="event-location">${event.city}, ${event.state} &middot; ${formatDateRange(event.startDate, event.endDate)}</p>
        </div>
        <div class="event-org">
          <span class="org-badge org-${event.org.toLowerCase()}">${event.org}</span>
        </div>
      </div>
    `;
  }).join('');

  list.innerHTML = html;
}

// ── Filters ─────────────────────────────────────────────────────────────────

function getActiveOrg() {
  return document.getElementById('org-selector').value;
}

function setupFilters() {
  document.getElementById('club-search').addEventListener('input', applyClubFilters);
  document.getElementById('state-filter').addEventListener('change', applyClubFilters);
  document.getElementById('region-filter').addEventListener('change', applyClubFilters);
  document.getElementById('event-state-filter').addEventListener('change', applyEventFilters);
  document.getElementById('event-type-filter').addEventListener('change', applyEventFilters);
  document.getElementById('org-selector').addEventListener('change', () => {
    applyClubFilters();
    applyEventFilters();
    updateStats();
    filterMapMarkers(getActiveOrg());
  });
}

function applyClubFilters() {
  const q = document.getElementById('club-search').value.toLowerCase().trim();
  const state = document.getElementById('state-filter').value;
  const region = document.getElementById('region-filter').value;
  const org = getActiveOrg();

  const filtered = CLUBS.filter(club => {
    if (org && !club.org.includes(org)) return false;
    if (q && !club.name.toLowerCase().includes(q) && !club.id.toLowerCase().includes(q) && !club.city.toLowerCase().includes(q)) return false;
    if (state && club.state !== state) return false;
    if (region && club.region !== parseInt(region, 10)) return false;
    return true;
  });

  renderClubs(filtered);
}

function applyEventFilters() {
  const state = document.getElementById('event-state-filter').value;
  const org   = getActiveOrg();
  const type  = document.getElementById('event-type-filter').value;

  const filtered = EVENTS.filter(event => {
    if (state && event.state !== state) return false;
    if (org && event.org !== org) return false;
    if (type === 'specialty' && !event.isSpecialty) return false;
    if (type === 'trial' && (event.isSpecialty || event.isCancelled)) return false;
    if (type === 'upcoming' && (event.startDate < TODAY || event.isCancelled)) return false;
    return true;
  });

  renderEvents(filtered);
}

// ── Mapbox ──────────────────────────────────────────────────────────────────

let clubMarkers = [];

function initMap() {
  if (typeof MAPBOX_TOKEN === 'undefined' || MAPBOX_TOKEN === 'YOUR_MAPBOX_ACCESS_TOKEN') {
    document.getElementById('map-token-notice').style.display = 'block';
    return;
  }

  mapboxgl.accessToken = MAPBOX_TOKEN;

  const map = new mapboxgl.Map({
    container: 'mapbox-container',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [-96, 38.5],
    zoom: 3.4,
    maxBounds: [[-170, 15], [-50, 72]],
  });

  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');

  map.on('load', () => {
    CLUBS.forEach(club => {
      const el = document.createElement('div');
      el.className = 'map-marker';
      el.style.backgroundColor = club.region ? REGION_COLORS[club.region] : '#888';

      const upcoming = EVENTS.filter(e =>
        e.abbr === club.id &&
        e.startDate >= TODAY &&
        !e.isCancelled
      ).slice(0, 4);

      const eventsHtml = upcoming.length
        ? `<div class="popup-events">
            <strong>Upcoming events</strong>
            ${upcoming.map(e =>
              `<div class="popup-event">${formatDateRange(e.startDate, e.endDate)} &middot; ${e.city}, ${e.state}</div>`
            ).join('')}
          </div>`
        : '';

      const orgBadges = club.org
        .map(o => `<span class="org-badge-sm org-${o.toLowerCase()}">${o}</span>`)
        .join('');

      const regionLabel = club.region
        ? `<p class="popup-region">ASFA Region ${club.region} &mdash; ${REGION_NAMES[club.region]}</p>`
        : '';

      const websiteLink = club.website
        ? `<a href="${club.website}" target="_blank" rel="noopener">Website &rarr;</a>`
        : '';

      const popup = new mapboxgl.Popup({ offset: 16, maxWidth: '280px' }).setHTML(`
        <div class="popup-content">
          <h4>${club.name}</h4>
          <p class="popup-location">${club.city}, ${club.state}</p>
          ${regionLabel}
          <div class="popup-orgs">${orgBadges}</div>
          ${websiteLink}
          ${eventsHtml}
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([club.lng, club.lat])
        .setPopup(popup)
        .addTo(map);
      clubMarkers.push({ org: club.org, marker });
    });
    filterMapMarkers(getActiveOrg());
  });
}

function filterMapMarkers(activeOrg) {
  clubMarkers.forEach(({ org, marker }) => {
    marker.getElement().style.display =
      activeOrg && !org.includes(activeOrg) ? 'none' : '';
  });
}
