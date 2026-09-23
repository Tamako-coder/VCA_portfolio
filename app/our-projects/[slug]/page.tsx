import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectImages,
  getProjectCoverImage,
} from "@/data/work";
import TagBadge from "@/components/work/TagBadge";

type ProjectDetailPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | PT. Veritasindo Citra Abadi",
    };
  }

  return {
    title: `${project.title} | PT. Veritasindo Citra Abadi`,
    description: project.summary || `Detail proyek ${project.title} oleh PT. Veritasindo Citra Abadi.`,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const coverImage = getProjectCoverImage(project);
  const projectImages = getProjectImages(project);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          {project.summary && (
            <p className="page-hero-sub">{project.summary}</p>
          )}
        </div>
      </section>

      <section className="section project-detail">
        <div className="container">
          <div className="project-detail-header">
            <div className="project-detail-meta">
              {project.location && (
                <div className="project-meta-item">
                  <span className="project-meta-label">Lokasi</span>
                  <span className="project-meta-value">{project.location}</span>
                </div>
              )}
              {project.completionDate && (
                <div className="project-meta-item">
                  <span className="project-meta-label">Tahun Selesai</span>
                  <span className="project-meta-value">{project.completionDate}</span>
                </div>
              )}
              <div className="project-meta-item">
                <span className="project-meta-label">Kategori</span>
                <span className="project-meta-value">{project.category}</span>
              </div>
            </div>

            {project.tags.length > 0 && (
              <div className="project-detail-tags">
                {project.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}
          </div>

          {coverImage && (
            <div className="project-detail-cover">
              <Image
                src={coverImage.src}
                alt={coverImage.alt}
                width={coverImage.width || 1200}
                height={coverImage.height || 800}
                sizes="(max-width: 1200px) 92vw, 1180px"
                className="project-detail-cover-img"
                priority
              />
            </div>
          )}

          {project.scope && project.scope.length > 0 && (
            <div className="project-detail-scope">
              <h2>Lingkup Pekerjaan</h2>
              <ul className="project-scope-list">
                {project.scope.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {projectImages.length > 1 && (
            <div className="project-detail-gallery">
              <h2>Dokumentasi Proyek</h2>
              <div className="project-images-grid">
                {projectImages.slice(1).map((image) => (
                  <figure key={image.id} className="project-image-item">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width || 600}
                      height={image.height || 400}
                      sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw"
                      className="project-image-img"
                    />
                    {image.caption && (
                      <figcaption className="project-image-caption">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="project-detail-actions">
            <Link href="/our-projects" className="btn btn-outline">
              ← Kembali ke Proyek
            </Link>
            <Link href="/gallery" className="btn btn-gold">
              Lihat Semua Foto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
