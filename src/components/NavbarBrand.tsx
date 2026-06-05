import { SITE } from "../constants/site";
import { profile } from "../data/portfolio";

type NavbarBrandProps = {
  subtitle: string;
  ariaLabel: string;
  onClick: () => void;
};

export function NavbarBrand({
  subtitle,
  ariaLabel,
  onClick,
}: NavbarBrandProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-w-0 cursor-pointer items-center gap-3 text-left"
      aria-label={ariaLabel}
    >
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[var(--nav-logo-bg)] text-sm font-bold text-[var(--nav-logo-text)]">
        {profile.initials}
      </div>

      <div className="min-w-0 leading-tight">
        <p className="truncate text-sm font-bold text-[var(--nav-title)] sm:text-base">
          {SITE.name}
        </p>
        <p className="truncate text-xs text-[var(--nav-subtitle)]">
          {subtitle}
        </p>
      </div>
    </button>
  );
}
