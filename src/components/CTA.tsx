export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-olive-600 px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cream-100/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-olive-950/30 blur-3xl" />

        <div className="relative">
          <h2 className="text-3xl font-extrabold text-cream-100 sm:text-4xl">
            Siap Kembangkan Usaha Laundry Anda?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-200/90">
            Bergabung dengan ratusan pelaku usaha laundry yang sudah
            merasakan kemudahan mengelola bisnis bersama Aira Laundry.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/coba-gratis"
              className="rounded-full bg-cream-500 px-7 py-3.5 text-sm font-semibold text-olive-900 shadow-lg transition hover:bg-cream-400"
            >
              Coba Aira Laundry Gratis
            </a>
            <a
              href="/kemitraan"
              className="rounded-full border border-cream-100/40 px-7 py-3.5 text-sm font-semibold text-cream-100 transition hover:bg-cream-100/10"
            >
              Hubungi Tim Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
