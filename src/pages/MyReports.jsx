import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Users, Search, ArrowRight, ClipboardList, PlusCircle } from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { CATEGORIES } from '../data/categories';
import CategoryIcon from '../components/CategoryIcon';
import StatusBadge from '../components/StatusBadge';

export default function MyReports({ showToast }) {
  const navigate = useNavigate();
  const { myReportsList, getReportById } = useReports();
  const [trackInput, setTrackInput] = useState('');

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    const cleanId = trackInput.trim().toUpperCase();
    if (!cleanId) return;

    const found = getReportById(cleanId);
    if (found) {
      navigate(`/incident/${found.id}`);
    } else {
      if (showToast) showToast(`No report found for "${cleanId}"`);
    }
  };

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <div className="page-top-nav">
        <h1 className="page-title" style={{ fontSize: 18 }}>My Reports</h1>
        <button
          className="btn-secondary"
          style={{ width: 'auto', padding: '6px 12px', fontSize: 12, borderRadius: 20 }}
          onClick={() => navigate('/report/problem?category=electricity')}
        >
          <PlusCircle size={14} color="#3B49DF" />
          <span>New Report</span>
        </button>
      </div>

      <div className="flow-content">
        {/* User's Reports List */}
        {myReportsList.length > 0 ? (
          <div className="incidents-list" style={{ padding: 0 }}>
            {myReportsList.map((report) => {
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
                          <span>{report.location}</span>
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={report.status} />
                  </div>

                  <div className="incident-footer">
                    <div className="incident-meta">
                      <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#3B49DF' }}>
                        {report.id}
                      </span>
                      <span>•</span>
                      <span>{report.createdAt}</span>
                    </div>
                    <div className="incident-affected-tag">
                      <Users size={12} />
                      <span>{report.affectedCount} affected</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px', background: '#FFFFFF', borderRadius: 16, border: '1px solid #E2E8F0' }}>
            <ClipboardList size={36} color="#94A3B8" style={{ margin: '0 auto 8px' }} />
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>
              No reports yet
            </div>
            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 16 }}>
              You haven't submitted any incident reports yet.
            </div>
            <button
              className="btn-primary"
              style={{ width: 'auto', margin: '0 auto', padding: '10px 20px', fontSize: 13 }}
              onClick={() => navigate('/report/problem?category=electricity')}
            >
              Report an Issue
            </button>
          </div>
        )}

        {/* Track by Report ID Card */}
        <div className="track-id-box" style={{ marginTop: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>
            Track by Report ID
          </div>
          <div style={{ fontSize: 11, color: '#64748B' }}>
            Have a tracking code from a neighbor or SMS?
          </div>
          <form onSubmit={handleTrackSubmit} className="track-input-row">
            <input
              type="text"
              placeholder="e.g. FT-2024-0859"
              className="track-input"
              value={trackInput}
              onChange={(e) => setTrackInput(e.target.value)}
            />
            <button type="submit" className="track-btn">
              Track
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
