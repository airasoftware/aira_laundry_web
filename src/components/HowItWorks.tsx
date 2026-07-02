const STEPS = [
  {
    number: "1",
    title: "Daftar & Atur Outlet",
    description:
      "Buat akun, tambahkan outlet dan daftar layanan laundry dalam hitungan menit.",
  },
  {
    number: "2",
    title: "Catat & Kelola Operasional",
    description:
      "Proses transaksi, atur pegawai, dan pantau produksi cucian setiap hari.",
  },
  {
    number: "3",
    title: "Pantau & Kembangkan Bisnis",
    description:
      "Lihat laporan performa dan ambil keputusan berbasis data untuk kembangkan usaha.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto mb-12 max-w-[560px] text-center sm:mb-14">
        <h2 className="text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
          Mulai dalam tiga langkah
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {STEPS.map((step) => (
          <div key={step.number}>
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-ocean text-base font-extrabold text-white">
              {step.number}
            </span>
            <h3 className="mb-2.5 text-lg font-bold text-ink">
              {step.title}
            </h3>
            <p className="text-[14.5px] leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
