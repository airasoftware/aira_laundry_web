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
    <section className="relative overflow-hidden bg-olive-600">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-olive-500/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
        <span className="inline-flex items-center rounded-full bg-cream-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream-100 ring-1 ring-inset ring-cream-100/30">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-cream-100 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream-200/90">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
