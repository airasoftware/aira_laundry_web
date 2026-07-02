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
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-olive-600">
          Produk Kami
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-olive-950 sm:text-4xl">
          Ekosistem Aplikasi Aira Laundry
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="flex flex-col rounded-3xl border border-olive-600/15 p-8"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-olive-600">
              {product.audience}
            </span>
            <h3 className="mt-2 text-xl font-bold text-olive-950">
              {product.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-olive-800/80">
              {product.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full bg-olive-200/60 px-3 py-1 text-xs font-medium text-olive-800"
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
