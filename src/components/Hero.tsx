const HERO_STATS = [
  { value: "10.000+", label: "Unduhan Aplikasi" },
  { value: "500+", label: "Outlet Mitra" },
  { value: "34", label: "Provinsi Terjangkau" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-olive-600">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-olive-500/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-olive-800/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-cream-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream-100 ring-1 ring-inset ring-cream-100/30">
            Aplikasi Manajemen Usaha Laundry
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-cream-100 sm:text-5xl">
            Kelola Usaha Laundry Lebih Mudah Bersama Aira Laundry
          </h1>

          <p className="mt-5 max-w-xl text-lg text-cream-200/90">
            Aira Laundry hadir sebagai solusi dari beragam masalah di usaha
            laundry — mulai dari pencatatan transaksi, monitoring pegawai,
            hingga laporan keuangan, semua dalam satu aplikasi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/coba-gratis"
              className="rounded-full bg-cream-500 px-7 py-3.5 text-center text-sm font-semibold text-olive-900 shadow-lg shadow-olive-950/20 transition hover:bg-cream-400"
            >
              Coba Aira Laundry Gratis
            </a>
            <a
              href="/cara-kerja"
              className="rounded-full border border-cream-100/40 px-7 py-3.5 text-center text-sm font-semibold text-cream-100 transition hover:bg-cream-100/10"
            >
              Lihat Cara Kerja
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream-100/20 pt-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-cream-100">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs text-cream-200/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-[2.5rem] border-8 border-olive-950/40 bg-cream-500 p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-olive-900">
                Dasbor Aira
              </span>
              <span className="rounded-full bg-olive-600/10 px-2.5 py-1 text-[10px] font-semibold text-olive-700">
                Hari ini
              </span>
            </div>

            <div className="mt-5 rounded-2xl bg-olive-600 p-4 text-cream-100">
              <p className="text-xs text-cream-200/80">Pendapatan Hari Ini</p>
              <p className="mt-1 text-2xl font-extrabold">Rp 1.850.000</p>
              <p className="mt-1 text-xs text-cream-200/80">
                42 transaksi selesai
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {[
                { label: "Cuci Setrika – Budi S.", status: "Proses" },
                { label: "Dry Clean – Rani W.", status: "Siap Diambil" },
                { label: "Cuci Kering – Andi P.", status: "Selesai" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-olive-600/15 px-3 py-2.5"
                >
                  <span className="text-xs font-medium text-olive-900">
                    {item.label}
                  </span>
                  <span className="rounded-full bg-olive-200 px-2 py-0.5 text-[10px] font-semibold text-olive-800">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
