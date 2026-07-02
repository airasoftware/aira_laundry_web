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
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <nav className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-14 lg:py-[22px]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-ocean text-[17px] font-bold text-white">
            A
          </span>
          <span className="text-lg font-bold text-ink">Aira Laundry</span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14.5px] font-medium transition hover:text-ocean ${
                  active ? "text-ocean" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3.5 lg:flex">
          <Link
            href="/masuk"
            className="text-[14.5px] font-semibold text-ink hover:text-ocean"
          >
            Masuk
          </Link>
          <Link
            href="/coba-gratis"
            className="rounded-lg bg-ocean px-5 py-2.5 text-[14.5px] font-semibold text-white transition hover:opacity-90"
          >
            Coba Gratis
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
          >
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-5 py-5 sm:px-8 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                    active ? "bg-tint text-ocean-deep" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 flex items-center gap-3 border-t border-line pt-4">
              <Link
                href="/masuk"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-line px-4 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Masuk
              </Link>
              <Link
                href="/coba-gratis"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-ocean px-4 py-2.5 text-center text-sm font-semibold text-white"
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
