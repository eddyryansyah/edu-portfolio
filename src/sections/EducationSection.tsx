import { BulletList } from "../components/BulletList";
import { Icon } from "../components/Icon";
import { SectionTitle } from "../components/SectionTitle";
import type { EducationSectionCopy } from "../data/i18n";

type EducationSectionProps = {
  copy: EducationSectionCopy;
  educationHighlights: string[];
  highSchoolHighlights: string[];
};

export function EducationSection({
  copy,
  educationHighlights,
  highSchoolHighlights,
}: EducationSectionProps) {
  return (
    <section
      id="education"
      className="scroll-mt-28 bg-[var(--surface)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
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
                  {copy.collegePeriod}
                </p>
                <p className="mt-3 font-semibold text-[var(--text-title)]">
                  {copy.collegeDegree}
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
                  {copy.highSchoolPeriod}
                </p>
                <p className="mt-3 font-semibold text-[var(--text-title)]">
                  {copy.highSchoolMajor}
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
  );
}
