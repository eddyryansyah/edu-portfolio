import { useEffect, useRef, useState } from "react";
import type { Language } from "../data/i18n";
import { languageOptions, supportedLanguages, uiCopy } from "../data/i18n";
import { Icon } from "./Icon";

type LanguageDropdownProps = {
  language: Language;
  onChangeLanguage: (language: Language) => void;
  placement?: "bottom" | "top";
};

export function LanguageDropdown({
  language,
  onChangeLanguage,
  placement = "bottom",
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const copy = uiCopy[language].language;
  const menuPositionClass =
    placement === "top" ? "bottom-full mb-2" : "top-full mt-2";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (selectedLanguage: Language) => {
    onChangeLanguage(selectedLanguage);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative flex-none">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={copy.buttonLabel}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="group inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-title)] shadow-sm ring-1 ring-[var(--border)] transition hover:bg-[var(--nav-hover-bg)]"
      >
        <Icon name="language" className="h-5 w-5" size={20} />

        <span
          className="pointer-events-none absolute left-1/2 top-full z-[9999] mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-xl bg-slate-700/75 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl shadow-slate-950/20 backdrop-blur transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 xl:block"
          aria-hidden="true"
        >
          {copy.label}
        </span>
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={`absolute right-0 z-[9999] w-48 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-1.5 py-2 text-[var(--text-title)] shadow-2xl shadow-slate-950/20 ${menuPositionClass}`}
        >
          {supportedLanguages.map((item) => {
            const isSelected = language === item;
            const option = languageOptions[item];

            return (
              <button
                key={item}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                onClick={() => handleSelectLanguage(item)}
                className={`flex w-full cursor-pointer items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                  isSelected
                    ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)]"
                    : "text-[var(--text-title)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]"
                }`}
              >
                <span className="flex h-4 w-4 flex-none items-center justify-center">
                  {isSelected ? (
                    <Icon name="check" className="h-4 w-4" size={16} />
                  ) : null}
                </span>

                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
