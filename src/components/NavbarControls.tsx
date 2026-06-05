import type { Language, UiCopy } from "../data/i18n";
import type { Theme } from "../types/theme";
import { LanguageDropdown } from "./LanguageDropdown";
import { ThemeToggle } from "./ThemeToggle";

type NavbarControlsProps = {
  theme: Theme;
  language: Language;
  themeCopy: UiCopy["theme"];
  onToggleTheme: () => void;
  onChangeLanguage: (language: Language) => void;
};

export function NavbarControls({
  theme,
  language,
  themeCopy,
  onToggleTheme,
  onChangeLanguage,
}: NavbarControlsProps) {
  return (
    <div className="hidden flex-none items-center gap-3 xl:flex">
      <ThemeToggle theme={theme} onToggle={onToggleTheme} labels={themeCopy} />

      <LanguageDropdown
        language={language}
        onChangeLanguage={onChangeLanguage}
      />
    </div>
  );
}
