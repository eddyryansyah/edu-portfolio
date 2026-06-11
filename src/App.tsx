import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "./components/SplashScreen";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SkipLink } from "./components/SkipLink";
import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  OrganizationSection,
  SkillsSection,
} from "./sections";
import { uiCopy } from "./data/i18n";
import { portfolioContent } from "./data/portfolio";
import {
  useDocumentMetadata,
  useLanguagePreference,
  useSplashScreen,
  useThemePreference,
} from "./hooks";

export default function App() {
  const isLoading = useSplashScreen();
  const { theme, toggleTheme } = useThemePreference();
  const { language, changeLanguage } = useLanguagePreference();

  const content = portfolioContent[language];
  const copy = uiCopy[language];
  const { profile } = content;

  useEffect(() => {
    const root = document.documentElement;

    const updateMobileDesktopMode = () => {
      const isTouchDevice =
        typeof window.matchMedia === "function"
          ? window.matchMedia("(hover: none) and (pointer: coarse)").matches
          : false;

      const screenWidth = window.screen?.width ?? window.innerWidth;
      const screenHeight = window.screen?.height ?? window.innerHeight;

      const isPhysicalPhone = Math.min(screenWidth, screenHeight) <= 600;
      const isDesktopViewport = window.innerWidth >= 768;

      root.classList.toggle(
        "is-mobile-desktop-mode",
        isTouchDevice && isPhysicalPhone && isDesktopViewport,
      );
    };

    updateMobileDesktopMode();

    window.addEventListener("resize", updateMobileDesktopMode);
    window.addEventListener("orientationchange", updateMobileDesktopMode);

    return () => {
      window.removeEventListener("resize", updateMobileDesktopMode);
      window.removeEventListener("orientationchange", updateMobileDesktopMode);
      root.classList.remove("is-mobile-desktop-mode");
    };
  }, []);

  useDocumentMetadata(copy.metadata);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text-title)] transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading ? <SplashScreen copy={copy.splash} /> : null}
      </AnimatePresence>

      <SkipLink href="#home">{copy.accessibility.skipToMain}</SkipLink>

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
