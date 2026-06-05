type SkipLinkProps = {
  href: string;
  children: string;
};

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:fixed focus:left-1/2 focus:top-24 focus:z-[9999] focus:-translate-x-1/2 focus:rounded-2xl focus:border focus:border-[var(--nav-active-bg)] focus:bg-[var(--nav-active-bg)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-[var(--nav-active-text)] focus:shadow-xl focus:shadow-slate-950/20"
    >
      {children}
    </a>
  );
}
