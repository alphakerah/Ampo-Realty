interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.32em] text-gold/80">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-tight text-sand sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-sand/70 sm:text-lg">{description}</p>
    </div>
  );
}
