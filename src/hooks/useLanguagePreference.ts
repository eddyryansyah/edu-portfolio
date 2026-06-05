import { useEffect, useState } from "react";
import type { Language } from "../data/i18n";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "id";
  }

  const savedLanguage = window.localStorage.getItem("language");

  return savedLanguage === "en" ? "en" : "id";
};

export function useLanguagePreference() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  return {
    language,
    changeLanguage,
  };
}
