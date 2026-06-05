import type { SectionId } from "../data/i18n";
import type { NavbarItem } from "../types/navigation";

type NavbarLinksProps = {
  items: NavbarItem[];
  activeSection: SectionId;
  onNavigate: (targetId: SectionId) => void;
  variant: "desktop" | "mobile";
};

export function NavbarLinks({
  items,
  activeSection,
  onNavigate,
  variant,
}: NavbarLinksProps) {
  return (
    <>
      {items.map((item) => {
        const isActive = activeSection === item.href;

        const baseStateClass =
          "text-[var(--nav-link)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]";

        const activeStateClass =
          variant === "desktop"
            ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] shadow-sm"
            : "border-[var(--nav-active-text)] bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] shadow-sm";

        return (
          <button
            key={item.href}
            type="button"
            onClick={() => onNavigate(item.href)}
            aria-current={isActive ? "page" : undefined}
            className={`cursor-pointer whitespace-nowrap text-sm font-semibold transition ${
              variant === "desktop"
                ? "rounded-full px-3.5 py-2.5 2xl:px-4"
                : "rounded-2xl border-l-4 px-4 py-3 text-left"
            } ${
              isActive
                ? activeStateClass
                : variant === "mobile"
                  ? `border-transparent ${baseStateClass}`
                  : baseStateClass
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </>
  );
}
