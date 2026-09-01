import Image from "next/image";
import { type WorkImage } from "@/data/work";

type GalleryGridProps = {
  images: WorkImage[];
  onImageClick: (index: number) => void;
};

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <p>Tidak ada gambar untuk kategori ini.</p>
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <button
          key={image.id}
          className="gallery-grid-item"
          onClick={() => onImageClick(index)}
          aria-label={`View ${image.alt}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 500}
            height={image.height || 375}
            sizes="(max-width: 620px) 50vw, (max-width: 960px) 33vw, 25vw"
            className="gallery-grid-img"
          />
        </button>
      ))}
    </div>
  );
}
