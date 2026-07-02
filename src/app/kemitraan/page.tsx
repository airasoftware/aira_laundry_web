import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PartnershipBenefits from "@/components/PartnershipBenefits";
import PartnershipTypes from "@/components/PartnershipTypes";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Kemitraan — Aira Laundry",
  description:
    "Bergabung sebagai mitra referral, reseller, atau mitra teknologi Aira Laundry dan kembangkan bisnis bersama kami.",
};

export default function KemitraanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kemitraan"
        title="Kembangkan Bisnis Bersama Aira Laundry"
        description="Program kemitraan untuk siapa saja yang ingin membantu lebih banyak usaha laundry naik kelas — sambil mendapatkan keuntungan."
      />
      <PartnershipBenefits />
      <PartnershipTypes />
      <ContactBanner
        title="Siap Menjadi Mitra Aira Laundry?"
        description="Hubungi tim kemitraan kami via WhatsApp untuk konsultasi gratis dan proses pendaftaran mitra."
        primaryLabel="Chat via WhatsApp"
        primaryHref="https://wa.me/6281234567890"
      />
    </>
  );
}
