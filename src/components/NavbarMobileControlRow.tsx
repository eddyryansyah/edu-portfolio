import type { ReactNode } from "react";

type NavbarMobileControlRowProps = {
  label: string;
  value: string;
  children: ReactNode;
};

export function NavbarMobileControlRow({
  label,
  value,
  children,
}: NavbarMobileControlRowProps) {
  return (
    <div className="mt-2 flex items-center justify-between rounded-2xl bg-[var(--surface-soft)] px-4 py-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--text-title)]">
          {value}
        </p>
      </div>

      {children}
    </div>
  );
}
