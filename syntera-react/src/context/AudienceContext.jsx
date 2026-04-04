import { createContext, useContext, useState, useCallback } from 'react';

const AudienceContext = createContext(null);

export function AudienceProvider({ children }) {
  const [audience, setAudienceState] = useState('dental');

  const setAudience = useCallback((id) => {
    setAudienceState(id);
  }, []);

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceContext);
  if (!ctx) throw new Error('useAudience must be used within AudienceProvider');
  return ctx;
}
