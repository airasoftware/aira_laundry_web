import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Masuk — Aira Laundry",
  description:
    "Masuk ke akun Aira Laundry Anda lewat aplikasi mobile Aira Outlet atau Aira Pelanggan.",
};

const APPS = [
  {
    name: "Aira Outlet",
    audience: "Untuk Pemilik & Pegawai",
    description:
      "Masuk dengan akun outlet Anda untuk mengelola transaksi, pegawai, dan laporan.",
  },
  {
    name: "Aira Pelanggan",
    audience: "Untuk Pelanggan",
    description:
      "Masuk dengan nomor HP terdaftar untuk memantau progres cucian dan nota digital Anda.",
  },
];

export default function MasukPage() {
  return (
    <>
      <PageHeader
        eyebrow="Masuk"
        title="Masuk ke Akun Aira Laundry Anda"
        description="Aira Laundry digunakan lewat aplikasi mobile. Unduh dan masuk sesuai peran Anda."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="rounded-2xl border border-line p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-ocean">
                {app.audience}
              </span>
              <h3 className="mt-2 text-xl font-bold text-ink">{app.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {app.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white">
                  Google Play
                </span>
                <span className="rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink">
                  App Store
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactBanner
        title="Belum Punya Akun?"
        description="Hubungi tim kami untuk mengaktifkan akun outlet Anda, atau minta pemilik outlet mendaftarkan Anda sebagai pegawai."
        primaryLabel="Chat via WhatsApp"
        primaryHref="https://wa.me/6281234567890"
      />
    </>
  );
}
