import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "./components/SplashScreen";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { EducationSection } from "./sections/EducationSection";
import { OrganizationSection } from "./sections/OrganizationSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ContactSection } from "./sections/ContactSection";
import type { Language } from "./data/i18n";
import type { Theme } from "./types/theme";
import { uiCopy } from "./data/i18n";
import { portfolioContent } from "./data/portfolio";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("theme");

    return savedTheme === "light" ? "light" : "dark";
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "id";
    }

    const savedLanguage = window.localStorage.getItem("language");

    return savedLanguage === "en" ? "en" : "id";
  });

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const changeLanguage = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  const content = portfolioContent[language];
  const copy = uiCopy[language];
  const { profile } = content;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text-title)] transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading ? <SplashScreen /> : null}
      </AnimatePresence>

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-1/2 focus:top-24 focus:z-[9999] focus:-translate-x-1/2 focus:rounded-2xl focus:border focus:border-[var(--nav-active-bg)] focus:bg-[var(--nav-active-bg)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-[var(--nav-active-text)] focus:shadow-xl focus:shadow-slate-950/20"
      >
        {copy.accessibility.skipToMain}
      </a>

      <Navbar
        theme={theme}
        language={language}
        onToggleTheme={toggleTheme}
        onChangeLanguage={changeLanguage}
      />

      <HeroSection profile={profile} copy={copy.hero} />

      <ExperienceSection
        experiences={content.experiences}
        copy={copy.sections.experience}
      />

      <EducationSection
        copy={copy.sections.education}
        educationHighlights={content.educationHighlights}
        highSchoolHighlights={content.highSchoolHighlights}
      />

      <OrganizationSection
        copy={copy.sections.organization}
        organizationPoints={content.organizationPoints}
      />

      <SkillsSection
        copy={copy.sections.skills}
        skills={content.skills}
        softSkills={content.softSkills}
        certifications={content.certifications}
        languages={content.languages}
      />

      <ContactSection profile={profile} copy={copy.sections.contact} />

      <Footer language={language} />
    </main>
  );
}
