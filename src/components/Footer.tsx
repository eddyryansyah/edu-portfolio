const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Edward Portfolio</p>
          <p className="mt-1 text-sm text-slate-400">
            Built by Eddy Ryansyah as a modern frontend portfolio project.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-400 md:items-end">
          <p>© {currentYear} Eddy Ryansyah. All rights reserved.</p>

          <a
            href="https://github.com/eddyryansyah/edu-portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-300 transition hover:text-white"
          >
            Official Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
