import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "./components/SplashScreen";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SkipLink } from "./components/SkipLink";
import { HeroSection } from "./sections/HeroSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { EducationSection } from "./sections/EducationSection";
import { OrganizationSection } from "./sections/OrganizationSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ContactSection } from "./sections/ContactSection";
import { uiCopy } from "./data/i18n";
import { portfolioContent } from "./data/portfolio";
import { useThemePreference } from "./hooks/useThemePreference";
import { useLanguagePreference } from "./hooks/useLanguagePreference";
import { useSplashScreen } from "./hooks/useSplashScreen";

export default function App() {
  const isLoading = useSplashScreen();
  const { theme, toggleTheme } = useThemePreference();
  const { language, changeLanguage } = useLanguagePreference();

  const content = portfolioContent[language];
  const copy = uiCopy[language];
  const { profile } = content;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text-title)] transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading ? <SplashScreen /> : null}
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
