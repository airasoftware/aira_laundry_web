const TESTIMONIALS = [
  {
    initial: "R",
    name: "Rina Wulandari",
    role: "Pemilik Bersih Laundry, Bandung",
    quote:
      "Sejak pakai Aira, laporan keuangan yang dulu makan waktu semalaman sekarang selesai dalam hitungan menit.",
  },
  {
    initial: "A",
    name: "Agus Prasetyo",
    role: "Owner Kilat Laundry, Surabaya",
    quote:
      "Pelanggan jadi jarang komplain karena mereka bisa cek sendiri status cucian lewat WhatsApp.",
  },
  {
    initial: "S",
    name: "Siti Marlina",
    role: "Founder Wangi Laundry Group, Jakarta",
    quote:
      "Kelola 4 outlet dari satu HP saja. Aira benar-benar menghemat waktu operasional kami.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto mb-12 max-w-[560px] text-center sm:mb-14">
        <h2 className="text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
          Dipercaya pengusaha laundry di seluruh Indonesia
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.name}
            className="rounded-2xl bg-white p-7 sm:p-[30px]"
          >
            <blockquote className="mb-[22px] text-[15px] leading-relaxed text-ink">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-tint text-sm font-bold text-ocean-deep">
                {item.initial}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{item.name}</p>
                <p className="text-[12.5px] text-muted">{item.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
