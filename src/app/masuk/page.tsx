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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="rounded-3xl border border-olive-600/15 bg-cream-100 p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-olive-600">
                {app.audience}
              </span>
              <h3 className="mt-2 text-xl font-bold text-olive-950">
                {app.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-olive-800/80">
                {app.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-olive-950 px-4 py-2 text-xs font-semibold text-cream-100">
                  Google Play
                </span>
                <span className="rounded-full border border-olive-600/30 px-4 py-2 text-xs font-semibold text-olive-800">
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
