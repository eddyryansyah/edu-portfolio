import type { SectionId } from "../data/i18n";

type NavbarItem = {
  href: SectionId;
  label: string;
};

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

        return (
          <button
            key={item.href}
            type="button"
            onClick={() => onNavigate(item.href)}
            aria-current={isActive ? "page" : undefined}
            className={`cursor-pointer whitespace-nowrap text-sm font-semibold transition ${
              variant === "desktop"
                ? "rounded-full px-3.5 py-2.5 2xl:px-4"
                : "rounded-2xl px-4 py-3 text-left"
            } ${
              isActive
                ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)] shadow-sm"
                : "text-[var(--nav-link)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </>
  );
}
