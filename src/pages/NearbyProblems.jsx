import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Users, Filter } from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { CATEGORIES } from '../data/categories';
import CategoryIcon from '../components/CategoryIcon';
import StatusBadge from '../components/StatusBadge';

export default function NearbyProblems() {
  const { reports } = useReports();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All', icon: null },
    { id: 'electricity', label: 'Electricity', icon: 'Zap' },
    { id: 'water', label: 'Water', icon: 'Droplets' },
    { id: 'roads', label: 'Roads', icon: 'Construction' },
    { id: 'waste', label: 'Waste', icon: 'Trash2' },
    { id: 'streetlights', label: 'Streetlights', icon: 'Lightbulb' },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesCategory = selectedFilter === 'all' || report.category === selectedFilter;
    const matchesSearch =
      report.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (report.specificLocation && report.specificLocation.toLowerCase().includes(searchQuery.toLowerCase())) ||
      report.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <div className="page-top-nav">
        <h1 className="page-title" style={{ fontSize: 18 }}>Problems near you</h1>
        <div className="badge-live-count" style={{ backgroundColor: '#EEF2FF', color: '#3B49DF', borderColor: '#C7D2FE' }}>
          <span>{reports.length} Reports</span>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ padding: '12px 16px 0 16px' }}>
        <div className="neighbourhoods-search-bar" style={{ margin: 0 }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search problems, areas, or IDs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-tabs-row">
        {filterTabs.map((tab) => {
          const isActive = selectedFilter === tab.id;
          return (
            <button
              key={tab.id}
              className={`filter-tab ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tab.id)}
            >
              {tab.id !== 'all' && (
                <CategoryIcon
                  category={tab.id}
                  size={14}
                  color={isActive ? '#FFFFFF' : '#64748B'}
                />
              )}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Incidents List */}
      <div className="incidents-list">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => {
            const categoryObj = CATEGORIES.find((c) => c.id === report.category);

            return (
              <Link
                key={report.id}
                to={`/incident/${report.id}`}
                className="incident-card"
              >
                <div className="incident-header">
                  <div className="incident-title-group">
                    <div
                      className="incident-icon-pill"
                      style={{
                        backgroundColor: categoryObj?.bgColor || '#FEF3C7',
                        color: categoryObj?.iconColor || '#D97706',
                      }}
                    >
                      <CategoryIcon category={report.category} size={18} />
                    </div>
                    <div>
                      <div className="incident-title">{report.problem}</div>
                      <div className="incident-location">
                        <MapPin size={11} />
                        <span>{report.specificLocation || report.location}</span>
                      </div>
                    </div>
                  </div>
                  <StatusBadge status={report.status} />
                </div>

                <div className="incident-footer">
                  <div className="incident-meta">
                    <span>{report.createdAt}</span>
                    <span>•</span>
                    <span>{report.distance}</span>
                  </div>
                  <div className="incident-affected-tag">
                    <Users size={12} />
                    <span>{report.affectedCount} affected</span>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94A3B8' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#64748B', marginBottom: 4 }}>
              No incidents found
            </div>
            <div style={{ fontSize: 12 }}>
              Try adjusting your search or category filter.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
