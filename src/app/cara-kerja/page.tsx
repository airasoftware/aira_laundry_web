import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Cara Kerja — Aira Laundry",
  description:
    "Pelajari cara memulai Aira Laundry: daftar akun, setup outlet, kelola transaksi, hingga pantau laporan keuangan.",
};

export default function CaraKerjaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cara Kerja"
        title="Bagaimana Aira Laundry Bekerja"
        description="Tidak perlu latar belakang teknis — Aira Laundry dirancang agar siapa pun bisa langsung mulai dalam hitungan menit."
      />
      <HowItWorks />
      <CTA />
    </>
  );
}
