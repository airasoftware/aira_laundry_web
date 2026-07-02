export default function CTA() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-0 lg:pb-24">
      <div className="mx-auto max-w-[1280px] rounded-[20px] bg-ocean px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <h2 className="text-[26px] font-extrabold text-white sm:text-[32px]">
          Siap kelola laundry lebih efisien?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] text-tint sm:text-base">
          Coba Aira gratis selama 14 hari, tanpa kartu kredit.
        </p>
        <a
          href="/coba-gratis"
          className="mt-8 inline-block rounded-[9px] bg-white px-7 py-3.5 text-[15px] font-bold text-ocean-deep transition hover:opacity-90"
        >
          Mulai Coba Gratis
        </a>
      </div>
    </section>
  );
}
