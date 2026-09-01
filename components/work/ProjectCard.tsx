import Image from "next/image";
import Link from "next/link";
import { type Project, getProjectCoverImage } from "@/data/work";
import TagBadge from "./TagBadge";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = getProjectCoverImage(project);

  if (!coverImage) {
    return null;
  }

  return (
    <Link href={`/our-projects/${project.slug}`} className="project-card">
      <div className="project-card-image">
        <Image
          src={coverImage.src}
          alt={coverImage.alt}
          width={coverImage.width || 600}
          height={coverImage.height || 400}
          sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw"
          className="project-card-img"
        />
      </div>
      <div className="project-card-body">
        <p className="project-card-category">{project.category}</p>
        <h3 className="project-card-title">{project.title}</h3>
        {project.summary && (
          <p className="project-card-summary">{project.summary}</p>
        )}
        {project.location && (
          <p className="project-card-location">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {project.location}
          </p>
        )}
        <div className="project-card-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <span className="project-card-action">
          View Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </Link>
  );
}
