import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, MapPin, Users } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useReports } from '../context/ReportContext';
import CategoryIcon from '../components/CategoryIcon';
import StatusBadge from '../components/StatusBadge';

export default function Home() {
  const navigate = useNavigate();
  const { reports, updateDraft, resetDraft } = useReports();

  const handleSelectCategory = (categoryId) => {
    resetDraft();
    updateDraft({ category: categoryId });
    navigate(`/report/problem?category=${categoryId}`);
  };

  // Preview top 3 reports for the home feed
  const recentReports = reports.slice(0, 3);

  // Compute area metrics
  const totalCount = reports.length;
  const inProgressCount = reports.filter((r) => r.status === 'investigating' || r.status === 'acknowledged').length;
  const resolvedCount = reports.filter((r) => r.status === 'resolved').length;

  return (
    <div className="page-wrapper">
      {/* Hero Header */}
      <header className="hero-header">
        <div className="hero-top-row">
          <div className="brand-logo">
            <span>Fum Tolu?</span>
            <span role="img" aria-label="Gambia">🇬🇲</span>
          </div>
          <div className="badge-live-count">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
            <span>1.1k +</span>
          </div>
        </div>

        <h1 className="hero-title">
          What's happening<br />near you?
        </h1>
        <p className="hero-subtitle">Tap a service to report a problem</p>
      </header>

      {/* Report a Problem Categories Grid */}
      <div className="section-label">Report a Problem</div>
      <div className="category-grid">
        {CATEGORIES.map((cat, idx) => {
          const isLastOdd = idx === CATEGORIES.length - 1 && CATEGORIES.length % 2 !== 0;
          return (
            <button
              key={cat.id}
              className={`category-card ${isLastOdd ? 'span-full' : ''}`}
              onClick={() => handleSelectCategory(cat.id)}
            >
              {isLastOdd ? (
                <div className="category-card-horizontal-inner">
                  <div className="category-card-icon" style={{ backgroundColor: cat.bgColor }}>
                    <CategoryIcon category={cat.id} color={cat.iconColor} size={22} />
                  </div>
                  <div className="category-card-text-group">
                    <div className="category-card-title">{cat.title}</div>
                    <div className="category-card-subtitle">{cat.subtitle}</div>
                  </div>
                  <div className="category-card-action">
                    <span>Tap to report</span>
                    <ChevronRight size={13} />
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div className="category-card-icon" style={{ backgroundColor: cat.bgColor }}>
                      <CategoryIcon category={cat.id} color={cat.iconColor} size={22} />
                    </div>
                    <div className="category-card-title">{cat.title}</div>
                    <div className="category-card-subtitle">{cat.subtitle}</div>
                  </div>
                  <div className="category-card-action">
                    <span>Tap to report</span>
                    <ChevronRight size={13} />
                  </div>
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Problems Near You Section */}
      <div className="section-header-row">
        <h2 className="section-title">Problems near you</h2>
        <Link to="/nearby" className="see-all-btn">
          <span>See all</span>
          <ChevronRight size={14} />
        </Link>
      </div>

      <div className="incidents-list">
        {recentReports.map((report) => {
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
        })}
      </div>

      {/* This Week in Your Area Stats */}
      <div className="stats-container">
        <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: 0.5 }}>
          This week in your AREA
        </div>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">{totalCount}</div>
            <div className="stat-label">Reports</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" style={{ color: '#D97706' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EAB308', display: 'inline-block' }} />
              <span>{inProgressCount}</span>
            </div>
            <div className="stat-label">In progress</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" style={{ color: '#16A34A' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
              <span>{resolvedCount}</span>
            </div>
            <div className="stat-label">Resolved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
