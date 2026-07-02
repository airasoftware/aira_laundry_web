import Link from "next/link";

const FOOTER_LINKS = [
  {
    heading: "Produk",
    links: [
      { label: "Aira Outlet", href: "/produk" },
      { label: "Aira Pelanggan", href: "/produk" },
      { label: "Aplikasi Custom", href: "/produk" },
      { label: "Harga", href: "/harga" },
    ],
  },
  {
    heading: "Perusahaan",
    links: [
      { label: "Fitur", href: "/fitur" },
      { label: "Cara Kerja", href: "/cara-kerja" },
      { label: "Kemitraan", href: "/kemitraan" },
      { label: "Testimoni", href: "/testimoni" },
    ],
  },
  {
    heading: "Bantuan",
    links: [
      { label: "Coba Gratis", href: "/coba-gratis" },
      { label: "Masuk", href: "/masuk" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  },
];

const SOCIALS = ["Facebook", "Instagram", "YouTube", "TikTok"];

export default function Footer() {
  return (
    <footer className="mt-auto bg-olive-950 text-cream-200/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-olive-600 font-bold text-cream-100">
                A
              </span>
              <span className="text-lg font-bold text-cream-100">
                Aira Laundry
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Aplikasi manajemen usaha laundry untuk pemilik, pegawai, dan
              pelanggan — mengelola bisnis jadi lebih mudah dan transparan.
            </p>
            <p className="mt-4 text-sm">
              Jl. Laundry Sejahtera No. 10, Karanganyar,
              <br />
              Jawa Tengah, Indonesia
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-cream-100">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-cream-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-8 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} Aira Laundry. Semua hak dilindungi.
          </p>
          <div className="flex gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-medium hover:text-cream-100"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
