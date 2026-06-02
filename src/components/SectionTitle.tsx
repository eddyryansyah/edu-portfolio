type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[var(--text-title)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--text-body)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
