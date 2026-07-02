export default function ContactBanner({
  title,
  description,
  primaryLabel,
  primaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
}) {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:pb-24">
      <div className="mx-auto max-w-[1280px] rounded-[20px] bg-ocean px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <h2 className="text-[26px] font-extrabold text-white sm:text-[32px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] text-tint sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[9px] bg-white px-7 py-3.5 text-[15px] font-bold text-ocean-deep transition hover:opacity-90"
          >
            {primaryLabel}
          </a>
          <a
            href="mailto:halo@airalaundry.id"
            className="rounded-[9px] border border-white/40 px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-white/10"
          >
            halo@airalaundry.id
          </a>
        </div>
      </div>
    </section>
  );
}
