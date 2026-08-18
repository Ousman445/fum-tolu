import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function MobileFrame({ children, toastMessage }) {
  const location = useLocation();
  const scrollRef = useRef(null);

  const showBottomNav = ['/', '/nearby', '/my-reports'].includes(location.pathname);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [location.pathname]);

  return (
    <div className="desktop-viewport">
      <div className="mobile-frame">

        {toastMessage && (
          <div className="toast-container">
            <span>{toastMessage}</span>
          </div>
        )}

        <div
          ref={scrollRef}
          className={`screen-scroll-container ${
            showBottomNav ? 'has-bottom-nav' : 'no-bottom-nav'
          }`}
        >
          {children}
        </div>

        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
}
