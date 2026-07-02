import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Fitur — Aira Laundry",
  description:
    "Fitur Aira Laundry: kasir & transaksi, pelacakan status cucian, manajemen pegawai, laporan keuangan, notifikasi WhatsApp, dan multi outlet.",
};

export default function FiturPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fitur"
        title="Fitur Lengkap Aira Laundry"
        description="Satu aplikasi untuk kasir, pelacakan cucian, pegawai, hingga laporan keuangan usaha laundry Anda."
      />
      <FeatureGrid />
      <CTA />
    </>
  );
}
