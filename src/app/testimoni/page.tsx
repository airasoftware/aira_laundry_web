import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Testimoni — Aira Laundry",
  description:
    "Cerita nyata dari pelaku usaha laundry di seluruh Indonesia yang sudah merasakan kemudahan mengelola bisnis bersama Aira Laundry.",
};

export default function TestimoniPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimoni"
        title="Kata Mereka Tentang Aira Laundry"
        description="Ratusan pelaku usaha laundry sudah merasakan langsung manfaatnya. Berikut sebagian cerita mereka."
      />
      <Testimonials />
      <CTA />
    </>
  );
}
