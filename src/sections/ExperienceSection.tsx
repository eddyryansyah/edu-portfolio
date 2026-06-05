import type { Experience } from "../data/portfolio";
import type { ExperienceSectionCopy } from "../data/i18n";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";

type ExperienceSectionProps = {
  experiences: Experience[];
  copy: ExperienceSectionCopy;
};

export function ExperienceSection({
  experiences,
  copy,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-20"
    >
      <SectionTitle
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
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
  );
}
