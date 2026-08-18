import React from 'react';
import { Check } from 'lucide-react';

export default function ProgressTracker({ currentStatus = 'reported' }) {
  const steps = [
    { key: 'reported', label: 'Reported' },
    { key: 'acknowledged', label: 'Acknowledged' },
    { key: 'investigating', label: 'Investigating' },
    { key: 'resolved', label: 'Resolved' },
  ];

  const statusIndex = {
    reported: 0,
    acknowledged: 1,
    investigating: 2,
    resolved: 3,
  };

  const currentIndex = statusIndex[currentStatus?.toLowerCase()] ?? 0;

  return (
    <div className="progress-container">
      <div className="progress-title">Progress — Fum Tolu?</div>
      <div className="progress-track">
        <div className="progress-track-line-bg" />
        {steps.map((step, idx) => {
          const isCompleted = idx < currentIndex;
          const isActive = idx === currentIndex;

          let dotClass = 'progress-step-dot';
          if (isCompleted) dotClass += ' completed';
          else if (isActive) dotClass += ' active';

          return (
            <div key={step.key} className="progress-step-item">
              <div className={dotClass}>
                {isCompleted ? (
                  <Check size={14} strokeWidth={3} />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              <span className={`progress-step-label ${isActive ? 'active' : ''}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
