import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReportProvider } from './context/ReportContext';
import MobileFrame from './components/MobileFrame';

import Home from './pages/Home';
import SelectProblem from './pages/SelectProblem';
import SelectLocation from './pages/SelectLocation';
import AddPhoto from './pages/AddPhoto';
import CheckReport from './pages/CheckReport';
import ReportSuccess from './pages/ReportSuccess';
import ProblemDetail from './pages/ProblemDetail';
import NearbyProblems from './pages/NearbyProblems';
import MyReports from './pages/MyReports';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg, duration = 3000) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, duration);
  };

  return (
    <ReportProvider>
      <BrowserRouter>
        <MobileFrame toastMessage={toastMessage}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report/problem" element={<SelectProblem />} />
            <Route path="/report/location" element={<SelectLocation showToast={showToast} />} />
            <Route path="/report/photo" element={<AddPhoto showToast={showToast} />} />
            <Route path="/report/check" element={<CheckReport showToast={showToast} />} />
            <Route path="/report/success/:id" element={<ReportSuccess showToast={showToast} />} />
            <Route path="/incident/:id" element={<ProblemDetail showToast={showToast} />} />
            <Route path="/nearby" element={<NearbyProblems />} />
            <Route path="/my-reports" element={<MyReports showToast={showToast} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MobileFrame>
      </BrowserRouter>
    </ReportProvider>
  );
}
