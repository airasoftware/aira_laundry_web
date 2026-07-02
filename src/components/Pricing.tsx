const PLANS = [
  {
    name: "Starter",
    price: "Gratis",
    period: "selamanya",
    description: "Untuk usaha laundry baru yang ingin mulai digital.",
    features: [
      "1 outlet",
      "Pencatatan transaksi",
      "Nota digital pelanggan",
      "Laporan dasar",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "Rp 99rb",
    period: "/bulan",
    description: "Untuk usaha yang berkembang dan butuh fitur lengkap.",
    features: [
      "Hingga 3 outlet",
      "Manajemen pegawai & absensi",
      "Laporan keuangan lengkap",
      "Notifikasi otomatis pelanggan",
    ],
    highlighted: true,
  },
  {
    name: "Bisnis",
    price: "Hubungi Kami",
    period: "",
    description: "Untuk jaringan laundry berskala besar.",
    features: [
      "Outlet tanpa batas",
      "Aplikasi custom & branding",
      "Dukungan prioritas",
      "Integrasi khusus",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-olive-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-olive-300">
            Harga
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-cream-100 sm:text-4xl">
            Paket yang Sesuai untuk Setiap Skala Usaha
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-cream-500 text-olive-950 ring-4 ring-olive-500"
                  : "border border-cream-100/15 text-cream-100"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-olive-600 px-3 py-1 text-xs font-semibold text-cream-100">
                  Paling Populer
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-olive-700" : "text-cream-200/75"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-olive-700" : "text-cream-200/75"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.highlighted ? "text-olive-600" : "text-olive-300"
                      }`}
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

              <a
                href="/coba-gratis"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-olive-600 text-cream-100 hover:bg-olive-700"
                    : "border border-cream-100/30 text-cream-100 hover:bg-cream-100/10"
                }`}
              >
                Pilih {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
