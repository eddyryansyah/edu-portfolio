import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplashScreen } from "./components/SplashScreen";
import { Navbar } from "./components/Navbar";
import { HeroBackground } from "./components/HeroBackground";
import { BulletList } from "./components/BulletList";
import { ContactItem } from "./components/ContactItem";
import { ExperienceCard } from "./components/ExperienceCard";
import { Icon } from "./components/Icon";
import { ProfilePhoto } from "./components/ProfilePhoto";
import { SectionTitle } from "./components/SectionTitle";
import { SkillPill } from "./components/SkillPill";
import { Footer } from "./components/Footer";
import {
  certifications,
  educationHighlights,
  experiences,
  highSchoolHighlights,
  languages,
  organizationPoints,
  profile,
  skills,
  softSkills,
} from "./data/portfolio";

type Theme = "dark" | "light";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("theme");

    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--page-bg)] text-[var(--text-title)] transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading ? <SplashScreen /> : null}
      </AnimatePresence>

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-1/2 focus:top-24 focus:z-[9999] focus:-translate-x-1/2 focus:rounded-2xl focus:border focus:border-[var(--border)] focus:bg-[var(--surface-elevated)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-[var(--text-title)] focus:shadow-xl focus:shadow-slate-950/20"
      >
        Lewati ke konten utama
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

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
              Portofolio Profesional
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
                aria-label="Hubungi Edward Yulyardi Suparno"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[var(--hero-primary-button-bg)] px-6 py-3 text-sm font-bold text-[var(--hero-primary-button-text)] shadow-sm transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md active:translate-y-0 sm:w-auto"
              >
                Hubungi Saya
                <Icon name="external" className="ml-2 h-4 w-4" size={16} />
              </a>

              <a
                href={profile.cvUrl}
                download="CV Edward Yulyardi Suparno.pdf"
                aria-label="Unduh CV Edward Yulyardi Suparno"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-2xl border border-[var(--hero-secondary-button-border)] bg-transparent px-6 py-3 text-sm font-bold text-[var(--hero-secondary-button-text)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--hero-secondary-button-hover)] hover:shadow-md active:translate-y-0 sm:w-auto"
              >
                Unduh CV
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
                    Profil Profesional
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Inventori, Marketplace, dan Operasional
                  </p>
                </div>
              </div>

              <div className="mt-6 grid min-w-0 gap-3">
                <ContactItem
                  icon="map"
                  label="Lokasi"
                  value={profile.location}
                />
                <ContactItem
                  icon="phone"
                  label="Telepon / WhatsApp"
                  value={profile.phone}
                  href={profile.whatsappUrl}
                />
                <ContactItem
                  icon="mail"
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactItem
                  icon="linkedin"
                  label="LinkedIn"
                  value="edward-yulyardi-suparno"
                  href={profile.linkedin}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-20"
      >
        <SectionTitle
          eyebrow="Pengalaman"
          title="Pengalaman Kerja"
          description="Pengalaman di bidang administrasi inventori, pengelolaan stok, marketplace, pelayanan pelanggan, pemrosesan pesanan, dan pelaporan operasional."
        />

        <div className="grid gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </section>

      <section
        id="education"
        className="scroll-mt-28 bg-[var(--surface)] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Pendidikan"
            title="Pendidikan"
            description="Latar belakang pendidikan formal yang mendukung kemampuan logistik, administrasi, analisis, kedisiplinan, dan kerja sama."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                  <Icon name="graduation" size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-title)]">
                    Institut Transportasi dan Logistik Trisakti
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                    Jakarta, Indonesia | Aug 2017 - Aug 2024
                  </p>
                  <p className="mt-3 font-semibold text-[var(--text-title)]">
                    S1 Manajemen Logistik | IPK 3,66/4,00
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <BulletList items={educationHighlights} />
              </div>
            </article>

            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                  <Icon name="graduation" size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-title)]">
                    SMA Taman Harapan 1
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                    Bekasi, Indonesia | Jul 2014 - Mei 2017
                  </p>
                  <p className="mt-3 font-semibold text-[var(--text-title)]">
                    Ilmu Pengetahuan Alam
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <BulletList items={highSchoolHighlights} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="organization"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Organisasi"
              title="Pengalaman Organisasi"
              description="Pengalaman kepemimpinan yang mendukung kemampuan koordinasi, komunikasi, kedisiplinan, dan kerja sama tim."
            />
          </div>

          <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                <Icon name="users" size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--text-title)]">
                  Ekstrakurikuler Futsal
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                  Ketua | Bekasi, Indonesia | Sep 2015 - Sep 2016
                </p>
                <p className="mt-3 leading-7 text-[var(--text-body)]">
                  Ekstrakurikuler olahraga futsal yang menjadi wadah
                  pengembangan minat, kerja sama tim, kedisiplinan, dan
                  kepemimpinan siswa.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <BulletList items={organizationPoints} />
            </div>
          </article>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-28 bg-[var(--surface)] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Keterampilan"
            title="Keterampilan & Sertifikasi"
            description="Kombinasi kemampuan administrasi, pengolahan data, inventori, marketplace, dan kompetensi pendukung di bidang logistik."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8 lg:col-span-2">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                  <Icon name="clipboard" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-title)]">
                  Keterampilan Teknis
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                  <Icon name="award" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-title)]">
                  Sertifikasi
                </h3>
              </div>

              <div className="grid gap-4">
                {certifications.map((certification) => (
                  <div
                    key={certification.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                  >
                    <p className="font-bold text-[var(--text-title)]">
                      {certification.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-body)]">
                      {certification.details}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8 lg:col-span-2">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                  <Icon name="messageCircle" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-title)]">
                  Keterampilan Nonteknis
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                  <Icon name="language" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-title)]">
                  Bahasa
                </h3>
              </div>

              <div className="grid gap-3">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="rounded-2xl bg-[var(--surface)] p-4 shadow-sm ring-1 ring-[var(--border)]"
                  >
                    <p className="font-bold text-[var(--text-title)]">
                      {language}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 bg-[var(--contact-bg)] px-6 py-12 text-[var(--contact-text)] md:py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Kontak
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--contact-text)] md:text-4xl">
              Tertarik untuk bekerja sama?
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-[var(--contact-muted)]">
              Terbuka untuk peluang kerja di bidang administrasi inventori,
              marketplace, gudang, operasional, dan logistik.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              className="group rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-[var(--text-title)] shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              href={`mailto:${profile.email}`}
              aria-label={`Kirim email ke ${profile.email}`}
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
              aria-label={`Hubungi ${profile.name} melalui WhatsApp`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)] transition group-hover:scale-105">
                <Icon name="phone" className="h-6 w-6" size={24} />
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Telepon / WhatsApp
              </p>
              <p className="font-bold">{profile.phone}</p>
            </a>

            <a
              className="group rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-[var(--text-title)] shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:col-span-2"
              href={profile.linkedin}
              aria-label={`Buka profil LinkedIn ${profile.name}`}
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

      <Footer />
    </main>
  );
}
