export const INITIAL_REPORTS = [
  {
    id: 'FT-2024-0859',
    category: 'electricity',
    problem: 'Power outage',
    location: 'Bundung',
    specificLocation: 'Near Bundung Maternal Hospital',
    status: 'reported', // 'reported' | 'acknowledged' | 'investigating' | 'resolved'
    createdAt: '15 minutes ago',
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    distance: '0.1 km away',
    affectedCount: 2,
    photo: null,
    updates: [
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert',
        time: '15 minutes ago',
        description: 'New issue reported in Bundung. Dispatched notification to NAWEC emergency operations center.'
      }
    ]
  },
  {
    id: 'FT-2024-0847',
    category: 'electricity',
    problem: 'Power outage',
    location: 'Serekunda',
    specificLocation: 'Serekunda, Pipeline Road',
    status: 'investigating',
    createdAt: '2 hours ago',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    distance: '0.3 km away',
    affectedCount: 43,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Technical field crew dispatched',
        department: 'NAWEC Electrical Unit',
        time: '45 minutes ago',
        description: 'Field inspection crew has been dispatched to inspect transformer along Pipeline Road.'
      },
      {
        id: 'u-1',
        title: 'Department of Utilities acknowledged',
        department: 'NAWEC Operations',
        time: '1 hour ago',
        description: 'Issue reviewed and prioritized for area grid line inspection.'
      }
    ]
  },
  {
    id: 'FT-2024-0825',
    category: 'roads',
    problem: 'Flooding/blocked drainage',
    location: 'Tallinding',
    specificLocation: 'Tallinding, Buffer Zone Road',
    status: 'investigating',
    createdAt: '3 hours ago',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    distance: '0.8 km away',
    affectedCount: 31,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Drainage clearance team deployed',
        department: 'NRA Maintenance',
        time: '1 hour ago',
        description: 'National Roads Authority excavation crew dispatched to clear blocked culvert and drain standing water.'
      },
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert',
        time: '3 hours ago',
        description: 'Heavy water accumulation blocking roadway reported near Buffer Zone.'
      }
    ]
  },
  {
    id: 'FT-2024-0812',
    category: 'water',
    problem: 'Pipe burst or leak',
    location: 'Bakau',
    specificLocation: 'Bakau, Atlantic Road',
    status: 'reported',
    createdAt: '4 hours ago',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    distance: '1.2 km away',
    affectedCount: 17,
    photo: null,
    updates: [
      {
        id: 'u-1',
        title: 'Water department notified',
        department: 'NAWEC Water Division',
        time: '3 hours ago',
        description: 'Mains pipe burst reported near Atlantic Road junction. Scheduled for emergency team.'
      }
    ]
  },
  {
    id: 'FT-2024-0833',
    category: 'waste',
    problem: 'Garbage not collected',
    location: 'Fajara',
    specificLocation: 'Fajara, Kairaba Avenue',
    status: 'acknowledged',
    createdAt: '1 day ago',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    distance: '2.5 km away',
    affectedCount: 28,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Waste management team notified',
        department: 'KMC Cleansing Services',
        time: '18 hours ago',
        description: 'KMC sanitation crew routed collection truck for tomorrow morning shift.'
      },
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert',
        time: '1 day ago',
        description: 'Overflowing commercial and residential waste flagged on Kairaba Avenue.'
      }
    ]
  },
  {
    id: 'FT-2024-0765',
    category: 'streetlights',
    problem: 'Whole street is dark',
    location: 'Brikama',
    specificLocation: 'Brikama, Market Street',
    status: 'investigating',
    createdAt: '2 days ago',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    distance: '3.4 km away',
    affectedCount: 62,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Electrician dispatched',
        department: 'BAC Works Department',
        time: '1 day ago',
        description: 'Department of Utilities acknowledged and dispatched line engineer to check breaker box.'
      },
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert',
        time: '2 days ago',
        description: 'Street lighting blackout reported along market stretch.'
      }
    ]
  },
  {
    id: 'FT-2024-0790',
    category: 'roads',
    problem: 'Pothole',
    location: 'Kanifing',
    specificLocation: 'Kanifing, Mosque Road',
    status: 'resolved',
    createdAt: '3 days ago',
    timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
    distance: '1.6 km away',
    affectedCount: 2,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Road debris cleared and patched',
        department: 'NRA Maintenance',
        time: '1 day ago',
        description: 'Road crew patched pothole and removed hazardous gravel. Issue resolved.'
      },
      {
        id: 'u-1',
        title: 'Report acknowledged',
        department: 'Municipal Works',
        time: '3 days ago',
        description: 'Pothole logged for immediate asphalt repair.'
      }
    ]
  }
];
