import { motion } from "framer-motion";
import { useState } from "react";

import type { Language, SectionId } from "../data/i18n";
import { sectionIds, uiCopy } from "../data/i18n";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Theme } from "../types/theme";

import { NavbarBrand } from "./NavbarBrand";
import { NavbarControls } from "./NavbarControls";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarMenuButton } from "./NavbarMenuButton";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

type NavbarProps = {
  theme: Theme;
  language: Language;
  onToggleTheme: () => void;
  onChangeLanguage: (language: Language) => void;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Navbar({
  theme,
  language,
  onToggleTheme,
  onChangeLanguage,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, navigateToSection } = useActiveSection(sectionIds);

  const copy = uiCopy[language];

  const navItems = sectionIds.map((sectionId) => ({
    href: sectionId,
    label: copy.nav[sectionId],
  }));

  const handleNavigate = (targetId: SectionId) => {
    const navigate = () => navigateToSection(targetId);

    if (isOpen) {
      setIsOpen(false);
      window.setTimeout(navigate, 180);
      return;
    }

    navigate();
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2">
      <motion.nav
        layout
        transition={{ duration: 0.32, ease: smoothEase }}
        className="overflow-visible rounded-[1.75rem] border border-[var(--nav-border)] bg-[var(--nav-bg)] px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur-xl xl:px-5"
      >
        <div className="relative flex items-center justify-between">
          <NavbarBrand
            subtitle={copy.navbar.profileLabel}
            ariaLabel={copy.navbar.brandAriaLabel}
            onClick={() => handleNavigate("home")}
          />

          <div className="absolute left-[52.5%] hidden -translate-x-1/2 items-center justify-center gap-1 xl:flex 2xl:left-[52%]">
            <NavbarLinks
              items={navItems}
              activeSection={activeSection}
              onNavigate={handleNavigate}
              variant="desktop"
            />
          </div>

          <NavbarControls
            theme={theme}
            language={language}
            themeCopy={copy.theme}
            onToggleTheme={onToggleTheme}
            onChangeLanguage={onChangeLanguage}
          />

          <NavbarMenuButton
            isOpen={isOpen}
            ariaLabel={copy.navbar.menuButtonLabel}
            onClick={() => setIsOpen((current) => !current)}
          />
        </div>

        <NavbarMobileMenu
          isOpen={isOpen}
          items={navItems}
          activeSection={activeSection}
          theme={theme}
          language={language}
          copy={copy}
          onNavigate={handleNavigate}
          onToggleTheme={onToggleTheme}
          onChangeLanguage={onChangeLanguage}
        />
      </motion.nav>
    </header>
  );
}
