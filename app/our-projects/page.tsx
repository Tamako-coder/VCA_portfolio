import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyek Kami | PT. Veritasindo Citra Abadi",
  description: "Portofolio dan dokumentasi proyek PT. Veritasindo Citra Abadi — jasa pemasangan trafo, instalasi cubicle LV & MV, dan pekerjaan elektrikal di Batam.",
};

const projects = [
  { id: 1, name: "project_1.webp", alt: "Instalasi panel elektrikal" },
  { id: 2, name: "project_2.webp", alt: "Pemasangan sistem kelistrikan" },
  { id: 3, name: "project_3.webp", alt: "Instalasi cubicle LV MV" },
  { id: 4, name: "project_4.webp", alt: "Pekerjaan elektrikal" },
  { id: 5, name: "project_5.webp", alt: "Pemasangan trafo" },
  { id: 6, name: "project_6.webp", alt: "Instalasi panel distribusi" },
];

export default function OurProjects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Portofolio</p>
          <h1>Hasil pekerjaan dan dokumentasi proyek kami.</h1>
          <p className="page-hero-sub">
            Dokumentasi instalasi trafo, cubicle LV &amp; MV, serta pekerjaan
            elektrikal yang telah kami tangani untuk mitra swasta dan pemerintah.
          </p>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Dokumentasi</p>
            <h2>Beberapa proyek yang telah kami kerjakan.</h2>
          </div>
          <div className="gallery">
            {projects.map((project) => (
              <figure className="gallery-item" key={project.id}>
                <Image
                  src={`/our-projects/${project.name}`}
                  alt={project.alt}
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
