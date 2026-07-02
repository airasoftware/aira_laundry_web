const TESTIMONIALS = [
  {
    name: "Dewi Astuti",
    role: "Pemilik, Kirana Laundry — Bandung",
    quote:
      "Sejak pakai Aira Laundry, laporan keuangan yang dulu makan waktu semalaman sekarang selesai dalam hitungan detik.",
  },
  {
    name: "Fajar Ramadhan",
    role: "Pemilik, Bersih Laundry — Surabaya",
    quote:
      "Pegawai jadi lebih disiplin karena absensi dan slip gaji otomatis tercatat rapi di aplikasi.",
  },
  {
    name: "Sri Wahyuni",
    role: "Pemilik, Wangi Laundry — Yogyakarta",
    quote:
      "Pelanggan makin percaya karena bisa pantau progres cucian sendiri lewat notifikasi real-time.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-200/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-olive-600">
            Testimoni
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-olive-950 sm:text-4xl">
            Dipercaya Pelaku Usaha Laundry di Seluruh Indonesia
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-3xl bg-cream-100 p-7 shadow-sm"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-olive-900">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-olive-600/10 pt-4">
                <p className="text-sm font-bold text-olive-950">
                  {item.name}
                </p>
                <p className="text-xs text-olive-700">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
