const TYPES = [
  {
    title: "Mitra Referral",
    description:
      "Rekomendasikan Aira Laundry ke pelaku usaha laundry di jaringan Anda dan dapatkan komisi dari setiap outlet yang berlangganan.",
    perks: ["Komisi tiap referral aktif", "Dashboard pelacakan referral", "Tanpa modal awal"],
  },
  {
    title: "Mitra Reseller",
    description:
      "Jual dan pasang Aira Laundry ke pelanggan Anda sendiri dengan skema harga khusus reseller dan dukungan penuh dari tim kami.",
    perks: ["Harga khusus reseller", "Materi pemasaran siap pakai", "Pelatihan produk berkala"],
  },
  {
    title: "Mitra Teknologi",
    description:
      "Integrasikan sistem atau perangkat Anda (mesin cuci pintar, pembayaran, POS) dengan platform Aira Laundry melalui API.",
    perks: ["Akses dokumentasi API", "Dukungan teknis prioritas", "Co-branding produk"],
  },
];

export default function PartnershipTypes() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
        <span className="text-[13px] font-bold uppercase tracking-wide text-mint">
          Jenis Kemitraan
        </span>
        <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
          Pilih Skema Kemitraan yang Sesuai
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-3">
        {TYPES.map((type) => (
          <div
            key={type.title}
            className="flex flex-col rounded-2xl border border-line p-8"
          >
            <h3 className="text-lg font-bold text-ink sm:text-xl">
              {type.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {type.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {type.perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2.5 text-sm text-ink"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 10.5l3.5 3.5L16 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
