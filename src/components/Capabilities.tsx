const CAPABILITIES = [
  {
    title: "Laporan Keuangan",
    description:
      "Ringkasan pemasukan, pengeluaran, dan laba bersih tersaji otomatis tanpa perlu rekap manual.",
  },
  {
    title: "Catatan Transaksi",
    description:
      "Setiap transaksi tercatat lengkap dengan status, metode bayar, dan riwayat perubahan.",
  },
  {
    title: "Manajemen Stok",
    description:
      "Pantau stok deterjen, pewangi, dan bahan pendukung agar operasional tak pernah terhenti.",
  },
  {
    title: "Manajemen Pegawai",
    description:
      "Kelola jadwal, absensi, dan penggajian pegawai dari satu dasbor terpusat.",
  },
  {
    title: "Multi Outlet",
    description:
      "Kelola banyak cabang sekaligus dengan data yang tetap tersinkron secara real-time.",
  },
  {
    title: "Notifikasi Otomatis",
    description:
      "Pelanggan mendapat kabar otomatis saat cucian diproses hingga siap diambil.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-olive-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-olive-300">
            Kapabilitas Utama
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-cream-100 sm:text-4xl">
            Semua yang Dibutuhkan Usaha Laundry Anda
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
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
