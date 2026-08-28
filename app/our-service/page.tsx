import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layanan Kami | PT. Veritasindo Citra Abadi",
  description: "Layanan PT. Veritasindo Citra Abadi: jasa pemasangan trafo, instalasi cubicle LV & MV, kontraktor elektrikal, pengadaan barang, dan pekerjaan jasa di Batam.",
};

export default function OurService() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Layanan Kami</p>
          <h1>Jasa pemasangan trafo, pekerjaan elektrikal, dan pengadaan barang.</h1>
          <p className="page-hero-sub">
            Solusi menyeluruh untuk instalasi Tegangan Menengah (TM) dan Tegangan
            Rendah (TR) — dikerjakan tenaga bersertifikat sesuai standar.
          </p>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Ruang Lingkup</p>
            <h2>Apa yang kami kerjakan.</h2>
          </div>
          <div className="cards">
            <article className="card">
              <div className="card-media">
                <Image
                  src="/gallery/Proses-pemasangan-trafo-baru-Foto-Humas-1024x768.webp"
                  alt="Jasa pemasangan trafo dan cubicle LV MV"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h3>Jasa Pemasangan Trafo</h3>
                <p>
                  Instalasi transformator, cubicle LV &amp; MV, dan panel distribusi tenaga
                  listrik oleh tim berpengalaman sesuai standar keselamatan.
                </p>
              </div>
            </article>

            <article className="card">
              <div className="card-media">
                <Image
                  src="/assets/portfolio_1.webp"
                  alt="Jasa kontraktor elektrikal"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h3>Kontraktor</h3>
                <p>
                  Implementasi profesional untuk sistem elektrikal dan infrastruktur —
                  dikerjakan tenaga bersertifikat.
                </p>
              </div>
            </article>

            <article className="card">
              <div className="card-media">
                <Image
                  src="/our-projects/project_3.webp"
                  alt="Pengadaan barang"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h3>Pengadaan Barang</h3>
                <p>
                  Penyediaan komponen dan peralatan listrik berkualitas: switch, lampu,
                  kabel daya, cubicle, transformator.
                </p>
              </div>
            </article>

            <article className="card">
              <div className="card-media">
                <Image
                  src="/our-projects/project_5.webp"
                  alt="Pekerjaan jasa"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="card-body">
                <h3>Pekerjaan Jasa</h3>
                <p>
                  Dukungan khusus untuk instalasi, pemeliharaan, dan kebutuhan proyek
                  elektrikal lainnya.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section vision">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Keunggulan</p>
            <h2>Mengapa memilih kami?</h2>
          </div>
          <div className="vision-grid">
            <article className="vision-card">
              <div className="vision-icon">⚡</div>
              <h3>Cepat</h3>
              <p>
                Respon cepat dalam setiap kebutuhan dan permintaan pelanggan dengan
                mobilisasi tim yang efisien.
              </p>
            </article>
            <article className="vision-card">
              <div className="vision-icon">🎯</div>
              <h3>Tanggap</h3>
              <p>
                Siap memberikan solusi yang tepat untuk setiap tantangan proyek
                dengan pengalaman dan keahlian.
              </p>
            </article>
            <article className="vision-card">
              <div className="vision-icon">🤝</div>
              <h3>Penuh Tanggung Jawab</h3>
              <p>
                Menyelesaikan pekerjaan dengan komitmen penuh dan profesionalisme
                sesuai standar keselamatan.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
