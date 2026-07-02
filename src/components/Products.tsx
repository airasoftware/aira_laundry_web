const PRODUCTS = [
  {
    name: "Aira Outlet",
    audience: "Untuk Pemilik & Pegawai",
    description:
      "Aplikasi manajemen inti untuk mengelola transaksi, pegawai, stok, dan laporan keuangan outlet laundry Anda.",
    highlights: ["Multi outlet", "Laporan real-time", "Manajemen pegawai"],
  },
  {
    name: "Aira Pelanggan",
    audience: "Untuk Pelanggan",
    description:
      "Aplikasi khusus pelanggan untuk memantau progres cucian, nota digital, deposit, dan promo terbaru.",
    highlights: ["Nota digital", "Pantau progres", "Info promo"],
  },
  {
    name: "Aplikasi Custom",
    audience: "Untuk Kebutuhan Khusus",
    description:
      "Butuh fitur eksklusif atau branding sendiri? Tim kami membangun aplikasi khusus sesuai kebutuhan usaha Anda.",
    highlights: ["Branding sendiri", "Fitur eksklusif", "Konsultasi gratis"],
  },
];

export default function Products() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
        <span className="text-[13px] font-bold uppercase tracking-wide text-mint">
          Produk Kami
        </span>
        <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
          Ekosistem Aplikasi Aira Laundry
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="flex flex-col rounded-2xl border border-line p-8"
          >
            <span className="text-[12.5px] font-semibold uppercase tracking-wide text-ocean">
              {product.audience}
            </span>
            <h3 className="mt-2 text-lg font-bold text-ink sm:text-xl">
              {product.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {product.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-ocean-deep"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
