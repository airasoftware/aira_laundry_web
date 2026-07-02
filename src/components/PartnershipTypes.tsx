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
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-olive-600">
          Jenis Kemitraan
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-olive-950 sm:text-4xl">
          Pilih Skema Kemitraan yang Sesuai
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TYPES.map((type) => (
          <div
            key={type.title}
            className="flex flex-col rounded-3xl border border-olive-600/15 bg-cream-100 p-8"
          >
            <h3 className="text-xl font-bold text-olive-950">
              {type.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-olive-800/80">
              {type.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {type.perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2.5 text-sm text-olive-800"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-olive-600"
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
