import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Check, Share2, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { CATEGORIES } from '../data/categories';
import CategoryIcon from '../components/CategoryIcon';
import StatusBadge from '../components/StatusBadge';
import ProgressTracker from '../components/ProgressTracker';

export default function ProblemDetail({ showToast }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getReportById, toggleAffected, isAffected } = useReports();

  const report = getReportById(id);

  if (!report) {
    return (
      <div className="page-wrapper">
        <div className="page-top-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} />
          </button>
          <span className="page-title">Incident Details</span>
          <div style={{ width: 36 }} />
        </div>
        <div className="flow-content" style={{ textAlign: 'center', paddingTop: 60 }}>
          <AlertTriangle size={48} color="#D97706" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Report not found</h2>
          <p style={{ fontSize: 13, color: '#64748B', marginBottom: 20 }}>
            Could not find an incident with tracking ID "{id}".
          </p>
          <button className="btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const categoryObj = CATEGORIES.find((c) => c.id === report.category);
  const userIsAffected = isAffected(report.id);

  const handleToggleAffected = () => {
    const active = toggleAffected(report.id);
    if (showToast) {
      showToast(active ? 'Marked as affected. Stay safe!' : 'Removed from affected list.');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Fum Tolu: ${report.problem} in ${report.location}`,
        text: `Track the status of ${report.problem} on Fum Tolu? Tracking ID: ${report.id}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(`${window.location.origin}/incident/${report.id}`);
      if (showToast) showToast('Tracking link copied to clipboard!');
    }
  };

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <div className="page-top-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: '#64748B', letterSpacing: 0.5 }}>
            INCIDENT REPORT
          </span>
          <span style={{ fontSize: 13, fontWeight: 800, color: '#0F172A', fontFamily: 'monospace' }}>
            {report.id}
          </span>
        </div>
        <StatusBadge status={report.status} />
      </div>

      <div className="flow-content">
        {/* Main Incident Hero Card */}
        <div className="incident-detail-hero">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                backgroundColor: categoryObj?.bgColor || '#FEF3C7',
                color: categoryObj?.iconColor || '#D97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <CategoryIcon category={report.category} size={24} />
            </div>
            <div>
              <h1 style={{ fontSize: 20, fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                {report.problem}
              </h1>
              <div style={{ fontSize: 13, color: '#64748B', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                <MapPin size={12} />
                <span>{report.specificLocation || report.location}</span>
              </div>
            </div>
          </div>

          {/* Affected Counter & Interactive CTA */}
          <div className="affected-cta-row">
            <div className="affected-info">
              <div className="affected-count-text">
                {report.affectedCount} {report.affectedCount === 1 ? 'person' : 'people'} affected
              </div>
              <div className="affected-subtext">in and around {report.location}</div>
            </div>
            <button
              className={`affected-btn ${userIsAffected ? 'active' : ''}`}
              onClick={handleToggleAffected}
            >
              {userIsAffected ? (
                <>
                  <Check size={14} strokeWidth={3} />
                  <span>Affected</span>
                </>
              ) : (
                <>
                  <span>+ I'm affected</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4-Step Progress Tracker */}
        <ProgressTracker currentStatus={report.status} />

        {/* Status Updates Timeline */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: 0.8, marginBottom: 8 }}>
            Updates
          </div>
          <div className="timeline-list">
            {report.updates && report.updates.length > 0 ? (
              report.updates.map((update) => (
                <div key={update.id} className="timeline-item">
                  <div className="timeline-meta">
                    <span className="timeline-dept-badge">{update.department}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={11} />
                      <span>{update.time}</span>
                    </span>
                  </div>
                  <div className="timeline-title">{update.title}</div>
                  <div className="timeline-desc">{update.description}</div>
                </div>
              ))
            ) : (
              <div className="timeline-item">
                <div className="timeline-title">Report logged</div>
                <div className="timeline-desc">Issue registered in the public service dispatch queue.</div>
              </div>
            )}
          </div>
        </div>

        {/* Location Map Preview */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: 0.8, marginBottom: 8 }}>
            Location
          </div>
          <div className="map-preview-card">
            <div className="map-pin-pulse">
              <MapPin size={22} />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 8,
                left: 10,
                right: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(4px)',
                borderRadius: 10,
                padding: '6px 10px',
                fontSize: 12,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                color: '#0F172A',
              }}
            >
              <MapPin size={13} color="#3B49DF" />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {report.specificLocation || report.location}
              </span>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: 16,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>
              Know someone affected?
            </div>
            <div style={{ fontSize: 11, color: '#64748B' }}>
              Share this report ID: <strong>{report.id}</strong>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="btn-secondary"
            style={{ width: 'auto', padding: '8px 14px', fontSize: 12 }}
          >
            <Share2 size={14} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
