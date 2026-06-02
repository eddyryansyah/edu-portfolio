import { motion } from "framer-motion";
import type { Experience } from "../data/portfolio";
import { BulletList } from "./BulletList";
import { Icon } from "./Icon";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <article className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="grid gap-0 md:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-[var(--border)] bg-[var(--experience-panel-bg)] p-6 text-[var(--experience-panel-text)] md:border-b-0 md:border-r md:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
              <Icon name={experience.icon} size={24} />
            </div>

            <h3 className="text-2xl font-bold">{experience.role}</h3>

            <p className="mt-2 font-semibold text-[var(--experience-panel-text)]">
              {experience.company}
            </p>

            <p className="mt-3 text-sm text-[var(--experience-panel-muted)]">
              {experience.location}
            </p>

            <p className="mt-1 text-sm text-[var(--experience-panel-muted)]">
              {experience.period}
            </p>
          </div>

          <div className="p-6 md:p-8">
            <p className="leading-7 text-[var(--text-body)]">
              {experience.description}
            </p>
            <div className="mt-5">
              <BulletList items={experience.points} />
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
