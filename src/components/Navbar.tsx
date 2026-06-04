import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

type Theme = "dark" | "light";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const navItems = [
  { label: "Beranda", href: "home" },
  { label: "Pengalaman", href: "experience" },
  { label: "Pendidikan", href: "education" },
  { label: "Organisasi", href: "organization" },
  { label: "Keterampilan", href: "skills" },
  { label: "Kontak", href: "contact" },
];

const DESKTOP_NAVBAR_OFFSET = 120;
const MOBILE_NAVBAR_OFFSET = 160;
const BOTTOM_THRESHOLD = 32;
const smoothEase = [0.22, 1, 0.36, 1] as const;

const getNavbarOffset = () =>
  window.innerWidth < 768 ? MOBILE_NAVBAR_OFFSET : DESKTOP_NAVBAR_OFFSET;

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScrollPosition = documentHeight - viewportHeight;
      const isNearBottom =
        window.scrollY >= maxScrollPosition - BOTTOM_THRESHOLD;

      if (isNearBottom) {
        setActiveSection(navItems[navItems.length - 1].href);
        return;
      }

      const navbarOffset = getNavbarOffset();
      const scrollPosition = window.scrollY + navbarOffset + 1;
      let currentSection = "home";

      for (const item of navItems) {
        const sectionElement = document.getElementById(item.href);

        if (!sectionElement) {
          continue;
        }

        if (sectionElement.offsetTop <= scrollPosition) {
          currentSection = item.href;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavigate = (targetId: string) => {
    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        return;
      }

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        getNavbarOffset();

      window.scrollTo({
        top: Math.max(targetPosition, 0),
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${targetId}`);
      setActiveSection(targetId);
    };

    if (isOpen) {
      setIsOpen(false);
      window.setTimeout(scrollToTarget, 180);
      return;
    }

    scrollToTarget();
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2">
      <motion.nav
        layout
        transition={{ duration: 0.32, ease: smoothEase }}
        className="overflow-hidden rounded-[1.75rem] border border-[var(--nav-border)] bg-[var(--nav-bg)] px-3 py-3 shadow-xl shadow-slate-950/10 backdrop-blur-xl sm:px-4"
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavigate("home")}
            className="flex min-w-0 items-center gap-3 text-left"
            aria-label="Menuju bagian beranda"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[var(--nav-logo-bg)] text-sm font-bold text-[var(--nav-logo-text)]">
              {profile.initials}
            </div>

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-bold text-[var(--nav-title)] sm:text-base">
                Edward Portfolio
              </p>
              <p className="truncate text-xs text-[var(--nav-subtitle)]">
                Profil Profesional
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] shadow-sm"
                        : "text-[var(--nav-link)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="h-8 w-px bg-[var(--border)]" aria-hidden="true" />

            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-title)] shadow-sm transition hover:bg-[var(--surface-soft)] md:hidden"
            aria-label="Buka atau tutup menu navigasi"
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
              className="overflow-hidden md:hidden"
            >
              <motion.div
                initial={{ y: -4, filter: "blur(4px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                exit={{ y: -4, filter: "blur(4px)" }}
                transition={{ duration: 0.26, ease: smoothEase }}
                className="mt-3 grid gap-1 border-t border-[var(--border)] pt-3"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;

                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavigate(item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                        isActive
                          ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)]"
                          : "text-[var(--nav-link)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

                <div className="mt-2 flex items-center justify-between rounded-2xl bg-[var(--surface-soft)] px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      Tampilan
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[var(--text-title)]">
                      {theme === "dark" ? "Mode Gelap" : "Mode Terang"}
                    </p>
                  </div>

                  <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
