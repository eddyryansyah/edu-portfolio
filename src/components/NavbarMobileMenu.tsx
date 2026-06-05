import { AnimatePresence, motion } from "framer-motion";
import type { Language, SectionId, UiCopy } from "../data/i18n";
import { languageOptions } from "../data/i18n";
import type { Theme } from "../types/theme";
import { LanguageDropdown } from "./LanguageDropdown";
import { NavbarLinks } from "./NavbarLinks";
import { ThemeToggle } from "./ThemeToggle";

type NavbarItem = {
  href: SectionId;
  label: string;
};

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

const smoothEase = [0.22, 1, 0.36, 1] as const;

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
  );
}
