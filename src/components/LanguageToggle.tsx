"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
    >
      <Languages className="w-4 h-4" />
      <span className="hidden sm:inline">{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}