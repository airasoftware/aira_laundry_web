const STEPS = [
  {
    number: "01",
    title: "Daftar Akun",
    description: "Buat akun Aira Laundry gratis hanya dalam beberapa menit.",
  },
  {
    number: "02",
    title: "Setup Outlet",
    description:
      "Atur data outlet, layanan, harga, dan tambahkan pegawai Anda.",
  },
  {
    number: "03",
    title: "Kelola Transaksi",
    description:
      "Catat pesanan masuk, pantau progres, dan kirim notifikasi ke pelanggan.",
  },
  {
    number: "04",
    title: "Pantau Laporan",
    description:
      "Lihat performa usaha lewat laporan keuangan yang selalu up to date.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-olive-600">
          Cara Kerja
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-olive-950 sm:text-4xl">
          Mulai dalam 4 Langkah Mudah
        </h2>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.number} className="relative">
            <span className="text-5xl font-extrabold text-olive-200">
              {step.number}
            </span>
            <h3 className="mt-3 text-lg font-bold text-olive-950">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-olive-800/80">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
