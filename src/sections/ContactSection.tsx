import { Icon } from "../components/Icon";
import type { Profile } from "../data/portfolio";

type ContactSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  emailAria: string;
  whatsappAria: string;
  linkedinAria: string;
  phoneLabel: string;
};

type ContactSectionProps = {
  profile: Profile;
  copy: ContactSectionCopy;
};

export function ContactSection({ profile, copy }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[var(--contact-bg)] px-6 py-12 text-[var(--contact-text)] md:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--contact-text)] md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-xl leading-8 text-[var(--contact-muted)]">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            className="group rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-[var(--text-title)] shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            href={`mailto:${profile.email}`}
            aria-label={`${copy.emailAria} ${profile.email}`}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)] transition group-hover:scale-105">
              <Icon name="mail" className="h-6 w-6" size={24} />
            </div>
            <p className="text-sm text-[var(--text-muted)]">Email</p>
            <p className="break-words font-bold">{profile.email}</p>
          </a>

          <a
            className="group rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-[var(--text-title)] shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            href={profile.whatsappUrl}
            aria-label={copy.whatsappAria}
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)] transition group-hover:scale-105">
              <Icon name="phone" className="h-6 w-6" size={24} />
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              {copy.phoneLabel}
            </p>
            <p className="font-bold">{profile.phone}</p>
          </a>

          <a
            className="group rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-[var(--text-title)] shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:col-span-2"
            href={profile.linkedin}
            aria-label={copy.linkedinAria}
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)] transition group-hover:scale-105">
              <Icon name="linkedin" className="h-6 w-6" size={24} />
            </div>
            <p className="text-sm text-[var(--text-muted)]">LinkedIn</p>
            <p className="break-words font-bold">
              linkedin.com/in/edward-yulyardi-suparno
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
