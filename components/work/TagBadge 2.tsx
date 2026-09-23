import { WORK_TAGS, type WorkTag } from "@/data/work";

type TagBadgeProps = {
  tag: WorkTag;
  className?: string;
};

export default function TagBadge({ tag, className = "" }: TagBadgeProps) {
  const tagInfo = WORK_TAGS[tag];

  return (
    <span className={`tag-badge ${className}`}>
      {tagInfo.label}
    </span>
  );
}
