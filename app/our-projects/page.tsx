import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/data/work";
import ProjectCard from "@/components/work/ProjectCard";

export const metadata: Metadata = {
  title: "Proyek Kami | PT. Veritasindo Citra Abadi",
  description: "Portofolio dan dokumentasi proyek PT. Veritasindo Citra Abadi — jasa pemasangan trafo, instalasi cubicle LV & MV, dan pekerjaan elektrikal di Batam.",
};

export default function OurProjects() {
  const projects = getAllProjects();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Portofolio</p>
          <h1>Proyek-proyek yang telah kami selesaikan.</h1>
          <p className="page-hero-sub">
            Dokumentasi lengkap instalasi trafo, cubicle LV &amp; MV, serta pekerjaan
            elektrikal yang telah kami tangani untuk mitra swasta dan pemerintah.
          </p>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Dokumentasi</p>
            <h2>Studi kasus dan hasil pekerjaan kami.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="projects-cta">
            <Link href="/gallery" className="btn btn-outline">
              Lihat Semua Foto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
