import { BulletList } from "../components/BulletList";
import { Icon } from "../components/Icon";
import { SectionTitle } from "../components/SectionTitle";
import type { OrganizationSectionCopy } from "../data/i18n";

type OrganizationSectionProps = {
  copy: OrganizationSectionCopy;
  organizationPoints: string[];
};

export function OrganizationSection({
  copy,
  organizationPoints,
}: OrganizationSectionProps) {
  return (
    <section
      id="organization"
      className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
        </div>

        <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[var(--icon-bg)] text-[var(--icon-text)]">
              <Icon name="users" size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[var(--text-title)]">
                {copy.organizationName}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                {copy.organizationRole}
              </p>
              <p className="mt-3 leading-7 text-[var(--text-body)]">
                {copy.organizationDescription}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <BulletList items={organizationPoints} />
          </div>
        </article>
      </div>
    </section>
  );
}
