import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri | PT. Veritasindo Citra Abadi",
  description: "Galeri dokumentasi pekerjaan PT. Veritasindo Citra Abadi — pemasangan trafo, instalasi cubicle LV & MV, dan proyek elektrikal di Batam.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
