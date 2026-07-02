const FEATURES = [
  {
    number: "01",
    title: "Kasir & Transaksi",
    description:
      "Catat transaksi otomatis, cetak struk, dan terima QRIS, e-wallet, hingga transfer dalam satu aplikasi.",
  },
  {
    number: "02",
    title: "Lacak Status Cucian",
    description:
      "Pelanggan bisa memantau status cucian real-time, dari dijemput sampai diantar kembali.",
  },
  {
    number: "03",
    title: "Kelola Pegawai & Shift",
    description:
      "Atur presensi, jadwal shift, dan slip gaji pegawai laundry tanpa proses manual.",
  },
  {
    number: "04",
    title: "Laporan Keuangan",
    description:
      "Pantau pendapatan dan pengeluaran real-time dengan laporan yang mudah dibaca.",
  },
  {
    number: "05",
    title: "Notifikasi WhatsApp",
    description:
      "Kirim update status pesanan ke pelanggan secara otomatis lewat WhatsApp.",
  },
  {
    number: "06",
    title: "Multi Outlet",
    description:
      "Kelola dan pantau performa semua cabang laundry dari satu dashboard.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
        <h2 className="text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
          Semua yang dibutuhkan usaha laundry Anda
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
          Satu dashboard untuk operasional, pegawai, dan keuangan laundry
          Anda.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.number}
            className="rounded-2xl border border-line bg-white p-7 sm:p-9"
          >
            <div className="mb-4 text-[13px] font-bold text-mint">
              {feature.number}
            </div>
            <h3 className="mb-2.5 text-lg font-bold text-ink">
              {feature.title}
            </h3>
            <p className="text-[14.5px] leading-relaxed text-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
