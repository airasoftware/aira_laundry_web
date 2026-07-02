const PLANS = [
  {
    name: "Starter",
    description: "Cocok untuk laundry baru dengan 1 outlet",
    price: "Rp 99rb",
    period: "/bulan",
    features: ["Kasir & transaksi", "1 outlet", "Laporan dasar", "Support email"],
    cta: "Coba Gratis",
  },
  {
    name: "Pro",
    description: "Untuk laundry yang siap berkembang",
    price: "Rp 249rb",
    period: "/bulan",
    features: [
      "Semua fitur Starter",
      "Hingga 5 outlet",
      "Notifikasi WhatsApp otomatis",
      "Kelola pegawai & shift",
      "Laporan keuangan lengkap",
    ],
    cta: "Coba Gratis",
  },
  {
    name: "Bisnis",
    description: "Untuk jaringan laundry berskala besar",
    price: "Hubungi",
    period: "Kami",
    features: [
      "Semua fitur Pro",
      "Outlet tanpa batas",
      "Integrasi API",
      "Account manager khusus",
    ],
    cta: "Hubungi Sales",
  },
];

export default function Pricing() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto mb-12 max-w-[560px] text-center sm:mb-14">
        <h2 className="text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
          Paket yang sesuai skala usaha Anda
        </h2>
        <p className="mt-4 text-[15px] text-muted sm:text-base">
          Tanpa kontrak jangka panjang. Batalkan kapan saja.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col rounded-2xl border-[1.5px] border-line p-8"
          >
            <h3 className="mb-1.5 text-lg font-bold text-ink sm:text-[19px]">
              {plan.name}
            </h3>
            <p className="mb-6 text-[13.5px] text-muted">
              {plan.description}
            </p>
            <div className="mb-7">
              <span className="text-[26px] font-extrabold text-ink sm:text-[30px]">
                {plan.price}
              </span>
              <span className="text-sm text-muted"> {plan.period}</span>
            </div>

            <div className="mb-8 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-2.5 text-sm text-ink"
                >
                  <span className="font-bold text-ocean">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={
                plan.cta === "Hubungi Sales"
                  ? "https://wa.me/6281234567890"
                  : "/coba-gratis"
              }
              target={plan.cta === "Hubungi Sales" ? "_blank" : undefined}
              rel={plan.cta === "Hubungi Sales" ? "noopener noreferrer" : undefined}
              className="rounded-[9px] bg-ocean py-3.5 text-center text-[14.5px] font-bold text-white transition hover:opacity-90"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
