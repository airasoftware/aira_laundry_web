import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RoleFeatures from "@/components/RoleFeatures";
import Capabilities from "@/components/Capabilities";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Fitur — Aira Laundry",
  description:
    "Fitur Aira Laundry untuk pemilik, pegawai, dan pelanggan: pencatatan transaksi, manajemen pegawai, notifikasi otomatis, dan laporan keuangan.",
};

export default function FiturPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fitur"
        title="Fitur Lengkap Aira Laundry"
        description="Semua masalah di usaha laundry pasti ada solusinya — dirancang untuk pemilik, pegawai, dan pelanggan sekaligus."
      />
      <RoleFeatures />
      <Capabilities />
      <CTA />
    </>
  );
}
