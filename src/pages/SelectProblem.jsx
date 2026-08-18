import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Plus, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { useReports } from '../context/ReportContext';
import CategoryIcon from '../components/CategoryIcon';

export default function SelectProblem() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { draftReport, updateDraft } = useReports();

  const categoryId = searchParams.get('category') || draftReport.category || 'electricity';
  const currentCategory = CATEGORIES.find((c) => c.id === categoryId) || CATEGORIES[0];

  const [showCustom, setShowCustom] = useState(false);
  const [customText, setCustomText] = useState('');

  const handleSelectProblem = (problemLabel) => {
    updateDraft({
      category: categoryId,
      problem: problemLabel,
      customProblem: ''
    });
    navigate('/report/location');
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customText.trim()) return;

    updateDraft({
      category: categoryId,
      problem: customText.trim(),
      customProblem: customText.trim()
    });
    navigate('/report/location');
  };

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <div className="page-top-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
        </button>
        <span className="page-title">What's the problem?</span>
        <div style={{ width: 36 }} />
      </div>

      <div className="flow-content">
        {/* Category Header Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            backgroundColor: currentCategory.bgColor,
            borderRadius: 14,
            border: `1px solid ${currentCategory.bgColor}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CategoryIcon category={currentCategory.id} color={currentCategory.iconColor} size={18} />
            <span style={{ fontWeight: 700, fontSize: 14, color: currentCategory.iconColor }}>
              {currentCategory.title}
            </span>
          </div>
          <span className="step-indicator-pill">Step 1 of 3</span>
        </div>

        {/* Problem Selection List */}
        <div className="problem-list">
          {currentCategory.problems.map((prob) => (
            <button
              key={prob.id}
              className={`problem-item-btn ${draftReport.problem === prob.label ? 'selected' : ''}`}
              onClick={() => handleSelectProblem(prob.label)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CategoryIcon category={currentCategory.id} color={currentCategory.iconColor} size={16} />
                <span>{prob.label}</span>
              </div>
              <ChevronRight size={18} color="#94A3B8" />
            </button>
          ))}
        </div>

        {/* Custom Problem Input Section */}
        {!showCustom ? (
          <button
            className="btn-secondary"
            onClick={() => setShowCustom(true)}
            style={{ marginTop: 6 }}
          >
            <Plus size={16} />
            <span>Don't see your problem? Describe it yourself</span>
          </button>
        ) : (
          <form onSubmit={handleCustomSubmit} className="custom-problem-box">
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>
              Describe the problem:
            </div>
            <textarea
              className="custom-input"
              rows={3}
              placeholder="e.g. Broken water pipe leaking near the central junction..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              autoFocus
            />
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                className="btn-secondary"
                style={{ flex: 1 }}
                onClick={() => setShowCustom(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                style={{ flex: 1 }}
                disabled={!customText.trim()}
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
