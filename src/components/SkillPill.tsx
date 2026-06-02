type SkillPillProps = {
  children: string;
  variant?: "light" | "dark";
};

export function SkillPill({ children, variant = "light" }: SkillPillProps) {
  const className =
    variant === "dark"
      ? "rounded-full bg-[var(--pill-dark-bg)] px-4 py-2 text-sm font-semibold text-[var(--pill-dark-text)]"
      : "rounded-full border border-[var(--border)] bg-[var(--pill-bg)] px-4 py-2 text-sm font-semibold text-[var(--pill-text)] shadow-sm";

  return <span className={className}>{children}</span>;
}
