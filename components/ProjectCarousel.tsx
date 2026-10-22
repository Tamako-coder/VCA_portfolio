'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { getCarouselImages } from '@/data/work';

/**
 * Horizontal gap (in pixels) between carousel items.
 * Used to calculate total SET_WIDTH for wrapping logic.
 */
const GAP = 20;

/**
 * Number of image set repetitions to render.
 * 5 sets ensures smooth infinite scrolling without visible gaps:
 * - If user drags right (positive), leftmost set provides seamless content
 * - If user scrolls left (negative), rightmost set provides seamless content
 * - Total rendered DOM is images.length * 5, which is acceptable for typical gallery sizes
 */
const BUFFER_SETS = 5;

export default function ProjectCarousel() {
  const baseX = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  // Get carousel images from centralized data
  const images = getCarouselImages();

  // Safeguard against empty image arrays to prevent infinite loops
  if (images.length === 0) {
    return (
      <div className="carousel-wrapper">
        <div className="carousel-track-motion">
          {/* Empty state: render placeholder or nothing */}
        </div>
      </div>
    );
  }

  /**
   * ITEM_WIDTH: Width of a single carousel item including its right gap.
   * Calculated as: image base width * aspect ratio + gap.
   * Assumption: All items share a consistent 4:3 aspect ratio and 300px base width.
   */
  const ITEM_WIDTH = 300 * (4 / 3) + GAP;

  /**
   * SET_WIDTH: Total width of one complete cycle of unique images.
   * Used as the unit for modulo-like wrapping logic.
   * When baseX position exceeds ±SET_WIDTH, it's wrapped back to [0, -SET_WIDTH).
   */
  const SET_WIDTH = ITEM_WIDTH * images.length;

  /**
   * Auto-scroll animation with seamless infinite loop.
   *
   * Math: delta is time in milliseconds since last frame.
   * Speed: (delta / 1000) * 50 converts delta to seconds, then scales to 50px/second.
   * 50px/second was chosen as a balanced default: fast enough to feel dynamic,
   * slow enough for users to read and engage with individual images.
   *
   * Wrapping strategy: Uses while-loops instead of modulo operator.
   * While-loops are preferred because:
   * - Handle negative modulo correctly (JavaScript's % operator can return negative)
   * - More readable intent: "keep adding SET_WIDTH until in range"
   * - Negligible performance difference for typical image counts (5-20 images)
   */
  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      // Auto-scroll: move left at constant speed
      let newX = baseX.get() - (delta / 1000) * 50;

      /**
       * Seamless wrapping during auto-scroll.
       * Maintains position in range: (-SET_WIDTH, 0]
       *
       * When newX goes below -SET_WIDTH (scrolled past one complete cycle),
       * add SET_WIDTH back to reuse the same image sequence seamlessly.
       * When newX exceeds 0 (shouldn't happen in auto-scroll but for safety),
       * subtract SET_WIDTH to stay in negative range.
       */
      while (newX <= -SET_WIDTH) {
        newX += SET_WIDTH;
      }
      while (newX > 0) {
        newX -= SET_WIDTH;
      }

      baseX.set(newX);
    } else {
      // During drag: maintain infinite wrapping to avoid "hitting a wall" feeling
      let currentX = baseX.get();

      /**
       * Aggressive wrapping during dragging (allows ±2 SET_WIDTH range before wrapping).
       * This gives users more dragging freedom before the carousel "snaps" back.
       * The wider range prevents jarring position resets during rapid drags.
       */
      while (currentX <= -SET_WIDTH * 2) {
        currentX += SET_WIDTH;
      }
      while (currentX > 0) {
        currentX -= SET_WIDTH;
      }

      // Single batched update instead of multiple mid-loop calls.
      // This prevents unnecessary re-render cycles during drag wrapping.
      baseX.set(currentX);
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
        {/**
         * Render BUFFER_SETS repetitions of the image array.
         * This creates a long virtual track that loops seamlessly.
         * Total DOM elements: images.length * BUFFER_SETS (typically 5N nodes).
         *
         * Key structure: `${image.id}-${idx}` ensures uniqueness across repetitions.
         * image.id is unique per image, idx (0-5N) makes each render unique even
         * when the same image appears multiple times.
         */}
        {Array(BUFFER_SETS)
          .fill(null)
          .flatMap(() => images)
          .map((image, idx) => (
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
