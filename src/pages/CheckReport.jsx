import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Camera, Info, ArrowRight, Loader2 } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useReports } from '../context/ReportContext';
import CategoryIcon from '../components/CategoryIcon';

export default function CheckReport({ showToast }) {
  const navigate = useNavigate();
  const { draftReport, submitDraftReport } = useReports();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryObj = CATEGORIES.find((c) => c.id === draftReport.category);

  const handleSubmit = () => {
    setIsSubmitting(true);
    if (showToast) showToast('Sending report to service department...');

    setTimeout(() => {
      setIsSubmitting(false);
      const newReport = submitDraftReport();
      navigate(`/report/success/${newReport.id}`);
    }, 800);
  };

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <div className="page-top-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </button>
        <span className="page-title">Check your report</span>
        <div style={{ width: 36 }} />
      </div>

      <div className="flow-content">
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <span style={{ fontSize: 13, color: '#64748B', fontWeight: 600 }}>
            Everything look right?
          </span>
        </div>

        {/* Summary Card */}
        <div className="summary-card">
          {/* Problem */}
          <div>
            <div className="summary-label" style={{ marginBottom: 6 }}>Problem</div>
            <div className="summary-value">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: categoryObj?.bgColor || '#FEF3C7',
                  color: categoryObj?.iconColor || '#D97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CategoryIcon category={draftReport.category} size={18} />
              </div>
              <div>
                <div style={{ fontSize: 15, color: '#0F172A' }}>
                  {draftReport.problem || 'Power outage'}
                </div>
                <div style={{ fontSize: 11, color: '#64748B', fontWeight: 500 }}>
                  {categoryObj?.title || 'Electricity'}
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 1, backgroundColor: '#F1F5F9' }} />

          {/* Location */}
          <div>
            <div className="summary-label" style={{ marginBottom: 6 }}>Location</div>
            <div className="summary-value">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  backgroundColor: '#EEF2FF',
                  color: '#3B49DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={18} />
              </div>
              <span style={{ fontSize: 14, color: '#0F172A' }}>
                {draftReport.location || 'Bundung'}
              </span>
            </div>
          </div>

          <div style={{ height: 1, backgroundColor: '#F1F5F9' }} />

          {/* Photo */}
          <div>
            <div className="summary-label" style={{ marginBottom: 6 }}>Photo</div>
            {draftReport.photoPreview ? (
              <div style={{ width: 70, height: 70, borderRadius: 10, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                <img src={draftReport.photoPreview} alt="Uploaded problem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94A3B8', fontSize: 13, fontWeight: 500 }}>
                <Camera size={16} />
                <span>No photo added</span>
              </div>
            )}
          </div>
        </div>

        {/* Assurance Banner */}
        <div className="info-banner">
          <Info size={18} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>
            Your report will be sent to the right service department. You will get a report ID to track.
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Submitting report...</span>
              </>
            ) : (
              <>
                <span>Submit Report</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <button
            type="button"
            className="btn-text"
            onClick={() => navigate(-1)}
          >
            <span>← Go back and edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
