import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_REPORTS } from '../data/mockReports';

const ReportContext = createContext();

const STORAGE_KEY = 'fumtolu_reports_v2';
const MY_REPORTS_KEY = 'fumtolu_my_reports_v2';
const AFFECTED_KEY = 'fumtolu_affected_reports_v2';

const initialDraft = {
  category: 'electricity',
  problem: '',
  customProblem: '',
  location: '',
  specificLocation: '',
  photo: null,
  photoPreview: null,
};

export function ReportProvider({ children }) {
  const [reports, setReports] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_REPORTS;
    } catch {
      return INITIAL_REPORTS;
    }
  });

  const [myReportIds, setMyReportIds] = useState(() => {
    try {
      const saved = localStorage.getItem(MY_REPORTS_KEY);
      return saved ? JSON.parse(saved) : ['FT-2024-0859', 'FT-2024-0847', 'FT-2024-0790'];
    } catch {
      return ['FT-2024-0859', 'FT-2024-0847', 'FT-2024-0790'];
    }
  });

  const [affectedReportIds, setAffectedReportIds] = useState(() => {
    try {
      const saved = localStorage.getItem(AFFECTED_KEY);
      return saved ? JSON.parse(saved) : ['FT-2024-0859'];
    } catch {
      return ['FT-2024-0859'];
    }
  });

  const [draftReport, setDraftReport] = useState(initialDraft);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    } catch (e) {
      console.error('Failed to save reports to localStorage', e);
    }
  }, [reports]);

  useEffect(() => {
    try {
      localStorage.setItem(MY_REPORTS_KEY, JSON.stringify(myReportIds));
    } catch (e) {
      console.error('Failed to save my reports to localStorage', e);
    }
  }, [myReportIds]);

  useEffect(() => {
    try {
      localStorage.setItem(AFFECTED_KEY, JSON.stringify(affectedReportIds));
    } catch (e) {
      console.error('Failed to save affected reports to localStorage', e);
    }
  }, [affectedReportIds]);

  const updateDraft = (fields) => {
    setDraftReport((prev) => ({ ...prev, ...fields }));
  };

  const resetDraft = () => {
    setDraftReport(initialDraft);
  };

  const submitDraftReport = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `FT-2024-${randomNum}`;
    const problemName = draftReport.customProblem ? draftReport.customProblem : (draftReport.problem || 'General Incident');

    const newReport = {
      id: newId,
      category: draftReport.category || 'electricity',
      problem: problemName,
      location: draftReport.location || 'Bundung',
      specificLocation: draftReport.specificLocation || `${draftReport.location || 'Bundung'}, The Gambia`,
      status: 'reported',
      createdAt: 'Just now',
      timestamp: new Date().toISOString(),
      distance: '0.1 km away',
      affectedCount: 1,
      photo: draftReport.photoPreview || null,
      updates: [
        {
          id: `u-${Date.now()}`,
          title: 'Report submitted',
          department: 'Community Alert',
          time: 'Just now',
          description: `Report submitted for ${problemName} in ${draftReport.location || 'Bundung'}. Forwarded to responsive service unit.`
        }
      ]
    };

    setReports((prev) => [newReport, ...prev]);
    setMyReportIds((prev) => [newId, ...prev]);
    setAffectedReportIds((prev) => [...prev, newId]);
    resetDraft();

    return newReport;
  };

  const toggleAffected = (reportId) => {
    const isCurrentlyAffected = affectedReportIds.includes(reportId);

    if (isCurrentlyAffected) {
      setAffectedReportIds((prev) => prev.filter((id) => id !== reportId));
      setReports((prev) =>
        prev.map((r) =>
          r.id === reportId ? { ...r, affectedCount: Math.max(1, r.affectedCount - 1) } : r
        )
      );
      return false;
    } else {
      setAffectedReportIds((prev) => [...prev, reportId]);
      setReports((prev) =>
        prev.map((r) =>
          r.id === reportId ? { ...r, affectedCount: r.affectedCount + 1 } : r
        )
      );
      return true;
    }
  };

  const isAffected = (reportId) => affectedReportIds.includes(reportId);

  const getReportById = (reportId) => {
    return reports.find((r) => r.id.toLowerCase() === reportId?.toLowerCase()) || null;
  };

  const myReportsList = reports.filter((r) => myReportIds.includes(r.id));

  return (
    <ReportContext.Provider
      value={{
        reports,
        myReportIds,
        myReportsList,
        affectedReportIds,
        isAffected,
        draftReport,
        updateDraft,
        resetDraft,
        submitDraftReport,
        toggleAffected,
        getReportById,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}

export function useReports() {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error('useReports must be used within a ReportProvider');
  }
  return context;
}
