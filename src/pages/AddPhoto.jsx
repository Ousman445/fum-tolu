import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Image, X, ArrowRight } from 'lucide-react';
import { useReports } from '../context/ReportContext';

export default function AddPhoto({ showToast }) {
  const navigate = useNavigate();
  const { draftReport, updateDraft } = useReports();
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updateDraft({
          photo: file.name,
          photoPreview: reader.result,
        });
        if (showToast) showToast('Photo attached successfully');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSimulatePhoto = (type) => {
    // For fast testing or camera simulation, generate a clean SVG preview or open file picker
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemovePhoto = () => {
    updateDraft({
      photo: null,
      photoPreview: null,
    });
  };

  const handleContinueWithPhoto = () => {
    navigate('/report/check');
  };

  const handleSkipPhoto = () => {
    updateDraft({
      photo: null,
      photoPreview: null,
    });
    navigate('/report/check');
  };

  return (
    <div className="page-wrapper">
      {/* Top Navbar */}
      <div className="page-top-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </button>
        <span className="page-title">Add a photo</span>
        <div style={{ width: 36 }} />
      </div>

      <div className="flow-content">
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: 12,
              fontWeight: 600,
              color: '#64748B',
              backgroundColor: '#F1F5F9',
              padding: '4px 12px',
              borderRadius: 20,
            }}
          >
            Optional — helps us respond faster
          </span>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />

        {/* Photo Box / Preview */}
        {!draftReport.photoPreview ? (
          <div className="photo-upload-box">
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: '#EEF2FF',
                color: '#3B49DF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Camera size={26} />
            </div>

            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 2 }}>
                Take or upload a photo
              </div>
              <div style={{ fontSize: 12, color: '#64748B' }}>
                Show the problem clearly
              </div>
            </div>

            <div className="photo-actions-row">
              <button
                type="button"
                className="photo-source-btn"
                onClick={() => handleSimulatePhoto('camera')}
              >
                <Camera size={18} color="#3B49DF" />
                <span>Camera</span>
              </button>
              <button
                type="button"
                className="photo-source-btn"
                onClick={() => handleSimulatePhoto('gallery')}
              >
                <Image size={18} color="#3B49DF" />
                <span>Gallery</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="photo-preview-box">
            <img src={draftReport.photoPreview} alt="Problem Preview" />
            <button className="photo-remove-btn" onClick={handleRemovePhoto}>
              <X size={18} />
            </button>
          </div>
        )}

        {/* Navigation Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
          {draftReport.photoPreview ? (
            <button className="btn-primary" onClick={handleContinueWithPhoto}>
              <span>Continue with photo</span>
              <ArrowRight size={18} />
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={() => handleSimulatePhoto('upload')}
            >
              <Camera size={18} />
              <span>Continue with photo +</span>
            </button>
          )}

          <button className="btn-secondary" onClick={handleSkipPhoto}>
            <span>Skip — no photo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
