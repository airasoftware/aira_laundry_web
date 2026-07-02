import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

const QUICK_LINKS = [
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
      <FeatureGrid />
      <HowItWorks />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14">
          <h2 className="text-[26px] font-extrabold tracking-tight text-ink sm:text-[34px]">
            Jelajahi lebih lanjut
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-2xl border border-line p-6 transition hover:border-ocean"
            >
              <h3 className="text-base font-bold text-ink">{link.title}</h3>
              <p className="mt-2 flex-1 text-[13.5px] text-muted">
                {link.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">
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
