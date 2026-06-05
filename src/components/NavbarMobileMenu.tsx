import { AnimatePresence, motion } from "framer-motion";

import { smoothEase } from "../constants/animation";
import type { Language, SectionId, UiCopy } from "../data/i18n";
import { languageOptions } from "../data/i18n";
import type { NavbarItem } from "../types/navigation";
import type { Theme } from "../types/theme";

import { LanguageDropdown } from "./LanguageDropdown";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarMobileControlRow } from "./NavbarMobileControlRow";
import { ThemeToggle } from "./ThemeToggle";

type NavbarMobileMenuProps = {
  isOpen: boolean;
  items: NavbarItem[];
  activeSection: SectionId;
  theme: Theme;
  language: Language;
  copy: UiCopy;
  onNavigate: (targetId: SectionId) => void;
  onToggleTheme: () => void;
  onChangeLanguage: (language: Language) => void;
};

export function NavbarMobileMenu({
  isOpen,
  items,
  activeSection,
  theme,
  language,
  copy,
  onNavigate,
  onToggleTheme,
  onChangeLanguage,
}: NavbarMobileMenuProps) {
  const currentThemeLabel =
    theme === "dark" ? copy.theme.currentDark : copy.theme.currentLight;

  return (
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
              items={items}
              activeSection={activeSection}
              onNavigate={onNavigate}
              variant="mobile"
            />

            <NavbarMobileControlRow
              label={copy.theme.label}
              value={currentThemeLabel}
            >
              <ThemeToggle
                theme={theme}
                onToggle={onToggleTheme}
                labels={copy.theme}
              />
            </NavbarMobileControlRow>

            <NavbarMobileControlRow
              label={copy.language.label}
              value={languageOptions[language].label}
            >
              <LanguageDropdown
                language={language}
                onChangeLanguage={onChangeLanguage}
                placement="top"
              />
            </NavbarMobileControlRow>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
