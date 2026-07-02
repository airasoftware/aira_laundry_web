"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/fitur", label: "Fitur" },
  { href: "/cara-kerja", label: "Cara Kerja" },
  { href: "/produk", label: "Produk" },
  { href: "/harga", label: "Harga" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kemitraan", label: "Kemitraan" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-olive-600/10 bg-cream-500/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-olive-600 text-cream-100 font-bold">
            A
          </span>
          <span className="text-lg font-bold tracking-tight text-olive-950">
            Aira Laundry
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition hover:text-olive-600 ${
                  active ? "text-olive-600" : "text-olive-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/masuk"
            className="text-sm font-semibold text-olive-800 hover:text-olive-600"
          >
            Masuk
          </Link>
          <Link
            href="/coba-gratis"
            className="rounded-full bg-olive-600 px-5 py-2.5 text-sm font-semibold text-cream-100 shadow-sm transition hover:bg-olive-700"
          >
            Coba Gratis
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-olive-600/20 text-olive-800 lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-olive-600/10 bg-cream-500 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    active ? "text-olive-600" : "text-olive-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/masuk"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-olive-600/30 px-4 py-2.5 text-center text-sm font-semibold text-olive-800"
              >
                Masuk
              </Link>
              <Link
                href="/coba-gratis"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-olive-600 px-4 py-2.5 text-center text-sm font-semibold text-cream-100"
              >
                Coba Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
