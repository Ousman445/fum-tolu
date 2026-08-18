import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Navigation, MapPin, Search, Check, Loader2, ArrowRight } from 'lucide-react';
import { GAMBIAN_NEIGHBOURHOODS, CATEGORIES } from '../data/categories';
import { useReports } from '../context/ReportContext';

export default function SelectLocation({ showToast }) {
  const navigate = useNavigate();
  const { draftReport, updateDraft } = useReports();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState(draftReport.location || '');
  const [isLocating, setIsLocating] = useState(false);

  const categoryObj = CATEGORIES.find((c) => c.id === draftReport.category);

  const filteredNeighbourhoods = GAMBIAN_NEIGHBOURHOODS.filter((area) =>
    area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUseMyLocation = () => {
    setIsLocating(true);
    if (showToast) showToast('Locating your GPS coordinates...');

    setTimeout(() => {
      setIsLocating(false);
      const detectedArea = 'Bundung';
      setSelectedArea(detectedArea);
      updateDraft({
        location: detectedArea,
        specificLocation: `${detectedArea}, Near Bundung Maternal Hospital`
      });

      if (showToast) showToast('Location found: Bundung');

      setTimeout(() => {
        navigate('/report/photo');
      }, 500);
    }, 900);
  };

  const handleSelectArea = (area) => {
    setSelectedArea(area);
  };

  const handleContinueWithArea = () => {
    if (!selectedArea) return;
    updateDraft({
      location: selectedArea,
      specificLocation: `${selectedArea}, The Gambia`
    });
    navigate('/report/photo');
  };

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <div className="page-top-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </button>
        <span className="page-title">Where is the problem?</span>
        <div style={{ width: 36 }} />
      </div>

      <div className="flow-content">
        {/* Context Summary Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            backgroundColor: '#F1F5F9',
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 600,
            color: '#475569',
          }}
        >
          <span>
            {categoryObj?.title || 'Report'}: <strong>{draftReport.problem || 'General issue'}</strong>
          </span>
          <span className="step-indicator-pill">Step 2 of 3</span>
        </div>

        {/* Option 1: Use My Location GPS Button */}
        <button
          className="location-hero-btn"
          onClick={handleUseMyLocation}
          disabled={isLocating}
        >
          <div className="location-icon-wrapper">
            {isLocating ? (
              <Loader2 size={22} className="animate-spin" />
            ) : (
              <Navigation size={22} />
            )}
          </div>
          <div>
            <div className="location-hero-title">
              {isLocating ? 'Locating you...' : 'Use my location'}
            </div>
            <div className="location-hero-subtitle">
              Automatically detect where you are
            </div>
          </div>
        </button>

        {/* Divider / Option 2: Choose from list */}
        <div style={{ margin: '4px 0 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <MapPin size={18} color="#3B49DF" />
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0F172A' }}>
              Choose your area
            </div>
          </div>

          <div className="neighbourhoods-search-bar">
            <Search size={16} color="#94A3B8" />
            <input
              type="text"
              placeholder="Search neighbourhood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="neighbourhood-list">
            {filteredNeighbourhoods.length > 0 ? (
              filteredNeighbourhoods.map((area) => {
                const isSelected = selectedArea === area;
                return (
                  <button
                    key={area}
                    className={`neighbourhood-option ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectArea(area)}
                  >
                    <span>{area}</span>
                    {isSelected && <Check size={18} color="#3B49DF" strokeWidth={2.5} />}
                  </button>
                );
              })
            ) : (
              <div style={{ padding: 16, textAlign: 'center', fontSize: 12, color: '#94A3B8' }}>
                No area matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>

        {/* Sticky Continue with selected area button */}
        {selectedArea && (
          <button className="btn-primary" onClick={handleContinueWithArea}>
            <span>Use {selectedArea}</span>
            <ArrowRight size={18} />
          </button>
        )}

        <div style={{ textAlign: 'center', fontSize: 11, color: '#94A3B8', marginTop: 4 }}>
          GPS is optional. You can always pick your area manually.
        </div>
      </div>
    </div>
  );
}
