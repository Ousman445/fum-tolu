import React from 'react';

export default function StatusBadge({ status }) {
  const normalized = (status || 'reported').toLowerCase();
  
  const labels = {
    reported: 'Reported',
    acknowledged: 'Acknowledged',
    investigating: 'Investigating',
    resolved: 'Resolved',
  };

  return (
    <span className={`status-badge ${normalized}`}>
      {labels[normalized] || normalized}
    </span>
  );
}
