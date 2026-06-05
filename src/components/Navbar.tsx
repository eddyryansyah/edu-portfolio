import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Language, SectionId } from "../data/i18n";
import { languageOptions, sectionIds, uiCopy } from "../data/i18n";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Theme } from "../types/theme";
import { LanguageDropdown } from "./LanguageDropdown";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarControls } from "./NavbarControls";
import { NavbarLinks } from "./NavbarLinks";
import { ThemeToggle } from "./ThemeToggle";

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

          <button
            type="button"
            className="inline-flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-title)] shadow-sm transition hover:bg-[var(--surface-soft)] xl:hidden"
            aria-label={copy.navbar.menuButtonLabel}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.svg
                  key="close"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                >
                  <path
                    d="M7 7L17 17M17 7L7 17"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                >
                  <path
                    d="M5 7H19M5 12H19M5 17H19"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id="mobile-navigation"
              key="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: smoothEase }}
              className="overflow-hidden xl:hidden"
            >
              <motion.div
                initial={{ y: -4, filter: "blur(4px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                exit={{ y: -4, filter: "blur(4px)" }}
                transition={{ duration: 0.26, ease: smoothEase }}
                className="mt-3 grid gap-1 border-t border-[var(--border)] pt-3"
              >
                <NavbarLinks
                  items={navItems}
                  activeSection={activeSection}
                  onNavigate={handleNavigate}
                  variant="mobile"
                />

                <div className="mt-2 flex items-center justify-between rounded-2xl bg-[var(--surface-soft)] px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {copy.theme.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--text-title)]">
                      {theme === "dark"
                        ? copy.theme.currentDark
                        : copy.theme.currentLight}
                    </p>
                  </div>

                  <ThemeToggle
                    theme={theme}
                    onToggle={onToggleTheme}
                    labels={copy.theme}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between rounded-2xl bg-[var(--surface-soft)] px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {copy.language.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--text-title)]">
                      {languageOptions[language].label}
                    </p>
                  </div>

                  <LanguageDropdown
                    language={language}
                    onChangeLanguage={onChangeLanguage}
                    placement="top"
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
