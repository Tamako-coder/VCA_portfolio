import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Galeri | PT. Veritasindo Citra Abadi",
  description: "Galeri dokumentasi pekerjaan PT. Veritasindo Citra Abadi — pemasangan trafo, instalasi cubicle LV & MV, dan proyek elektrikal di Batam.",
};

const galleryItems = [
  { id: 1, name: "gallery_1.webp", alt: "Dokumentasi proyek elektrikal 1" },
  { id: 2, name: "gallery_2.webp", alt: "Dokumentasi proyek elektrikal 2" },
  { id: 3, name: "gallery_3.webp", alt: "Dokumentasi proyek elektrikal 3" },
  { id: 4, name: "gallery_4.webp", alt: "Dokumentasi proyek elektrikal 4" },
  { id: 5, name: "gallery_5.webp", alt: "Dokumentasi proyek elektrikal 5" },
  { id: 6, name: "gallery_6.webp", alt: "Dokumentasi proyek elektrikal 6" },
  { id: 7, name: "Proses-pemasangan-trafo-baru-Foto-Humas-1024x768.webp", alt: "Proses pemasangan trafo" },
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Galeri</p>
          <h1>Dokumentasi pekerjaan dan proyek kami.</h1>
          <p className="page-hero-sub">
            Kumpulan foto instalasi trafo, cubicle LV &amp; MV, serta kegiatan
            lapangan tim PT. Veritasindo Citra Abadi.
          </p>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="gallery gallery-4">
            {galleryItems.map((item) => (
              <figure className="gallery-item" key={item.id}>
                <Image
                  src={`/gallery/${item.name}`}
                  alt={item.alt}
                  width={500}
                  height={375}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
