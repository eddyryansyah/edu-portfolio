const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[var(--footer-border)] bg-[var(--footer-bg)] px-6 py-8 text-[var(--footer-text)] transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--footer-text)]">
            Edward Portfolio
          </p>
          <p className="mt-1 text-sm text-[var(--footer-muted)]">
            Built by Eddy Ryansyah as a modern frontend portfolio project.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-[var(--footer-muted)] md:items-end">
          <p>© {currentYear} Eddy Ryansyah. All rights reserved.</p>

          <a
            href="https://github.com/eddyryansyah/edu-portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[var(--footer-link)] transition hover:text-[var(--footer-link-hover)]"
          >
            Official Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
