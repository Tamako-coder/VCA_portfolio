'use client';

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { type WorkImage } from "@/data/work";
import TagBadge from "./TagBadge";

type ImageLightboxProps = {
  images: WorkImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!currentImage) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <button
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Previous image"
          disabled={currentIndex === 0}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Next image"
          disabled={currentIndex === images.length - 1}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="lightbox-image-wrapper">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width || 800}
            height={currentImage.height || 600}
            className="lightbox-image"
            priority
          />
        </div>

        <div className="lightbox-info">
          <div className="lightbox-caption">
            {currentImage.caption && (
              <p className="lightbox-caption-text">{currentImage.caption}</p>
            )}
            <p className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
          <div className="lightbox-tags">
            {currentImage.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
