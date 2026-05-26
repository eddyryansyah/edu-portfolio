import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "Home", href: "home" },
  { label: "Experience", href: "experience" },
  { label: "Education", href: "education" },
  { label: "Organization", href: "organization" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NAVBAR_OFFSET = 120;

  const handleNavigate = (targetId: string) => {
    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        return;
      }

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_OFFSET;

      window.scrollTo({
        top: Math.max(targetPosition, 0),
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${targetId}`);
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
        className="overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/90 px-3 py-3 shadow-xl shadow-slate-950/10 backdrop-blur-xl sm:px-4"
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavigate("home")}
            className="flex min-w-0 items-center gap-3 text-left"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
              {profile.initials}
            </div>

            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-bold text-slate-950 sm:text-base">
                Edward Portfolio
              </p>
              <p className="truncate text-xs text-slate-500">
                Professional Profile
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-slate-950 shadow-sm transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
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
                className="mt-3 grid gap-1 border-t border-slate-200 pt-3"
              >
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
