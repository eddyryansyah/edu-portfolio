import { useEffect, useState } from "react";
import { STORAGE_KEYS } from "../constants/preferences";
import type { Language } from "../data/i18n";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "id";
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEYS.language);

  return savedLanguage === "en" ? "en" : "id";
};

export function useLanguagePreference() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEYS.language, language);
  }, [language]);

  const changeLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  return {
    language,
    changeLanguage,
  };
}
