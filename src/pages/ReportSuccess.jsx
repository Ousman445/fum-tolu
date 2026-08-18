import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Check, ArrowRight, MapPin, Copy, ExternalLink } from 'lucide-react';
import { useReports } from '../context/ReportContext';
import { CATEGORIES } from '../data/categories';
import CategoryIcon from '../components/CategoryIcon';
import StatusBadge from '../components/StatusBadge';

export default function ReportSuccess({ showToast }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getReportById } = useReports();

  const report = getReportById(id) || {
    id: id || 'FT-2024-0859',
    problem: 'Power outage',
    category: 'electricity',
    location: 'Bundung',
    status: 'reported',
  };

  const categoryObj = CATEGORIES.find((c) => c.id === report.category);

  const handleCopyId = () => {
    navigator.clipboard?.writeText(report.id);
    if (showToast) showToast(`Copied ${report.id} to clipboard!`);
  };

  return (
    <div className="page-wrapper flow-content" style={{ paddingTop: '56px' }}>
      {/* Success Top Box */}
      <div className="success-illustration-box">
        <div className="success-icon-circle">
          <Check size={36} strokeWidth={3} />
        </div>
        <h1 className="success-title">Report submitted!</h1>
        <p className="success-subtitle">
          Thank you. The right team has been notified and will look into it.
        </p>
      </div>

      {/* Large Report Code Card */}
      <div className="report-id-card">
        <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
          Incident Tracking ID
        </div>
        <div className="report-id-code" onClick={handleCopyId} title="Click to copy">
          {report.id}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '3px 10px',
              borderRadius: 20,
              backgroundColor: categoryObj?.bgColor || '#FEF3C7',
              color: categoryObj?.iconColor || '#D97706',
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <CategoryIcon category={report.category} size={13} />
            <span>{report.problem}</span>
          </span>

          <StatusBadge status={report.status} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, color: '#64748B', fontSize: 12, marginTop: 8 }}>
          <MapPin size={12} />
          <span>{report.location}</span>
        </div>
      </div>

      {/* What Happens Next Steps */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', color: '#64748B', letterSpacing: 0.8, marginBottom: 8, paddingLeft: 4 }}>
          What Happens Next
        </div>
        <div className="next-steps-list">
          <div className="step-row">
            <div className="step-num-circle">1</div>
            <div className="step-text">
              <strong>Your report reaches the service department</strong> (NAWEC, NRA, KMC, or BAC).
            </div>
          </div>

          <div className="step-row">
            <div className="step-num-circle">2</div>
            <div className="step-text">
              <strong>They acknowledge and send a service team</strong> to inspect the location.
            </div>
          </div>

          <div className="step-row">
            <div className="step-num-circle">3</div>
            <div className="step-text">
              <strong>The problem gets fixed</strong> and marked as resolved on Fum Tolu.
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        <button
          className="btn-primary"
          onClick={() => navigate(`/incident/${report.id}`)}
        >
          <span>Track progress — Fum Tolu?</span>
          <ArrowRight size={18} />
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate('/')}
        >
          <span>Go back to Home</span>
        </button>
      </div>
    </div>
  );
}
