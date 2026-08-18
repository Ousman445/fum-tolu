import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Compass, ClipboardList } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const isNearby = location.pathname === '/nearby';
  const isMyReports = location.pathname === '/my-reports';

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${isHome ? 'active' : ''}`}
        onClick={() => navigate('/')}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        className={`nav-item ${isNearby ? 'active' : ''}`}
        onClick={() => navigate('/nearby')}
      >
        <Compass size={20} />
        <span>Nearby</span>
      </button>

      <button
        className={`nav-item ${isMyReports ? 'active' : ''}`}
        onClick={() => navigate('/my-reports')}
      >
        <ClipboardList size={20} />
        <span>My Reports</span>
      </button>
    </nav>
  );
}
