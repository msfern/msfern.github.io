type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  id,
}: SectionHeadingProps) => (
  <div className="mb-10 flex items-end gap-5 border-b border-rule pb-4">
    <span
      aria-hidden="true"
      className="font-display text-4xl leading-none text-vermillion italic"
    >
      {eyebrow}
    </span>
    <h2
      id={id}
      className="pb-1 text-xs font-medium tracking-[0.22em] text-ink-soft uppercase"
    >
      {title}
    </h2>
  </div>
);
