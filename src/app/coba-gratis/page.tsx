import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Coba Gratis — Aira Laundry",
  description:
    "Coba paket Starter Aira Laundry gratis selamanya untuk 1 outlet. Hubungi tim kami untuk mulai onboarding.",
};

const STEPS = [
  {
    number: "01",
    title: "Hubungi Tim Kami",
    description:
      "Chat tim kami via WhatsApp atau email untuk aktivasi akun Starter gratis Anda.",
  },
  {
    number: "02",
    title: "Setup Dibantu Tim",
    description:
      "Kami bantu atur data outlet, layanan, dan harga agar Anda langsung siap pakai.",
  },
  {
    number: "03",
    title: "Mulai Kelola Usaha",
    description:
      "Catat transaksi, pantau pegawai, dan lihat laporan sejak hari pertama.",
  },
];

export default function CobaGratisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coba Gratis"
        title="Mulai Gratis Hari Ini"
        description="Paket Starter gratis selamanya untuk 1 outlet, tanpa kartu kredit. Butuh lebih banyak outlet? Lihat pilihan paket lain di halaman Harga."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="text-4xl font-extrabold text-line sm:text-5xl">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-muted">
          Ingin bandingkan dulu paketnya?{" "}
          <Link
            href="/harga"
            className="font-semibold text-ocean hover:underline"
          >
            Lihat semua paket harga
          </Link>
        </p>
      </section>

      <ContactBanner
        title="Aktifkan Akun Gratis Anda"
        description="Kirim pesan ke tim kami dan mulai kelola usaha laundry Anda hari ini juga."
        primaryLabel="Chat via WhatsApp"
        primaryHref="https://wa.me/6281234567890"
      />
    </>
  );
}
