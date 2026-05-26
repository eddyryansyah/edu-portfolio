type SkillPillProps = {
  children: string;
  variant?: "light" | "dark";
};

export function SkillPill({ children, variant = "light" }: SkillPillProps) {
  const className =
    variant === "dark"
      ? "rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
      : "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm";

  return <span className={className}>{children}</span>;
}
