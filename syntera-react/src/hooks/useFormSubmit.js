import { useState, useCallback } from 'react';

export function useFormSubmit() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const submit = useCallback(async (phone) => {
    if (!phone || !phone.trim()) return;

    setStatus('submitting');

    // Simulate API call — replace with real endpoint later
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  const reset = useCallback(() => setStatus('idle'), []);

  return { status, submit, reset };
}
