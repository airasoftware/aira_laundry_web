import PhoneMockup from "@/components/PhoneMockup";

const HERO_STATS = [
  { value: "1.000+", label: "Usaha laundry" },
  { value: "500rb+", label: "Transaksi/bulan" },
  { value: "4,8/5", label: "Rating aplikasi" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-tint sm:-right-32 sm:-top-32 sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-14 lg:py-[88px]">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full bg-tint px-3.5 py-[7px] text-[13px] font-semibold text-ocean-deep">
            Software Manajemen Laundry
          </span>

          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[42px] lg:text-[52px] lg:leading-[1.12]">
            Kelola bisnis laundry Anda lebih rapi, cepat, dan menguntungkan
          </h1>

          <p className="mt-5 max-w-[480px] text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
            Satu aplikasi untuk kasir, pelacakan cucian, pegawai, hingga
            laporan keuangan — supaya Anda bisa fokus mengembangkan usaha,
            bukan mengurus catatan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/coba-gratis"
              className="rounded-[9px] bg-ocean px-6 py-3.5 text-center text-[15px] font-bold text-white transition hover:opacity-90"
            >
              Coba Gratis 14 Hari
            </a>
            <a
              href="/cara-kerja"
              className="rounded-[9px] border-[1.5px] border-line px-6 py-3.5 text-center text-[15px] font-bold text-ink transition hover:bg-mist"
            >
              Lihat Demo
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-6 sm:gap-8">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i < HERO_STATS.length - 1
                    ? "border-r border-line pr-6 sm:pr-8"
                    : ""
                }
              >
                <div className="text-xl font-extrabold text-ocean-deep sm:text-[22px]">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[12px] text-muted sm:text-[13px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
