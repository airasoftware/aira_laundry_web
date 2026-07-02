import Link from "next/link";

const FOOTER_LINKS = [
  {
    heading: "Produk",
    links: [
      { label: "Fitur", href: "/fitur" },
      { label: "Harga", href: "/harga" },
      { label: "Produk", href: "/produk" },
    ],
  },
  {
    heading: "Perusahaan",
    links: [
      { label: "Cara Kerja", href: "/cara-kerja" },
      { label: "Testimoni", href: "/testimoni" },
      { label: "Kemitraan", href: "/kemitraan" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 sm:py-14 lg:px-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-[2fr_1fr_1fr_1fr] sm:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-ocean text-[15px] font-bold text-white">
                A
              </span>
              <span className="text-base font-bold text-ink">
                Aira Laundry
              </span>
            </div>
            <p className="max-w-[260px] text-[13.5px] leading-relaxed text-muted">
              Software manajemen laundry untuk usaha kiloan, kilat, hingga
              dry clean di seluruh Indonesia.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-2.5">
              <span className="mb-1 text-[13.5px] font-bold text-ink">
                {column.heading}
              </span>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13.5px] text-muted hover:text-ocean"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-2.5">
            <span className="mb-1 text-[13.5px] font-bold text-ink">
              Kontak
            </span>
            <a
              href="mailto:halo@airalaundry.id"
              className="text-[13.5px] text-muted hover:text-ocean"
            >
              halo@airalaundry.id
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-muted hover:text-ocean"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-[12.5px] text-muted">
          © {new Date().getFullYear()} Aira Laundry. Seluruh hak cipta
          dilindungi.
        </div>
      </div>
    </footer>
  );
}
