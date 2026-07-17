'use client';

import { useEffect, useState } from 'react';

/**
 * Language choice persisted across reloads and shared across pages.
 *
 * Stores the value in localStorage under `lang` and keeps the
 * <html lang="..."> attribute in sync. Mirrors the pattern used for the
 * theme toggle in app/layout.tsx.
 */
const STORAGE_KEY = 'lang';

export function usePersistentLang(defaultLang: 'bn' | 'en' = 'bn') {
  const [lang, setLangState] = useState<'bn' | 'en'>(defaultLang);
  const [hydrated, setHydrated] = useState(false);

  // Read the saved language once on mount.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'bn' || saved === 'en') {
        setLangState(saved);
      }
    } catch {
      // localStorage may be unavailable (private mode); fall back to default.
    }
    setHydrated(true);
  }, []);

  // Keep <html lang> in sync whenever the language changes.
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = lang;
  }, [lang, hydrated]);

  const setLang = (next: 'bn' | 'en') => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures (e.g. storage full / private mode).
    }
  };

  return [lang, setLang, hydrated] as const;
}
