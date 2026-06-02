type Theme = "dark" | "light";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

function SunIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 8.25A3.75 3.75 0 1 1 12 15.75A3.75 3.75 0 0 1 12 8.25Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2.75V5M12 19V21.25M4.75 12H2.5M21.5 12H19.25M6.87 6.87L5.28 5.28M18.72 18.72L17.13 17.13M17.13 6.87L18.72 5.28M5.28 18.72L6.87 17.13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.25 14.2A7.85 7.85 0 0 1 9.8 3.75A8.25 8.25 0 1 0 20.25 14.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative h-11 w-[5.25rem] flex-none rounded-full transition duration-300 ${
        isDark
          ? "bg-slate-800/90 shadow-inner shadow-black/30"
          : "bg-slate-200 shadow-inner shadow-slate-300/70"
      }`}
    >
      <span
        className={`absolute left-1 top-1 h-9 w-9 rounded-full transition-transform duration-300 ease-out ${
          isDark
            ? "translate-x-0 bg-black shadow-lg shadow-black/30"
            : "translate-x-10 bg-white shadow-lg shadow-slate-400/40"
        }`}
      />

      <span
        className={`absolute left-1 top-1 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
          isDark ? "text-white" : "text-slate-500"
        }`}
      >
        <MoonIcon />
      </span>

      <span
        className={`absolute right-1 top-1 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
          isDark ? "text-slate-300" : "text-slate-950"
        }`}
      >
        <SunIcon />
      </span>
    </button>
  );
}
