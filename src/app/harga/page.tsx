import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Harga — Aira Laundry",
  description:
    "Pilih paket Aira Laundry yang sesuai dengan skala usaha Anda, mulai dari gratis hingga paket bisnis untuk jaringan laundry besar.",
};

export default function HargaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Harga"
        title="Harga Transparan, Tanpa Biaya Tersembunyi"
        description="Mulai gratis, upgrade kapan saja seiring berkembangnya usaha laundry Anda."
      />
      <Pricing />
      <CTA />
    </>
  );
}
