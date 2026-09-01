'use client';

import type { Metadata } from "next";
import { useState } from "react";
import { workImages, getImagesByTag, type WorkTag } from "@/data/work";
import GalleryFilters from "@/components/work/GalleryFilters";
import GalleryGrid from "@/components/work/GalleryGrid";
import ImageLightbox from "@/components/work/ImageLightbox";

export default function Gallery() {
  const [activeTag, setActiveTag] = useState<WorkTag | "all">("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeTag === "all" ? workImages : getImagesByTag(activeTag);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

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

      <section className="section gallery-section">
        <div className="container">
          <GalleryFilters
            activeTag={activeTag}
            onFilterChange={setActiveTag}
            imageCount={filteredImages.length}
          />
          <GalleryGrid images={filteredImages} onImageClick={handleImageClick} />
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </>
  );
}
