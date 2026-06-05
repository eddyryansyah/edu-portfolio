import { motion } from "framer-motion";
import { HeroBackground } from "../components/HeroBackground";
import { ContactItem } from "../components/ContactItem";
import { Icon } from "../components/Icon";
import { ProfilePhoto } from "../components/ProfilePhoto";
import type { Profile } from "../data/portfolio";

type HeroSectionCopy = {
  badge: string;
  profileTitle: string;
  profileSubtitle: string;
  primaryCta: string;
  secondaryCta: string;
  primaryCtaAria: string;
  secondaryCtaAria: string;
  contactLabels: {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
  };
};

type HeroSectionProps = {
  profile: Profile;
  copy: HeroSectionCopy;
};

export function HeroSection({ profile, copy }: HeroSectionProps) {
  return (
    <section
      id="home"
      tabIndex={-1}
      className="relative flex min-h-[100svh] scroll-mt-28 overflow-hidden bg-[var(--page-bg)] focus:outline-none"
    >
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 pb-16 pt-32 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <p className="mb-4 inline-flex max-w-full rounded-full border border-[var(--hero-badge-border)] bg-[var(--hero-badge-bg)] px-4 py-2 text-xs font-medium text-[var(--hero-badge-text)] backdrop-blur sm:text-sm">
            {copy.badge}
          </p>

          <h1 className="max-w-full break-words text-3xl font-extrabold leading-tight tracking-tight text-[var(--hero-text-title)] sm:text-4xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-lg font-semibold text-[var(--hero-text-muted)] sm:text-xl md:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--hero-text-body)] sm:text-base md:text-lg md:leading-8">
            {profile.summary}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              aria-label={copy.primaryCtaAria}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[var(--hero-primary-button-bg)] px-6 py-3 text-sm font-bold text-[var(--hero-primary-button-text)] shadow-sm transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md active:translate-y-0 sm:w-auto"
            >
              {copy.primaryCta}
              <Icon name="external" className="ml-2 h-4 w-4" size={16} />
            </a>

            <a
              href={profile.cvUrl}
              download="CV Edward Yulyardi Suparno.pdf"
              aria-label={copy.secondaryCtaAria}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-2xl border border-[var(--hero-secondary-button-border)] bg-transparent px-6 py-3 text-sm font-bold text-[var(--hero-secondary-button-text)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--hero-secondary-button-hover)] hover:shadow-md active:translate-y-0 sm:w-auto"
            >
              {copy.secondaryCta}
              <Icon name="download" className="ml-2 h-4 w-4" size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full min-w-0 rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5"
        >
          <div className="w-full min-w-0 overflow-hidden rounded-[1.5rem] bg-white p-4 text-slate-950 sm:p-6">
            <div className="flex min-w-0 items-center gap-4">
              <ProfilePhoto
                src={profile.photoUrl}
                alt={profile.name}
                fallback={profile.initials}
              />

              <div className="min-w-0">
                <h2 className="break-words text-lg font-bold sm:text-xl">
                  {copy.profileTitle}
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {copy.profileSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 grid min-w-0 gap-3">
              <ContactItem
                icon="map"
                label={copy.contactLabels.location}
                value={profile.location}
              />
              <ContactItem
                icon="phone"
                label={copy.contactLabels.phone}
                value={profile.phone}
                href={profile.whatsappUrl}
              />
              <ContactItem
                icon="mail"
                label={copy.contactLabels.email}
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactItem
                icon="linkedin"
                label={copy.contactLabels.linkedin}
                value="edward-yulyardi-suparno"
                href={profile.linkedin}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
