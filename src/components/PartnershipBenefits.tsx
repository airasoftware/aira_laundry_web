const BENEFITS = [
  {
    title: "Komisi Menarik",
    description:
      "Dapatkan komisi berulang dari setiap outlet aktif yang Anda bawa ke Aira Laundry.",
  },
  {
    title: "Pelatihan & Materi",
    description:
      "Akses pelatihan produk, materi pemasaran, dan konten siap pakai untuk mitra.",
  },
  {
    title: "Dashboard Mitra",
    description:
      "Pantau performa referral, komisi, dan status outlet mitra Anda secara real-time.",
  },
  {
    title: "Dukungan Prioritas",
    description:
      "Tim kemitraan kami siap membantu mulai dari onboarding hingga operasional harian.",
  },
];

export default function PartnershipBenefits() {
  return (
    <section className="bg-olive-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-olive-300">
            Kenapa Bermitra
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-cream-100 sm:text-4xl">
            Berkembang Bersama Aira Laundry
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cream-100/10 bg-olive-900/60 p-6"
            >
              <h3 className="text-base font-bold text-cream-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-200/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
