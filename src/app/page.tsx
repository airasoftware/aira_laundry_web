import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

const QUICK_LINKS = [
  {
    href: "/fitur",
    title: "Fitur",
    description:
      "Fitur untuk pemilik, pegawai, dan pelanggan dalam satu aplikasi.",
  },
  {
    href: "/cara-kerja",
    title: "Cara Kerja",
    description: "Mulai kelola usaha laundry Anda dalam 4 langkah mudah.",
  },
  {
    href: "/produk",
    title: "Produk",
    description: "Kenali ekosistem aplikasi Aira Outlet dan Aira Pelanggan.",
  },
  {
    href: "/harga",
    title: "Harga",
    description: "Paket yang sesuai untuk setiap skala usaha laundry.",
  },
  {
    href: "/testimoni",
    title: "Testimoni",
    description: "Cerita nyata dari pelaku usaha laundry di seluruh Indonesia.",
  },
  {
    href: "/kemitraan",
    title: "Kemitraan",
    description: "Bergabung sebagai mitra dan kembangkan bisnis bersama kami.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-olive-600">
            Jelajahi Aira Laundry
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-olive-950 sm:text-4xl">
            Semua Informasi yang Anda Butuhkan
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-3xl border border-olive-600/15 bg-cream-100 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-olive-950">
                {link.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-olive-800/80">
                {link.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-olive-600">
                Selengkapnya
                <svg
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
