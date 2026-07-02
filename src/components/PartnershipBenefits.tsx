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
    <section className="bg-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
        <span className="text-[13px] font-bold uppercase tracking-wide text-mint">
          Kenapa Bermitra
        </span>
        <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
          Berkembang Bersama Aira Laundry
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-line bg-white p-6"
          >
            <h3 className="text-base font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
