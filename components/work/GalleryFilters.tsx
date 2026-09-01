'use client';

import { WORK_TAGS, type WorkTag, getAllUsedTags } from "@/data/work";
import { useMemo } from "react";

type GalleryFiltersProps = {
  activeTag: WorkTag | "all";
  onFilterChange: (tag: WorkTag | "all") => void;
  imageCount: number;
};

export default function GalleryFilters({
  activeTag,
  onFilterChange,
  imageCount,
}: GalleryFiltersProps) {
  const usedTags = useMemo(() => getAllUsedTags(), []);

  return (
    <div className="gallery-filters">
      <div className="gallery-filters-header">
        <h2 className="gallery-filters-title">Filter by Category</h2>
        <p className="gallery-filters-count">
          {imageCount} {imageCount === 1 ? "image" : "images"}
        </p>
      </div>
      <div className="gallery-filters-buttons">
        <button
          className={`filter-btn ${activeTag === "all" ? "active" : ""}`}
          onClick={() => onFilterChange("all")}
          aria-pressed={activeTag === "all"}
        >
          All
        </button>
        {usedTags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? "active" : ""}`}
            onClick={() => onFilterChange(tag)}
            aria-pressed={activeTag === tag}
          >
            {WORK_TAGS[tag].label}
          </button>
        ))}
      </div>
    </div>
  );
}
