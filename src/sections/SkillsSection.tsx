import { Icon } from "../components/Icon";
import { SectionTitle } from "../components/SectionTitle";
import { SkillPill } from "../components/SkillPill";
import type { Certification } from "../data/portfolio";

type SkillsSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  technicalSkills: string;
  certifications: string;
  nonTechnicalSkills: string;
  languages: string;
};

type SkillsSectionProps = {
  copy: SkillsSectionCopy;
  skills: string[];
  softSkills: string[];
  certifications: Certification[];
  languages: string[];
};

export function SkillsSection({
  copy,
  skills,
  softSkills,
  certifications,
  languages,
}: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="scroll-mt-28 bg-[var(--surface)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8 lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
                <Icon name="clipboard" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-title)]">
                {copy.technicalSkills}
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
                {copy.certifications}
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
                {copy.nonTechnicalSkills}
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
                {copy.languages}
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
  );
}
