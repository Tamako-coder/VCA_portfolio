'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  { num: 1, width: 400, height: 300 },
  { num: 2, width: 400, height: 300 },
  { num: 3, width: 400, height: 300 },
  { num: 4, width: 400, height: 300 },
  { num: 5, width: 400, height: 300 },
  { num: 6, width: 400, height: 300 },
  { num: 7, width: 400, height: 300 },
  { num: 8, width: 400, height: 300 },
];

const GAP = 20;

export default function ProjectCarousel() {
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate total width based on actual rendered widths
  const TOTAL_WIDTH = images.reduce((acc, img) => acc + 300 * (img.width / img.height) + GAP, 0);

  // Auto-scroll animation
  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      let newX = x.get() - (delta / 1000) * 50; // 50px per second

      // Loop when reaching the end of first set
      if (newX <= -TOTAL_WIDTH) {
        newX = 0;
      }

      x.set(newX);
    }
  });

  return (
    <div className="carousel-wrapper">
      <motion.div
        className="carousel-track-motion"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -TOTAL_WIDTH * 2, right: 0 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          // Snap to loop position if needed
          const currentX = x.get();
          if (currentX <= -TOTAL_WIDTH) {
            x.set(currentX + TOTAL_WIDTH);
          }
        }}
      >
        {/* Render 3 sets for seamless infinite scroll */}
        {[...images, ...images, ...images].map((image, idx) => (
          <div
            key={idx}
            className="carousel-item"
          >
            <Image
              src={`/assets/carousel_${image.num}.jpg`}
              alt={`Instalasi panel elektrikal ${image.num}`}
              width={image.width}
              height={image.height}
              className="carousel-image"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
