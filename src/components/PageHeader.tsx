export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-tint sm:h-64 sm:w-64" />
      <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <span className="inline-flex items-center rounded-full bg-tint px-3.5 py-[7px] text-[13px] font-semibold text-ocean-deep">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-[30px] font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
