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
import { Footer } from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <AnimatePresence mode="wait">
        {isLoading ? <SplashScreen /> : null}
      </AnimatePresence>

      <Navbar />

      <section
        id="home"
        className="relative flex min-h-[100svh] scroll-mt-28 overflow-hidden bg-slate-950 text-white"
      >
        <HeroBackground />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 pb-16 pt-32 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-28 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <p className="mb-4 inline-flex max-w-full rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-slate-200 sm:text-sm">
              Professional Portfolio
            </p>

            <h1 className="max-w-full break-words text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-lg font-semibold text-slate-200 sm:text-xl md:text-2xl">
              {profile.title}
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg md:leading-8">
              {profile.summary}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200 sm:w-auto"
              >
                Hubungi Saya
                <Icon name="external" className="ml-2 h-4 w-4" size={16} />
              </a>

              <a
                href={profile.cvUrl}
                download="CV Edward Yulyardi Suparno.pdf"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Download CV
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
                    Inventory, Marketplace, dan Operasional
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
          eyebrow="Experience"
          title="Pengalaman Kerja"
          description="Pengalaman di bidang administrasi inventory, pengelolaan stok, marketplace, pelayanan pelanggan, pemrosesan pesanan, dan laporan operasional."
        />

        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </section>

      <section id="education" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Education"
            title="Pendidikan"
            description="Latar belakang pendidikan formal yang mendukung kemampuan logistik, administrasi, analisis, kedisiplinan, dan kerja sama."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon name="graduation" size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Institut Transportasi dan Logistik Trisakti
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Jakarta, Indonesia | Aug 2017 - Aug 2024
                  </p>
                  <p className="mt-3 font-semibold text-slate-900">
                    S1 Manajemen Logistik | IPK 3,66/4,00
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <BulletList items={educationHighlights} />
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon name="graduation" size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">SMA Taman Harapan 1</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Bekasi, Indonesia | Jul 2014 - Mei 2017
                  </p>
                  <p className="mt-3 font-semibold text-slate-900">
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
              eyebrow="Organization"
              title="Pengalaman Organisasi"
              description="Pengalaman kepemimpinan yang mendukung kemampuan koordinasi, komunikasi, kedisiplinan, dan kerja sama tim."
            />
          </div>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon name="users" size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold">Ekstrakurikuler Futsal</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Ketua | Bekasi, Indonesia | Sep 2015 - Sep 2016
                </p>
                <p className="mt-3 leading-7 text-slate-600">
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

      <section id="skills" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Skills"
            title="Keterampilan & Sertifikasi"
            description="Kombinasi kemampuan administrasi, pengolahan data, inventory, marketplace, dan kompetensi pendukung di bidang logistik."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
              <div className="mb-5 flex items-center gap-3">
                <Icon name="clipboard" className="h-6 w-6" size={24} />
                <h3 className="text-2xl font-bold">Hard Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Icon name="award" className="h-6 w-6" size={24} />
                <h3 className="text-2xl font-bold">Sertifikasi</h3>
              </div>

              <div className="grid gap-4">
                {certifications.map((certification) => (
                  <div
                    key={certification.title}
                    className="rounded-2xl bg-slate-100 p-4"
                  >
                    <p className="font-bold text-slate-950">
                      {certification.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {certification.details}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
              <div className="mb-5 flex items-center gap-3">
                <Icon name="users" className="h-6 w-6" size={24} />
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <SkillPill key={skill} variant="dark">
                    {skill}
                  </SkillPill>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Icon name="language" className="h-6 w-6" size={24} />
                <h3 className="text-2xl font-bold">Bahasa</h3>
              </div>

              <div className="grid gap-3">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <p className="font-bold">{language}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 bg-slate-950 px-6 py-16 text-white md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tertarik untuk bekerja sama?
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              Terbuka untuk peluang kerja di bidang administrasi inventory,
              marketplace, gudang, operasional, dan logistik.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="rounded-3xl bg-white p-5 text-slate-950 shadow-lg transition hover:-translate-y-1"
              href={`mailto:${profile.email}`}
            >
              <Icon name="mail" className="mb-4 h-6 w-6" size={24} />
              <p className="text-sm text-slate-500">Email</p>
              <p className="break-words font-bold">{profile.email}</p>
            </a>

            <a
              className="rounded-3xl bg-white p-5 text-slate-950 shadow-lg transition hover:-translate-y-1"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="phone" className="mb-4 h-6 w-6" size={24} />
              <p className="text-sm text-slate-500">Telepon / WhatsApp</p>
              <p className="font-bold">{profile.phone}</p>
            </a>

            <a
              className="rounded-3xl bg-white p-5 text-slate-950 shadow-lg transition hover:-translate-y-1 sm:col-span-2"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" className="mb-4 h-6 w-6" size={24} />
              <p className="text-sm text-slate-500">LinkedIn</p>
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
