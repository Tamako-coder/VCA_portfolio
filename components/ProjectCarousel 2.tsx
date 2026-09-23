'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { getCarouselImages } from '@/data/work';

const GAP = 20;

export default function ProjectCarousel() {
  const baseX = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  // Get carousel images from centralized data
  const images = getCarouselImages();

  // Calculate width for one complete set
  const ITEM_WIDTH = 300 * (4 / 3) + GAP; // Approximate width based on aspect ratio
  const SET_WIDTH = ITEM_WIDTH * images.length;

  // Auto-scroll animation with seamless loop
  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      let newX = baseX.get() - (delta / 1000) * 50; // 50px per second

      // Seamless loop - wrap around when scrolling through one set
      while (newX <= -SET_WIDTH) {
        newX += SET_WIDTH;
      }
      while (newX > 0) {
        newX -= SET_WIDTH;
      }

      baseX.set(newX);
    } else {
      // Also wrap during dragging for infinite feel
      let currentX = baseX.get();
      while (currentX <= -SET_WIDTH * 2) {
        currentX += SET_WIDTH;
        baseX.set(currentX);
      }
      while (currentX > 0) {
        currentX -= SET_WIDTH;
        baseX.set(currentX);
      }
    }
  });

  return (
    <div className="carousel-wrapper">
      <motion.div
        className="carousel-track-motion"
        style={{ x: baseX }}
        drag="x"
        dragElastic={0}
        dragConstraints={{ left: -Infinity, right: Infinity }}
        dragTransition={{ bounceStiffness: 0, bounceDamping: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {/* Render 5 sets for buffer during infinite scroll */}
        {[...images, ...images, ...images, ...images, ...images].map((image, idx) => (
          <div
            key={`${image.id}-${idx}`}
            className="carousel-item"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 300}
              className="carousel-image"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
