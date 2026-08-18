import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Wifi, Battery } from 'lucide-react';
import BottomNav from './BottomNav';

export default function MobileFrame({ children, toastMessage }) {
  const location = useLocation();
  const scrollRef = useRef(null);

  // Pages with purple hero header get white status bar icons; others get dark icons
  const isDarkHero = location.pathname === '/';
  
  // Show bottom nav on primary pages
  const showBottomNav = ['/', '/nearby', '/my-reports'].includes(location.pathname);

  // Reset scroll to top on route change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <div className="desktop-viewport">
      <div className="mobile-frame">
        {/* iOS / iPhone 15 Status Bar */}
        <div className={`status-bar ${isDarkHero ? 'dark' : 'light'}`}>
          <span className="status-time">9:41</span>
          <div className="dynamic-island" />
          <div className="status-icons">
            <svg width="15" height="11" viewBox="0 0 17 11" fill="currentColor">
              <rect x="0" y="7" width="2.5" height="4" rx="0.5" />
              <rect x="4.5" y="5" width="2.5" height="6" rx="0.5" />
              <rect x="9" y="2.5" width="2.5" height="8.5" rx="0.5" />
              <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" />
            </svg>
            <Wifi size={14} strokeWidth={2.5} />
            <Battery size={16} strokeWidth={2.5} />
          </div>
        </div>

        {/* Global Toast Alert */}
        {toastMessage && (
          <div className="toast-container">
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Main Content Area */}
        <div
          ref={scrollRef}
          className={`screen-scroll-container ${showBottomNav ? 'has-bottom-nav' : 'no-bottom-nav'}`}
        >
          {children}
        </div>

        {/* Bottom Navigation */}
        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
}
