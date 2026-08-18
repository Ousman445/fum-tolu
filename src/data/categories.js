export const CATEGORIES = [
  {
    id: 'electricity',
    title: 'Electricity',
    subtitle: 'Power outage, sparks, lines',
    iconName: 'Zap',
    badgeColor: '#F59E0B',
    bgColor: '#FEF3C7',
    iconColor: '#D97706',
    problems: [
      { id: 'power-outage', label: 'Power outage' },
      { id: 'broken-transformer', label: 'Broken transformer' },
      { id: 'fallen-power-line', label: 'Fallen power line' },
      { id: 'flickering-electricity', label: 'Flickering electricity' },
      { id: 'no-power-days', label: 'No power for days' },
    ]
  },
  {
    id: 'water',
    title: 'Water',
    subtitle: 'Leaks, burst pipes, no supply',
    iconName: 'Droplets',
    badgeColor: '#0284C7',
    bgColor: '#E0F2FE',
    iconColor: '#0284C7',
    problems: [
      { id: 'no-water', label: 'No water supply' },
      { id: 'burst-pipe', label: 'Burst water pipe' },
      { id: 'low-pressure', label: 'Low water pressure' },
      { id: 'dirty-water', label: 'Contaminated / dirty water' },
      { id: 'broken-tap', label: 'Broken public tap' },
    ]
  },
  {
    id: 'roads',
    title: 'Roads',
    subtitle: 'Potholes, flooding, damage',
    iconName: 'Construction',
    badgeColor: '#EA580C',
    bgColor: '#FFEDD5',
    iconColor: '#C2410C',
    problems: [
      { id: 'pothole', label: 'Pothole' },
      { id: 'flooded-drainage', label: 'Flooded/blocked drainage' },
      { id: 'damaged-road', label: 'Damaged road' },
      { id: 'fallen-tree-debris', label: 'Fallen tree or debris' },
      { id: 'damaged-road-sign', label: 'Damaged road sign' },
    ]
  },
  {
    id: 'waste',
    title: 'Waste',
    subtitle: 'Dumping, uncollected bin',
    iconName: 'Trash2',
    badgeColor: '#16A34A',
    bgColor: '#DCFCE7',
    iconColor: '#16A34A',
    problems: [
      { id: 'uncollected-waste', label: 'Uncollected waste' },
      { id: 'illegal-dumping', label: 'Illegal dumping' },
      { id: 'overflowing-bin', label: 'Overflowing public bin' },
      { id: 'blocked-drainage', label: 'Blocked drainage / gutter' },
      { id: 'dead-animal', label: 'Uncollected dead animal' },
    ]
  },
  {
    id: 'streetlights',
    title: 'Streetlights',
    subtitle: 'Broken light, dark streets',
    iconName: 'Lightbulb',
    badgeColor: '#EAB308',
    bgColor: '#FEF9C3',
    iconColor: '#CA8A04',
    problems: [
      { id: 'broken-streetlight', label: 'Broken streetlight' },
      { id: 'dark-street', label: 'Dark street' },
      { id: 'flickering-light', label: 'Flickering street light' },
      { id: 'broken-pole', label: 'Broken pole or fixture' },
      { id: 'daytime-light', label: 'Light on during daytime' },
    ]
  }
];

export const GAMBIAN_NEIGHBOURHOODS = [
  'Serekunda',
  'Bakau',
  'Fajara',
  'Kanifing',
  'Brikama',
  'Tallinding',
  'Sukuta',
  'Old Yundum',
  'Banjul',
  'Serekunda East',
  'Abuko',
  'Bundung',
  'Latrikunda',
  'Sinchu Alhagie',
  'Brusubi',
  'Kotú',
  'Kololi',
  'Tabokoto',
  'Lamin',
  'Gunjur'
];
