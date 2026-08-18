/**
 * DEMO / PROTOTYPE INCIDENT DATA
 * Fictional mock incident records for hackathon demonstration purposes in The Gambia.
 * Note: These are simulated records and not connected to live government systems.
 */

export const INITIAL_REPORTS = [
  {
    id: 'FT-2024-0859',
    category: 'electricity',
    problem: 'Power outage',
    location: 'Sukuta',
    specificLocation: 'Sukuta, Nemasu Junction',
    status: 'investigating', // 'reported' | 'acknowledged' | 'investigating' | 'resolved'
    createdAt: '25 minutes ago',
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    distance: '0.2 km away',
    affectedCount: 87,
    photo: null,
    updates: [
      {
        id: 'u-3',
        title: 'Field repair crew on site',
        department: 'NAWEC Emergency Response',
        time: '10 minutes ago',
        description: 'Field technical team arrived at Sukuta Nemasu substation. Fault isolation and line switching in progress to restore power to affected sectors.'
      },
      {
        id: 'u-2',
        title: 'Technical team dispatched',
        department: 'NAWEC Grid Operations',
        time: '20 minutes ago',
        description: 'Emergency response unit mobilized from Kotu dispatch center with transformer diagnostic equipment.'
      },
      {
        id: 'u-1',
        title: 'Report acknowledged & prioritized',
        department: 'Community Alert Desk',
        time: '25 minutes ago',
        description: 'High-priority area outage report logged. Community reports clustered across Sukuta Nemasu feeder.'
      }
    ]
  },
  {
    id: 'FT-2024-0847',
    category: 'electricity',
    problem: 'Broken transformer',
    location: 'Serekunda',
    specificLocation: 'Serekunda, Sayerr Jobe Avenue',
    status: 'acknowledged',
    createdAt: '2 hours ago',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    distance: '0.5 km away',
    affectedCount: 142,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Work order generated',
        department: 'NAWEC Electrical Unit',
        time: '1 hour ago',
        description: 'Area substation inspection completed. Replacement 500kVA transformer requested from central stores.'
      },
      {
        id: 'u-1',
        title: 'Report registered',
        department: 'Community Alert Desk',
        time: '2 hours ago',
        description: 'Incident verified and assigned to NAWEC Greater Banjul electrical division.'
      }
    ]
  },
  {
    id: 'FT-2024-0839',
    category: 'electricity',
    problem: 'Fallen power line',
    location: 'Bundung',
    specificLocation: 'Bundung, Borehole Junction',
    status: 'resolved',
    createdAt: '1 day ago',
    timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
    distance: '1.1 km away',
    affectedCount: 54,
    photo: null,
    updates: [
      {
        id: 'u-3',
        title: 'Hazard secured & line re-tensioned',
        department: 'NAWEC Emergency Unit',
        time: '18 hours ago',
        description: 'Downed cable cleared from public roadway, overhead line replaced, and power safely restored.'
      },
      {
        id: 'u-2',
        title: 'Emergency crew on site',
        department: 'NAWEC Rapid Response',
        time: '23 hours ago',
        description: 'Area isolated and safety perimeter established around downed line.'
      },
      {
        id: 'u-1',
        title: 'Critical hazard report received',
        department: 'Community Alert Desk',
        time: '1 day ago',
        description: 'Emergency dispatch protocol triggered for fallen line in Bundung.'
      }
    ]
  },
  {
    id: 'FT-2024-0812',
    category: 'water',
    problem: 'No water supply',
    location: 'Bakau',
    specificLocation: 'Bakau, Newtown Road',
    status: 'reported',
    createdAt: '40 minutes ago',
    timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
    distance: '1.4 km away',
    affectedCount: 63,
    photo: null,
    updates: [
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert Desk',
        time: '40 minutes ago',
        description: 'Complete water outage logged for Bakau Newtown sector. Forwarded to NAWEC Water Division dispatch.'
      }
    ]
  },
  {
    id: 'FT-2024-0820',
    category: 'water',
    problem: 'Burst water pipe',
    location: 'Fajara',
    specificLocation: 'Fajara, Kairaba Avenue',
    status: 'investigating',
    createdAt: '3 hours ago',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    distance: '2.1 km away',
    affectedCount: 29,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Valve shut off & excavation started',
        department: 'NAWEC Water Division',
        time: '1 hour ago',
        description: 'Emergency plumbing crew closed main distribution valve on Kairaba Avenue; pipe section replacement underway.'
      },
      {
        id: 'u-1',
        title: 'Report acknowledged',
        department: 'Community Alert Desk',
        time: '3 hours ago',
        description: 'High-pressure mains leak verified. Field repair team dispatched.'
      }
    ]
  },
  {
    id: 'FT-2024-0790',
    category: 'roads',
    problem: 'Pothole',
    location: 'Serekunda',
    specificLocation: 'Serekunda, Mosque Road',
    status: 'resolved',
    createdAt: '2 days ago',
    timestamp: new Date(Date.now() - 52 * 60 * 60 * 1000).toISOString(),
    distance: '0.9 km away',
    affectedCount: 118,
    photo: null,
    updates: [
      {
        id: 'u-3',
        title: 'Asphalt patching completed',
        department: 'NRA Maintenance',
        time: '1 day ago',
        description: 'National Roads Authority road crew filled and leveled severe potholes near Mosque Road junction.'
      },
      {
        id: 'u-2',
        title: 'Site assessment completed',
        department: 'NRA Field Inspection',
        time: '1.5 days ago',
        description: 'Road damage measured and marked for emergency hot-mix asphalt patching.'
      },
      {
        id: 'u-1',
        title: 'Report acknowledged',
        department: 'Community Alert Desk',
        time: '2 days ago',
        description: 'Road hazard logged and forwarded to National Roads Authority maintenance unit.'
      }
    ]
  },
  {
    id: 'FT-2024-0828',
    category: 'roads',
    problem: 'Flooded/blocked drainage',
    location: 'Kanifing',
    specificLocation: 'Kanifing, Jimpex Road',
    status: 'investigating',
    createdAt: '4 hours ago',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    distance: '1.8 km away',
    affectedCount: 76,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Drain clearing crew operating',
        department: 'NRA Maintenance',
        time: '1.5 hours ago',
        description: 'Excavator deployed along Jimpex culvert to clear sediment buildup and restore stormwater drainage flow.'
      },
      {
        id: 'u-1',
        title: 'Report received & verified',
        department: 'Community Alert Desk',
        time: '4 hours ago',
        description: 'Heavy water accumulation blocking roadway reported near industrial zone.'
      }
    ]
  },
  {
    id: 'FT-2024-0805',
    category: 'roads',
    problem: 'Damaged road',
    location: 'Brikama',
    specificLocation: 'Brikama, Nyambai Forest Road',
    status: 'acknowledged',
    createdAt: '1 day ago',
    timestamp: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString(),
    distance: '4.2 km away',
    affectedCount: 92,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Road resurfacing scheduled',
        department: 'BAC Works Department',
        time: '16 hours ago',
        description: 'Brikama Area Council engineering team completed road survey and queued grading work.'
      },
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert Desk',
        time: '1 day ago',
        description: 'Severely eroded road surface reported affecting commercial minibus transport.'
      }
    ]
  },
  {
    id: 'FT-2024-0833',
    category: 'waste',
    problem: 'Uncollected waste',
    location: 'Tallinding',
    specificLocation: 'Tallinding, Buffer Zone Market',
    status: 'acknowledged',
    createdAt: '5 hours ago',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    distance: '1.3 km away',
    affectedCount: 47,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Collection truck routed',
        department: 'KMC Cleansing Services',
        time: '2 hours ago',
        description: 'Kanifing Municipal Council dispatch scheduled compactor truck for evening collection run at Buffer Zone market.'
      },
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert Desk',
        time: '5 hours ago',
        description: 'Overflowing communal skip reported near market entrance.'
      }
    ]
  },
  {
    id: 'FT-2024-0816',
    category: 'waste',
    problem: 'Illegal dumping',
    location: 'Bundung',
    specificLocation: 'Bundung, Mauritano Area',
    status: 'investigating',
    createdAt: '6 hours ago',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    distance: '1.0 km away',
    affectedCount: 38,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Sanitation inspection team on site',
        department: 'KMC Environmental Health',
        time: '2 hours ago',
        description: 'Municipal health officers inspecting open dumping area and coordinating clearing equipment.'
      },
      {
        id: 'u-1',
        title: 'Report acknowledged',
        department: 'Community Alert Desk',
        time: '6 hours ago',
        description: 'Illegal domestic refuse site logged for municipal removal.'
      }
    ]
  },
  {
    id: 'FT-2024-0772',
    category: 'streetlights',
    problem: 'Broken streetlight',
    location: 'Sukuta',
    specificLocation: 'Sukuta, Health Center Road',
    status: 'reported',
    createdAt: '1 hour ago',
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    distance: '0.3 km away',
    affectedCount: 19,
    photo: null,
    updates: [
      {
        id: 'u-1',
        title: 'Report submitted',
        department: 'Community Alert Desk',
        time: '1 hour ago',
        description: 'Broken solar lamp fixture reported near Sukuta Health Center gate.'
      }
    ]
  },
  {
    id: 'FT-2024-0765',
    category: 'streetlights',
    problem: 'Dark street',
    location: 'Bakau',
    specificLocation: 'Bakau, Cape Point Highway',
    status: 'investigating',
    createdAt: '1 day ago',
    timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    distance: '2.6 km away',
    affectedCount: 105,
    photo: null,
    updates: [
      {
        id: 'u-2',
        title: 'Lighting crew checking circuit box',
        department: 'BAC & NAWEC Lighting Unit',
        time: '8 hours ago',
        description: 'Electricians inspecting circuit breaker and underground cable faults along Cape Point stretch.'
      },
      {
        id: 'u-1',
        title: 'Report acknowledged',
        department: 'Community Alert Desk',
        time: '1 day ago',
        description: 'Continuous stretch of 12 streetlights unlit reported along main tourist and commuter corridor.'
      }
    ]
  }
];
