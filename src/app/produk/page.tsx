import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Produk — Aira Laundry",
  description:
    "Ekosistem aplikasi Aira Laundry: Aira Outlet untuk pemilik & pegawai, Aira Pelanggan untuk pelanggan, dan aplikasi custom sesuai kebutuhan.",
};

export default function ProdukPage() {
  return (
    <>
      <PageHeader
        eyebrow="Produk"
        title="Aplikasi untuk Setiap Sisi Usaha Anda"
        description="Dari pengelolaan outlet hingga pengalaman pelanggan, semua terhubung dalam satu ekosistem yang saling melengkapi."
      />
      <Products />
      <CTA />
    </>
  );
}
