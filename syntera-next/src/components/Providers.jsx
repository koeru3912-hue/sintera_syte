'use client';
import { AudienceProvider } from '@/context/AudienceContext';
import '@/i18n';

export default function Providers({ children }) {
  return (
    <AudienceProvider>
      {children}
    </AudienceProvider>
  );
}
