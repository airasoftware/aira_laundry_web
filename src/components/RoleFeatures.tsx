const ROLES = [
  {
    title: "Pemilik",
    tagline: "Pantau seluruh usaha dari genggaman tangan",
    features: [
      "Pencatatan transaksi otomatis & real-time",
      "Manajemen data pelanggan terpusat",
      "Monitoring antrian & progres cucian",
      "Laporan keuangan harian, mingguan, bulanan",
    ],
  },
  {
    title: "Pegawai",
    tagline: "Kerja lebih rapi tanpa catatan manual",
    features: [
      "Absensi kehadiran digital",
      "Slip gaji otomatis tiap periode",
      "Notifikasi order masuk secara instan",
      "Checklist status pengerjaan cucian",
    ],
  },
  {
    title: "Pelanggan",
    tagline: "Transparan mulai dari antar sampai jemput",
    features: [
      "Nota digital, tanpa kertas hilang",
      "Pantau progres cucian secara langsung",
      "Riwayat deposit & saldo tersimpan rapi",
      "Info promo & diskon terbaru",
    ],
  },
];

export default function RoleFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-olive-600">
          Untuk Semua Peran
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-olive-950 sm:text-4xl">
          Satu Aplikasi, Solusi untuk Semua
        </h2>
        <p className="mt-4 text-olive-800/80">
          Setiap peran punya kebutuhan berbeda — berikut fitur yang disiapkan
          khusus untuk masing-masing.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {ROLES.map((role) => (
          <div
            key={role.title}
            className="rounded-3xl border border-olive-600/15 bg-cream-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-olive-600 text-lg font-bold text-cream-100">
              {role.title.charAt(0)}
            </span>
            <h3 className="mt-5 text-xl font-bold text-olive-950">
              {role.title}
            </h3>
            <p className="mt-1 text-sm text-olive-700">{role.tagline}</p>

            <ul className="mt-6 space-y-3">
              {role.features.map((feature) => (
                <li
                  key={feature}
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
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
