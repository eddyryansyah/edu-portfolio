import { AnimatePresence, motion } from "framer-motion";

type NavbarMenuButtonProps = {
  isOpen: boolean;
  ariaLabel: string;
  onClick: () => void;
};

export function NavbarMenuButton({
  isOpen,
  ariaLabel,
  onClick,
}: NavbarMenuButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-title)] shadow-sm transition hover:bg-[var(--surface-soft)] xl:hidden"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onClick}
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
  );
}
