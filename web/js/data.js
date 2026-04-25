const REGION_NAMES = {
  1: 'Pacific Northwest',
  2: 'Northern California',
  3: 'Mountain West',
  4: 'South Central',
  5: 'Upper Midwest',
  6: 'Great Lakes',
  7: 'Southeast',
  8: 'Mid-Atlantic',
  9: 'New England',
  10: 'Southern California',
};

const REGION_COLORS = {
  1: '#3b82f6',
  2: '#22c55e',
  3: '#f97316',
  4: '#ef4444',
  5: '#a855f7',
  6: '#14b8a6',
  7: '#eab308',
  8: '#6366f1',
  9: '#ec4899',
  10: '#84cc16',
};

const CLUBS = [
  // Region 1 – Pacific Northwest
  { id: 'WWWA', name: 'Western Washington Whippet Association', city: 'Monroe', state: 'WA', lat: 47.855, lng: -121.971, org: ['ASFA'], region: 1, website: 'https://wwwhippet.org' },
  { id: 'SCIHC', name: 'Sighthound Club of the Inner Heartland Canada', city: 'East Helena', state: 'MT', lat: 46.594, lng: -111.927, org: ['ASFA', 'AKC'], region: 1 },
  { id: 'SISFA', name: 'Snake River Sighthound Field Association', city: 'Emmett', state: 'ID', lat: 43.874, lng: -116.499, org: ['ASFA'], region: 1 },
  { id: 'SWEPT', name: 'Sighthounds of Western & Pacific Territory', city: 'Damascus', state: 'OR', lat: 45.413, lng: -122.434, org: ['ASFA'], region: 1 },
  { id: 'AWC', name: 'American Whippet Club', city: 'Pasco', state: 'WA', lat: 46.239, lng: -119.100, org: ['ASFA', 'AKC'], region: 1, website: 'https://americanwhippetclub.net' },

  // Region 2 – Northern California
  { id: 'NCIWC', name: 'Northern California Irish Wolfhound Club', city: 'Woodland', state: 'CA', lat: 38.679, lng: -121.773, org: ['ASFA'], region: 2 },
  { id: 'SWC', name: 'Silken Windhounds of California', city: 'Elverta', state: 'CA', lat: 38.713, lng: -121.406, org: ['ASFA'], region: 2 },

  // Region 3 – Mountain West
  { id: 'CLCA', name: 'Colorado Lure Coursing Association', city: 'Peyton', state: 'CO', lat: 38.932, lng: -104.296, org: ['ASFA'], region: 3 },
  { id: 'LLCC', name: 'Llano Lure Coursing Club', city: 'Estancia', state: 'NM', lat: 34.760, lng: -106.056, org: ['ASFA'], region: 3 },
  { id: 'USRCC', name: 'Utah Sighthound Racing & Coursing Club', city: 'South Jordan', state: 'UT', lat: 40.560, lng: -111.929, org: ['ASFA'], region: 3 },
  { id: 'RMIWA', name: 'Rocky Mountain Irish Wolfhound Association', city: 'Bennett', state: 'CO', lat: 39.750, lng: -104.430, org: ['ASFA'], region: 3 },

  // Region 4 – South Central
  { id: 'ORCA', name: 'Oklahoma Racing & Coursing Association', city: 'Vinita', state: 'OK', lat: 36.636, lng: -95.154, org: ['ASFA'], region: 4 },

  // Region 5 – Upper Midwest
  { id: 'ICA', name: 'Iowa Coursing Association', city: 'Des Moines', state: 'IA', lat: 41.588, lng: -93.620, org: ['ASFA'], region: 5 },
  { id: 'MCA', name: 'Minnesota Coursing Association', city: 'Farmington', state: 'MN', lat: 44.647, lng: -93.149, org: ['ASFA'], region: 5 },
  { id: 'GTCWC', name: 'Greater Twin Cities Whippet Club', city: 'Farmington', state: 'MN', lat: 44.657, lng: -93.139, org: ['ASFA'], region: 5 },
  { id: 'NCA', name: 'Nebraska Coursing Association', city: 'Omaha', state: 'NE', lat: 41.261, lng: -95.937, org: ['ASFA'], region: 5 },
  { id: 'HCA', name: 'Heartland Coursing Association', city: 'Auburn', state: 'KS', lat: 38.902, lng: -95.800, org: ['ASFA'], region: 5 },
  { id: 'IHCUS', name: 'Ibizan Hound Club of the United States', city: 'Cedar Falls', state: 'IA', lat: 42.524, lng: -92.445, org: ['ASFA', 'AKC'], region: 5 },
  { id: 'BCOA', name: 'Borzoi Club of America', city: 'Manley', state: 'NE', lat: 40.921, lng: -96.171, org: ['ASFA', 'AKC'], region: 5 },

  // Region 6 – Great Lakes
  { id: 'MBC', name: 'Midwest Borzoi Club', city: 'Lima', state: 'OH', lat: 40.742, lng: -84.105, org: ['ASFA'], region: 6 },
  { id: 'MGA', name: 'Michigan Gazehound Association', city: 'Rockwood', state: 'MI', lat: 42.071, lng: -83.246, org: ['ASFA'], region: 6 },
  { id: 'MWCC', name: 'Midwest Coursing Club', city: 'Caledonia', state: 'WI', lat: 42.786, lng: -87.866, org: ['ASFA'], region: 6 },
  { id: 'OKIGO', name: 'Ohio-Kentucky Invitational Gazehound Organization', city: 'Yellow Springs', state: 'OH', lat: 39.800, lng: -83.887, org: ['ASFA'], region: 6 },
  { id: 'SLASH', name: 'Saint Louis Area Sighthounds', city: 'Dix', state: 'IL', lat: 38.447, lng: -88.952, org: ['ASFA'], region: 6 },

  // Region 7 – Southeast
  { id: 'GASM', name: 'Gazehound Association of the Smoky Mountains', city: 'Limestone', state: 'TN', lat: 36.496, lng: -82.628, org: ['ASFA'], region: 7, website: 'https://gasm.club' },
  { id: 'LEGS', name: 'Lure Enthusiasts of the Greater South', city: 'Whitesburg', state: 'GA', lat: 33.504, lng: -84.955, org: ['ASFA'], region: 7 },
  { id: 'BaCOA', name: 'Basenji Club of America', city: 'Shelbyville', state: 'TN', lat: 35.482, lng: -86.459, org: ['ASFA', 'AKC'], region: 7 },

  // Region 8 – Mid-Atlantic
  { id: 'SHOT', name: 'Sight Hound Organization of Tidewater', city: 'Dendron', state: 'VA', lat: 37.048, lng: -76.950, org: ['ASFA'], region: 8 },
  { id: 'TSSC', name: 'Tri-State Sighthound Club', city: 'Slippery Rock', state: 'PA', lat: 41.064, lng: -80.055, org: ['ASFA'], region: 8 },
  { id: 'CHAMP', name: 'Chesapeake Area Members Pack', city: 'Leesburg', state: 'VA', lat: 39.115, lng: -77.563, org: ['ASFA'], region: 8 },
  { id: 'UCBSC', name: 'Upper Chesapeake Bay Sighthound Club', city: 'Hanover', state: 'PA', lat: 39.801, lng: -76.984, org: ['ASFA'], region: 8, website: 'https://hanoverlurecoursingclubs.com' },
  { id: 'MDIHC', name: 'Mason-Dixon Ibizan Hound Club', city: 'Littlestown', state: 'PA', lat: 39.741, lng: -76.930, org: ['ASFA'], region: 8 },
  { id: 'THLC', name: 'Tortoise & Hare Lure Coursers', city: 'Littlestown', state: 'PA', lat: 39.745, lng: -76.925, org: ['ASFA'], region: 8 },
  { id: 'SDCA', name: 'Saluki Dog Club of America', city: 'Rockwood', state: 'PA', lat: 39.671, lng: -79.163, org: ['ASFA', 'AKC'], region: 8 },

  // Region 9 – New England
  { id: 'GONE', name: 'Gazehounds of New England', city: 'Blandford', state: 'MA', lat: 42.149, lng: -72.944, org: ['ASFA'], region: 9, website: 'https://gazehoundsofnewengland.org' },
  { id: 'SANE', name: 'Sighthound Association of New England', city: 'Blandford', state: 'MA', lat: 42.159, lng: -72.950, org: ['ASFA'], region: 9 },

  // Region 10 – Southern California
  { id: 'CCASH', name: 'Central Coast Association of Sighthounds', city: 'Arroyo Grande', state: 'CA', lat: 35.118, lng: -120.590, org: ['ASFA'], region: 10 },
  { id: 'CCA', name: 'California Coursers Association', city: 'Chino Hills', state: 'CA', lat: 33.993, lng: -117.729, org: ['ASFA'], region: 10 },
  { id: 'OCRRC', name: 'Orange County Rhodesian Ridgeback Club', city: 'Chino Hills', state: 'CA', lat: 33.983, lng: -117.739, org: ['ASFA'], region: 10 },

  // National Specialty / Multi-state
  { id: 'IWCA', name: 'Irish Wolfhound Club of America', city: 'Gray Summit', state: 'MO', lat: 38.411, lng: -90.774, org: ['ASFA', 'AKC'], region: null, website: 'https://iwclubofamerica.org' },
  { id: 'SCOA', name: 'Saluki Club of America', city: 'Gray Summit', state: 'MO', lat: 38.421, lng: -90.764, org: ['ASFA', 'AKC'], region: null },

  // Additional AKC / independent clubs
  { id: 'DFB', name: 'Desert Fun Bunch', city: 'Phoenix', state: 'AZ', lat: 33.449, lng: -112.073, org: ['AKC'], region: null, website: 'https://desertfunbunch.org' },
  { id: 'BKC', name: 'Black Knights Coursing', city: 'Pass Christian', state: 'MS', lat: 30.321, lng: -89.251, org: ['AKC'], region: null },
  { id: 'LRTCS', name: 'Luratics', city: 'Lemon Grove', state: 'CA', lat: 32.730, lng: -117.031, org: ['AKC'], region: null },
  { id: 'RACE', name: 'Racing and Coursing Enthusiasts', city: 'Sacramento', state: 'CA', lat: 38.575, lng: -121.487, org: ['ASFA', 'LGRA'], region: 2, website: 'https://aok9racing.com' },
  { id: 'CFSRC', name: 'Central Florida Sighthound Racing Club', city: 'Williston', state: 'FL', lat: 29.387, lng: -82.449, org: ['ASFA', 'LGRA'], region: null },
  { id: 'CLCNY', name: 'Lake Country Lure Coursers', city: 'Fredonia', state: 'NY', lat: 42.441, lng: -79.335, org: ['ASFA'], region: 9, website: 'https://lakecountrylurecoursers.com' },
];

const EVENTS = [
  // April 2026
  { id: 1, abbr: 'ICA', clubName: 'Iowa Coursing Association', name: 'ASFA Trial', startDate: '2026-04-04', endDate: null, city: 'Des Moines', state: 'IA', lat: 41.588, lng: -93.620, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 2, abbr: 'LLCC', clubName: 'Llano Lure Coursing Club', name: 'ASFA Trial', startDate: '2026-04-04', endDate: '2026-04-05', city: 'Estancia', state: 'NM', lat: 34.760, lng: -106.056, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 3, abbr: 'GASM', clubName: 'Gazehound Association of the Smoky Mountains', name: 'ASFA Trial', startDate: '2026-04-04', endDate: '2026-04-05', city: 'Limestone', state: 'TN', lat: 36.496, lng: -82.628, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 4, abbr: 'MBC', clubName: 'Midwest Borzoi Club', name: 'ASFA Trial', startDate: '2026-04-04', endDate: '2026-04-05', city: 'Lima', state: 'OH', lat: 40.742, lng: -84.105, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 5, abbr: 'SHOT', clubName: 'Sight Hound Organization of Tidewater', name: 'ASFA Trial', startDate: '2026-04-04', endDate: '2026-04-05', city: 'Dendron', state: 'VA', lat: 37.048, lng: -76.950, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 6, abbr: 'HCA', clubName: 'Heartland Coursing Association', name: 'ASFA Trial', startDate: '2026-04-11', endDate: '2026-04-12', city: 'Auburn', state: 'KS', lat: 38.902, lng: -95.800, org: 'ASFA', isSpecialty: false, isCancelled: true },
  { id: 7, abbr: 'AWC', clubName: 'American Whippet Club', name: 'AWC National Specialty', startDate: '2026-04-11', endDate: null, city: 'Pasco', state: 'WA', lat: 46.239, lng: -119.100, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 8, abbr: 'GONE', clubName: 'Gazehounds of New England', name: 'ASFA Trial', startDate: '2026-04-11', endDate: '2026-04-12', city: 'Waterford', state: 'CT', lat: 41.352, lng: -72.147, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 9, abbr: 'USRCC', clubName: 'Utah Sighthound Racing & Coursing Club', name: 'ASFA Trial', startDate: '2026-04-18', endDate: '2026-04-19', city: 'Goshen', state: 'UT', lat: 39.960, lng: -112.010, org: 'ASFA', isSpecialty: false, isCancelled: true },
  { id: 10, abbr: 'CLCA', clubName: 'Colorado Lure Coursing Association', name: 'ASFA Trial', startDate: '2026-04-25', endDate: '2026-04-26', city: 'Peyton', state: 'CO', lat: 38.932, lng: -104.296, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 11, abbr: 'MCA', clubName: 'Minnesota Coursing Association', name: 'ASFA Trial', startDate: '2026-04-25', endDate: '2026-04-26', city: 'Farmington', state: 'MN', lat: 44.647, lng: -93.149, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 12, abbr: 'TSSC', clubName: 'Tri-State Sighthound Club', name: 'ASFA Trial', startDate: '2026-04-25', endDate: '2026-04-26', city: 'Slippery Rock', state: 'PA', lat: 41.064, lng: -80.055, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 13, abbr: 'LEGS', clubName: 'Lure Enthusiasts of the Greater South', name: 'ASFA Trial', startDate: '2026-04-25', endDate: '2026-04-26', city: 'Whitesburg', state: 'GA', lat: 33.504, lng: -84.955, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // May 2026
  { id: 14, abbr: 'SISFA', clubName: 'Snake River Sighthound Field Association', name: 'ASFA Trial', startDate: '2026-05-02', endDate: '2026-05-03', city: 'Emmett', state: 'ID', lat: 43.874, lng: -116.499, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 15, abbr: 'ICA', clubName: 'Iowa Coursing Association', name: 'ASFA Trial', startDate: '2026-05-02', endDate: '2026-05-03', city: 'Cedar Falls', state: 'IA', lat: 42.524, lng: -92.445, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 16, abbr: 'CHAMP', clubName: 'Chesapeake Area Members Pack', name: 'ASFA Trial', startDate: '2026-05-02', endDate: '2026-05-03', city: 'Leesburg', state: 'VA', lat: 39.115, lng: -77.563, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 17, abbr: 'BCOA', clubName: 'Borzoi Club of America', name: 'BCOA National Specialty', startDate: '2026-05-09', endDate: null, city: 'Manley', state: 'NE', lat: 40.921, lng: -96.171, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 18, abbr: 'GTCWC', clubName: 'Greater Twin Cities Whippet Club', name: 'ASFA Trial', startDate: '2026-05-09', endDate: '2026-05-10', city: 'Farmington', state: 'MN', lat: 44.657, lng: -93.139, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 19, abbr: 'MGA', clubName: 'Michigan Gazehound Association', name: 'ASFA Trial', startDate: '2026-05-09', endDate: '2026-05-10', city: 'Rockwood', state: 'MI', lat: 42.071, lng: -83.246, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 20, abbr: 'ORCA', clubName: 'Oklahoma Racing & Coursing Association', name: 'ASFA Trial', startDate: '2026-05-09', endDate: '2026-05-10', city: 'Vinita', state: 'OK', lat: 36.636, lng: -95.154, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 21, abbr: 'SDCA', clubName: 'Saluki Dog Club of America', name: 'SDCA National Specialty', startDate: '2026-05-10', endDate: null, city: 'Rockwood', state: 'PA', lat: 39.671, lng: -79.163, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 22, abbr: 'CLCA', clubName: 'Colorado Lure Coursing Association', name: 'ASFA Trial', startDate: '2026-05-16', endDate: '2026-05-17', city: 'Peyton', state: 'CO', lat: 38.932, lng: -104.296, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 23, abbr: 'MWCC', clubName: 'Midwest Coursing Club', name: 'ASFA Trial', startDate: '2026-05-16', endDate: '2026-05-17', city: 'Caledonia', state: 'WI', lat: 42.786, lng: -87.866, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 24, abbr: 'MCA', clubName: 'Minnesota Coursing Association', name: 'ASFA Trial', startDate: '2026-05-16', endDate: '2026-05-17', city: 'Waverly', state: 'MN', lat: 45.074, lng: -94.002, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 25, abbr: 'IWCA', clubName: 'Irish Wolfhound Club of America', name: 'IWCA National Specialty', startDate: '2026-05-21', endDate: null, city: 'Gray Summit', state: 'MO', lat: 38.411, lng: -90.774, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 26, abbr: 'IHCUS', clubName: 'Ibizan Hound Club of the United States', name: 'ASFA Trial', startDate: '2026-05-22', endDate: null, city: 'Cedar Falls', state: 'IA', lat: 42.524, lng: -92.445, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 27, abbr: 'IHCUS', clubName: 'Ibizan Hound Club of the United States', name: 'IHCUS National Specialty', startDate: '2026-05-23', endDate: null, city: 'Cedar Falls', state: 'IA', lat: 42.524, lng: -92.445, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 28, abbr: 'CCASH', clubName: 'Central Coast Association of Sighthounds', name: 'ASFA Trial', startDate: '2026-05-23', endDate: null, city: 'Arroyo Grande', state: 'CA', lat: 35.118, lng: -120.590, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 29, abbr: 'WWWA', clubName: 'Western Washington Whippet Association', name: 'ASFA Trial', startDate: '2026-05-25', endDate: null, city: 'Roy', state: 'WA', lat: 47.025, lng: -122.574, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 30, abbr: 'CCA', clubName: 'California Coursers Association', name: 'ASFA Trial', startDate: '2026-05-30', endDate: '2026-05-31', city: 'Chino Hills', state: 'CA', lat: 33.993, lng: -117.729, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // June 2026
  { id: 31, abbr: 'SCOA', clubName: 'Saluki Club of America', name: 'SCOA National Specialty', startDate: '2026-06-01', endDate: null, city: 'Gray Summit', state: 'MO', lat: 38.421, lng: -90.764, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 32, abbr: 'NCA', clubName: 'Nebraska Coursing Association', name: 'ASFA Trial', startDate: '2026-06-06', endDate: '2026-06-07', city: 'Omaha', state: 'NE', lat: 41.261, lng: -95.937, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 33, abbr: 'GONE', clubName: 'Gazehounds of New England', name: 'ASFA Trial', startDate: '2026-06-06', endDate: '2026-06-07', city: 'Blandford', state: 'MA', lat: 42.149, lng: -72.944, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 34, abbr: 'OCRRC', clubName: 'Orange County Rhodesian Ridgeback Club', name: 'ASFA Trial', startDate: '2026-06-13', endDate: '2026-06-14', city: 'Chino Hills', state: 'CA', lat: 33.983, lng: -117.739, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 35, abbr: 'MWCC', clubName: 'Midwest Coursing Club', name: 'MWCC Specialty', startDate: '2026-06-20', endDate: '2026-06-21', city: 'Caledonia', state: 'WI', lat: 42.786, lng: -87.866, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 36, abbr: 'SWEPT', clubName: 'Sighthounds of Western & Pacific Territory', name: 'ASFA Trial', startDate: '2026-06-28', endDate: null, city: 'Damascus', state: 'OR', lat: 45.413, lng: -122.434, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // July 2026
  { id: 37, abbr: 'UCBSC', clubName: 'Upper Chesapeake Bay Sighthound Club', name: 'ASFA Trial', startDate: '2026-07-04', endDate: '2026-07-05', city: 'Hanover', state: 'PA', lat: 39.801, lng: -76.984, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 38, abbr: 'SWEPT', clubName: 'Sighthounds of Western & Pacific Territory', name: 'ASFA Trial', startDate: '2026-07-05', endDate: null, city: 'Damascus', state: 'OR', lat: 45.413, lng: -122.434, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 39, abbr: 'UCBSC', clubName: 'Upper Chesapeake Bay Sighthound Club', name: 'ASFA Trial', startDate: '2026-07-18', endDate: '2026-07-19', city: 'Hanover', state: 'PA', lat: 39.801, lng: -76.984, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 40, abbr: 'GTCWC', clubName: 'Greater Twin Cities Whippet Club', name: 'ASFA Trial', startDate: '2026-07-18', endDate: '2026-07-19', city: 'Farmington', state: 'MN', lat: 44.657, lng: -93.139, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // August 2026
  { id: 41, abbr: 'GONE', clubName: 'Gazehounds of New England', name: 'ASFA Trial', startDate: '2026-08-01', endDate: '2026-08-02', city: 'Blandford', state: 'MA', lat: 42.149, lng: -72.944, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 42, abbr: 'MDIHC', clubName: 'Mason-Dixon Ibizan Hound Club', name: 'ASFA Trial', startDate: '2026-08-02', endDate: null, city: 'Littlestown', state: 'PA', lat: 39.741, lng: -76.930, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 43, abbr: 'SWEPT', clubName: 'Sighthounds of Western & Pacific Territory', name: 'ASFA Trial', startDate: '2026-08-08', endDate: '2026-08-09', city: 'Roy', state: 'WA', lat: 47.025, lng: -122.574, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // September 2026
  { id: 44, abbr: 'RMIWA', clubName: 'Rocky Mountain Irish Wolfhound Association', name: 'RMIWA Specialty', startDate: '2026-09-02', endDate: null, city: 'Bennett', state: 'CO', lat: 39.750, lng: -104.430, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 45, abbr: 'MCA', clubName: 'Minnesota Coursing Association', name: 'ASFA Trial', startDate: '2026-09-05', endDate: '2026-09-06', city: 'Farmington', state: 'MN', lat: 44.647, lng: -93.149, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 46, abbr: 'SWEPT', clubName: 'Sighthounds of Western & Pacific Territory', name: 'ASFA Trial', startDate: '2026-09-05', endDate: null, city: 'Roy', state: 'WA', lat: 47.025, lng: -122.574, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 47, abbr: 'MDIHC', clubName: 'Mason-Dixon Ibizan Hound Club', name: 'ASFA Trial', startDate: '2026-09-05', endDate: '2026-09-07', city: 'Littlestown', state: 'PA', lat: 39.741, lng: -76.930, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 48, abbr: 'GONE', clubName: 'Gazehounds of New England', name: 'Regional Invitational', startDate: '2026-09-05', endDate: null, city: 'Starkville', state: 'NY', lat: 42.920, lng: -74.210, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 49, abbr: 'GONE', clubName: 'Gazehounds of New England', name: 'ASFA Trial', startDate: '2026-09-06', endDate: null, city: 'Starkville', state: 'NY', lat: 42.920, lng: -74.210, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 50, abbr: 'OKIGO', clubName: 'Ohio-Kentucky Invitational Gazehound Organization', name: 'Regional Invitational VI', startDate: '2026-09-12', endDate: null, city: 'Yellow Springs', state: 'OH', lat: 39.800, lng: -83.887, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 51, abbr: 'LEGS', clubName: 'Lure Enthusiasts of the Greater South', name: 'ASFA Trial', startDate: '2026-09-12', endDate: '2026-09-13', city: 'Whitesburg', state: 'GA', lat: 33.504, lng: -84.955, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 52, abbr: 'OKIGO', clubName: 'Ohio-Kentucky Invitational Gazehound Organization', name: 'ASFA Trial', startDate: '2026-09-13', endDate: null, city: 'Yellow Springs', state: 'OH', lat: 39.800, lng: -83.887, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 53, abbr: 'GTCWC', clubName: 'Greater Twin Cities Whippet Club', name: 'ASFA Trial', startDate: '2026-09-19', endDate: '2026-09-20', city: 'Farmington', state: 'MN', lat: 44.657, lng: -93.139, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 54, abbr: 'SANE', clubName: 'Sighthound Association of New England', name: 'SANE Specialty', startDate: '2026-09-26', endDate: '2026-09-27', city: 'Blandford', state: 'MA', lat: 42.149, lng: -72.944, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 55, abbr: 'USRCC', clubName: 'Utah Sighthound Racing & Coursing Club', name: 'ASFA Trial', startDate: '2026-09-26', endDate: '2026-09-27', city: 'South Jordan', state: 'UT', lat: 40.560, lng: -111.929, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 56, abbr: 'UCBSC', clubName: 'Upper Chesapeake Bay Sighthound Club', name: 'ASFA Trial', startDate: '2026-09-26', endDate: '2026-09-27', city: 'Hanover', state: 'PA', lat: 39.801, lng: -76.984, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // October 2026
  { id: 57, abbr: 'ICA', clubName: 'Iowa Coursing Association', name: 'ASFA Trial', startDate: '2026-10-03', endDate: '2026-10-04', city: 'Cedar Falls', state: 'IA', lat: 42.524, lng: -92.445, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 58, abbr: 'LEGS', clubName: 'Lure Enthusiasts of the Greater South', name: 'Regional Invitational VII', startDate: '2026-10-03', endDate: null, city: 'Whitesburg', state: 'GA', lat: 33.504, lng: -84.955, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 59, abbr: 'LEGS', clubName: 'Lure Enthusiasts of the Greater South', name: 'ASFA Trial', startDate: '2026-10-04', endDate: null, city: 'Whitesburg', state: 'GA', lat: 33.504, lng: -84.955, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 60, abbr: 'BaCOA', clubName: 'Basenji Club of America', name: 'BaCOA National Specialty', startDate: '2026-10-04', endDate: null, city: 'Shelbyville', state: 'TN', lat: 35.482, lng: -86.459, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 61, abbr: 'NCIWC', clubName: 'Northern California Irish Wolfhound Club', name: 'NCIWC Specialty', startDate: '2026-10-09', endDate: null, city: 'Woodland', state: 'CA', lat: 38.679, lng: -121.773, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 62, abbr: 'MCA', clubName: 'Minnesota Coursing Association', name: 'ASFA Trial', startDate: '2026-10-10', endDate: '2026-10-11', city: 'Waverly', state: 'MN', lat: 45.074, lng: -94.002, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 63, abbr: 'MBC', clubName: 'Midwest Borzoi Club', name: 'ASFA Trial', startDate: '2026-10-16', endDate: null, city: 'Dix', state: 'IL', lat: 38.447, lng: -88.952, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 64, abbr: 'MGA', clubName: 'Michigan Gazehound Association', name: 'ASFA Trial', startDate: '2026-10-17', endDate: '2026-10-18', city: 'Rockwood', state: 'MI', lat: 42.071, lng: -83.246, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 65, abbr: 'USRCC', clubName: 'Utah Sighthound Racing & Coursing Club', name: 'USRCC Specialty', startDate: '2026-10-17', endDate: '2026-10-18', city: 'South Jordan', state: 'UT', lat: 40.560, lng: -111.929, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 66, abbr: 'GONE', clubName: 'Gazehounds of New England', name: 'ASFA Trial', startDate: '2026-10-17', endDate: '2026-10-18', city: 'Griswold', state: 'CT', lat: 41.565, lng: -71.962, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 67, abbr: 'SLASH', clubName: 'Sighthound Lure Association of the Southern Heartland', name: 'ASFA Trial', startDate: '2026-10-17', endDate: '2026-10-18', city: 'Dix', state: 'IL', lat: 38.447, lng: -88.952, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 68, abbr: 'HCA', clubName: 'Heartland Coursing Association', name: 'Regional Invitational V', startDate: '2026-10-18', endDate: null, city: 'Kansas City', state: 'MO', lat: 39.099, lng: -94.578, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 69, abbr: 'HCA', clubName: 'Heartland Coursing Association', name: 'ASFA Trial', startDate: '2026-10-24', endDate: '2026-10-25', city: 'Auburn', state: 'KS', lat: 38.902, lng: -95.800, org: 'ASFA', isSpecialty: false, isCancelled: true },
  { id: 70, abbr: 'ASFA', clubName: 'ASFA International', name: 'ASFA International Invitational', startDate: '2026-10-24', endDate: '2026-10-25', city: 'Vinita', state: 'OK', lat: 36.636, lng: -95.154, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 71, abbr: 'NCA', clubName: 'Nebraska Coursing Association', name: 'ASFA Trial', startDate: '2026-10-31', endDate: null, city: 'Omaha', state: 'NE', lat: 41.261, lng: -95.937, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // November 2026
  { id: 72, abbr: 'NCA', clubName: 'Nebraska Coursing Association', name: 'ASFA Trial', startDate: '2026-11-01', endDate: null, city: 'Omaha', state: 'NE', lat: 41.261, lng: -95.937, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 73, abbr: 'LLCC', clubName: 'Llano Lure Coursing Club', name: 'ASFA Trial', startDate: '2026-11-07', endDate: '2026-11-08', city: 'Santa Fe', state: 'NM', lat: 35.687, lng: -105.938, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 74, abbr: 'LEGS', clubName: 'Lure Enthusiasts of the Greater South', name: 'ASFA Trial', startDate: '2026-11-14', endDate: '2026-11-15', city: 'Whitesburg', state: 'GA', lat: 33.504, lng: -84.955, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 75, abbr: 'RMIWA', clubName: 'Rocky Mountain Irish Wolfhound Association', name: 'RMIWA Specialty', startDate: '2026-11-21', endDate: '2026-11-22', city: 'Bennett', state: 'CO', lat: 39.750, lng: -104.430, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 76, abbr: 'OCRRC', clubName: 'Orange County Rhodesian Ridgeback Club', name: 'Regional Invitational X', startDate: '2026-11-27', endDate: null, city: 'Chino Hills', state: 'CA', lat: 33.983, lng: -117.739, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 77, abbr: 'UCBSC', clubName: 'Upper Chesapeake Bay Sighthound Club', name: 'ASFA Trial', startDate: '2026-11-27', endDate: '2026-11-29', city: 'Hanover', state: 'PA', lat: 39.801, lng: -76.984, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // December 2026
  { id: 78, abbr: 'TSSC', clubName: 'Tri-State Sighthound Club', name: 'ASFA Trial', startDate: '2026-12-05', endDate: '2026-12-06', city: 'Slippery Rock', state: 'PA', lat: 41.064, lng: -80.055, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 79, abbr: 'SLASH', clubName: 'Sighthound Lure Association of the Southern Heartland', name: 'ASFA Trial', startDate: '2026-12-27', endDate: '2026-12-28', city: 'Sorento', state: 'IL', lat: 38.988, lng: -89.570, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 80, abbr: 'UCBSC', clubName: 'Upper Chesapeake Bay Sighthound Club', name: 'ASFA Trial', startDate: '2026-12-27', endDate: '2026-12-31', city: 'Hanover', state: 'PA', lat: 39.801, lng: -76.984, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // ── Early 2026 ASFA (January–March) ──────────────────────────────────────
  { id: 81, abbr: 'DFB', clubName: 'Desert Fun Bunch', name: 'ASFA Specialty', startDate: '2026-01-17', endDate: '2026-01-18', city: 'Black Canyon City', state: 'AZ', lat: 34.065, lng: -112.125, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 82, abbr: 'OCRRC', clubName: 'Orange County Rhodesian Ridgeback Club', name: 'ASFA Specialty', startDate: '2026-02-14', endDate: '2026-02-15', city: 'Chino Hills', state: 'CA', lat: 33.983, lng: -117.739, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 83, abbr: 'CLCA', clubName: 'Colorado Lure Coursing Association', name: 'ASFA Trial', startDate: '2026-02-21', endDate: '2026-02-22', city: 'Peyton', state: 'CO', lat: 38.932, lng: -104.296, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 84, abbr: 'DFB', clubName: 'Desert Fun Bunch', name: 'ASFA Specialty', startDate: '2026-02-21', endDate: '2026-02-22', city: 'Tonopah', state: 'AZ', lat: 33.574, lng: -112.938, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 85, abbr: 'NCIWC', clubName: 'Northern California Irish Wolfhound Club', name: 'ASFA Trial', startDate: '2026-02-28', endDate: null, city: 'Fairfield', state: 'CA', lat: 38.249, lng: -122.040, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 86, abbr: 'THLC', clubName: 'Tortoise & Hare Lure Coursers', name: 'ASFA Trial', startDate: '2026-03-07', endDate: '2026-03-08', city: 'Littlestown', state: 'PA', lat: 39.741, lng: -76.930, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 87, abbr: 'CLCA', clubName: 'Colorado Lure Coursing Association', name: 'ASFA Trial', startDate: '2026-03-14', endDate: '2026-03-15', city: 'Peyton', state: 'CO', lat: 38.932, lng: -104.296, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 88, abbr: 'SWC', clubName: 'Silken Windhounds of California', name: 'ASFA Specialty', startDate: '2026-03-28', endDate: '2026-03-29', city: 'Elverta', state: 'CA', lat: 38.713, lng: -121.406, org: 'ASFA', isSpecialty: true, isCancelled: false },
  { id: 89, abbr: 'LEGS', clubName: 'Lure Enthusiasts of the Greater South', name: 'ASFA Trial', startDate: '2026-03-28', endDate: '2026-03-29', city: 'Whitesburg', state: 'GA', lat: 33.504, lng: -84.955, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 90, abbr: 'SLASH', clubName: 'Sighthound Lure Association of the Southern Heartland', name: 'ASFA Trial', startDate: '2026-03-28', endDate: '2026-03-29', city: 'Sorento', state: 'IL', lat: 38.988, lng: -89.570, org: 'ASFA', isSpecialty: false, isCancelled: false },
  { id: 91, abbr: 'UCBSC', clubName: 'Upper Chesapeake Bay Sighthound Club', name: 'ASFA Trial', startDate: '2026-03-28', endDate: '2026-03-29', city: 'Hanover', state: 'PA', lat: 39.801, lng: -76.984, org: 'ASFA', isSpecialty: false, isCancelled: false },

  // ── AKC Lure Coursing Trials ──────────────────────────────────────────────
  { id: 92, abbr: 'DFB', clubName: 'Desert Fun Bunch', name: 'AKC Lure Coursing Trial', startDate: '2026-01-17', endDate: '2026-01-18', city: 'Black Canyon City', state: 'AZ', lat: 34.065, lng: -112.125, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 93, abbr: 'DFB', clubName: 'Desert Fun Bunch', name: 'AKC Lure Coursing Trial', startDate: '2026-02-21', endDate: '2026-02-22', city: 'Tonopah', state: 'AZ', lat: 33.574, lng: -112.938, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 94, abbr: 'SCIHC', clubName: 'Sighthound Club of the Inner Heartland Canada', name: 'AKC Lure Coursing Trial', startDate: '2026-05-16', endDate: '2026-05-17', city: 'East Helena', state: 'MT', lat: 46.594, lng: -111.927, org: 'AKC', isSpecialty: false, isCancelled: false },

  // ── AKC Fast CAT (Black Knights Coursing) ────────────────────────────────
  { id: 95, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-04-03', endDate: '2026-04-05', city: 'Fort Pierce', state: 'FL', lat: 27.447, lng: -80.326, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 96, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-04-17', endDate: '2026-04-19', city: 'Ruston', state: 'LA', lat: 32.523, lng: -92.638, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 97, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-04-24', endDate: '2026-04-26', city: 'Mesquite', state: 'TX', lat: 32.764, lng: -96.599, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 98, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-05-14', endDate: '2026-05-17', city: 'Fort Myers', state: 'FL', lat: 26.640, lng: -81.872, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 99, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-05-21', endDate: '2026-05-25', city: 'Kalamazoo', state: 'MI', lat: 42.292, lng: -85.588, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 100, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-06-05', endDate: '2026-06-07', city: 'Fort Pierce', state: 'FL', lat: 27.447, lng: -80.326, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 101, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-06-10', endDate: '2026-06-14', city: 'Tampa', state: 'FL', lat: 27.950, lng: -82.457, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 102, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-07-09', endDate: '2026-07-12', city: 'Marshall', state: 'MI', lat: 42.272, lng: -84.958, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 103, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-07-16', endDate: '2026-07-19', city: 'South Bend', state: 'IN', lat: 41.676, lng: -86.252, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 104, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-08-26', endDate: '2026-08-30', city: 'Lexington', state: 'KY', lat: 38.050, lng: -84.503, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 105, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-09-18', endDate: '2026-09-20', city: 'Greensburg', state: 'IN', lat: 39.337, lng: -85.485, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 106, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-10-09', endDate: '2026-10-12', city: 'Fort Pierce', state: 'FL', lat: 27.447, lng: -80.326, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 107, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-10-30', endDate: '2026-11-01', city: 'Columbus', state: 'IN', lat: 39.202, lng: -85.921, org: 'AKC', isSpecialty: false, isCancelled: false },
  { id: 108, abbr: 'BKC', clubName: 'Black Knights Coursing', name: 'AKC Fast CAT', startDate: '2026-11-06', endDate: '2026-11-08', city: 'Denison', state: 'TX', lat: 33.755, lng: -96.537, org: 'AKC', isSpecialty: false, isCancelled: false },
];
