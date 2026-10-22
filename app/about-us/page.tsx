import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getWorkImageById } from "@/data/work";

export const metadata: Metadata = {
  title: "Tentang Kami | PT. Veritasindo Citra Abadi",
  description: "Mengenal PT. Veritasindo Citra Abadi — kontraktor elektrikal dan supplier peralatan listrik di Batam. Visi, misi, dan nilai kami: cepat, tanggap, penuh tanggung jawab.",
};

const STATS = [
  { value: "2024", label: "Mulai berdiri" },
  { value: "TM & TR", label: "Tegangan yang kami tangani" },
  { value: "Swasta & Pemerintah", label: "Klien yang kami layani" },
];

const OFFERINGS = [
  { title: "Cubicle LV & MV", text: "Pengadaan dan instalasi cubicle tegangan rendah dan menengah." },
  { title: "Transformator", text: "Pasokan dan pemasangan transformator untuk kebutuhan industri." },
  { title: "Kabel daya", text: "Penyediaan kabel daya dan pekerjaan penarikan kabel." },
  { title: "Switch", text: "Peralatan switching dan panel distribusi elektrikal." },
  { title: "Lampu", text: "Pasokan perlengkapan penerangan untuk berbagai kebutuhan." },
  { title: "Jasa kontraktor", text: "Pelaksanaan pekerjaan elektrikal oleh tim berpengalaman." },
];

const PRINCIPLES = [
  {
    title: "Visi",
    text: "Menjadi perusahaan yang berkembang dan bermanfaat untuk memenuhi kebutuhan masyarakat, bangsa, dan negara.",
  },
  {
    title: "Misi",
    text: "Membangun bisnis dan aset produktif secara terintegrasi guna memberikan manfaat dan pelayanan yang luas.",
  },
  {
    title: "Nilai",
    text: "Cepat, tanggap, dan penuh tanggung jawab dalam setiap pekerjaan yang kami lakukan.",
  },
];

const BENTO_IDS = ["work-002", "work-001", "work-013", "work-017"];
const BENTO = BENTO_IDS.map((id) => getWorkImageById(id)).filter(
  (img): img is NonNullable<typeof img> => Boolean(img)
);

export default function AboutUs() {
  return (
    <>
      <section className="ab-hero">
        <div className="container">
          <p className="eyebrow">Tentang Kami</p>
          <h1>Listrik yang andal, dikerjakan dengan tanggung jawab.</h1>
          <p className="ab-hero-sub">
            Kontraktor elektrikal dan supplier peralatan listrik di Batam untuk
            kebutuhan Tegangan Menengah dan Tegangan Rendah.
          </p>
          <dl className="ab-stats">
            {STATS.map((s) => (
              <div className="ab-stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ab-section ab-profile">
        <div className="container ab-profile-grid">
          <Reveal>
            <p className="ab-kicker"><span>01</span> Profil Perusahaan</p>
            <h2>Cepat, tanggap, dan penuh tanggung jawab.</h2>
            <p>
              Berdiri sejak 2024, PT. Veritasindo Citra Abadi bergerak di bidang
              perdagangan peralatan listrik, kontraktor, dan supply elektrikal —
              sebagai supplier, grosir, dan distributor.
            </p>
            <p>
              Kami melayani perusahaan swasta maupun pemerintah, dengan kualitas dan
              kepercayaan sebagai dasar hubungan bisnis yang harmonis dan
              berkelanjutan.
            </p>
            <ul className="check-list">
              <li>Tim profesional dan berpengalaman</li>
              <li>Sumber peralatan yang terpercaya</li>
              <li>Eksekusi proyek yang akuntabel</li>
            </ul>
          </Reveal>
          <Reveal className="ab-photo" delay={100}>
            <Image
              src="/assets/portfolio_2.webp"
              alt="Pekerjaan elektrikal dan konstruksi oleh PT. Veritasindo Citra Abadi"
              width={900}
              height={700}
              sizes="(max-width: 900px) 92vw, 560px"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="ab-section ab-offer">
        <div className="container">
          <Reveal>
            <p className="ab-kicker"><span>02</span> Layanan &amp; Pasokan</p>
            <h2>Dari peralatan hingga pemasangan.</h2>
          </Reveal>
          <Reveal className="ab-offer-grid" delay={100}>
            {OFFERINGS.map((o) => (
              <article className="ab-offer-item" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ab-section ab-work">
        <div className="container">
          <Reveal className="ab-work-head">
            <div>
              <p className="ab-kicker"><span>03</span> Jejak Pekerjaan</p>
              <h2>Hasil kerja kami di lapangan.</h2>
            </div>
            <Link className="ab-link" href="/gallery">Lihat galeri &rarr;</Link>
          </Reveal>
          <Reveal className="ab-bento">
            {BENTO.map((img, i) => (
              <figure className={`ab-tile ab-tile-${i + 1}`} key={img.id}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width || 1600}
                  height={img.height || 1200}
                  sizes="(max-width: 720px) 92vw, 40vw"
                  loading="lazy"
                />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ab-section ab-principles">
        <div className="container">
          <Reveal>
            <p className="ab-kicker"><span>04</span> Arah &amp; Komitmen</p>
            <h2>Visi, misi, dan nilai kami.</h2>
          </Reveal>
          <Reveal className="ab-principles-grid" delay={100}>
            {PRINCIPLES.map((p) => (
              <article className="ab-principle" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="ab-cta">
        <div className="container ab-cta-inner">
          <div>
            <h2>Punya proyek kelistrikan?</h2>
            <p>Ceritakan kebutuhan Anda — kami siap membantu.</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn-gold" href="/contact-2">Hubungi Kami</Link>
            <Link className="btn btn-ghost" href="/our-projects">Lihat Proyek</Link>
          </div>
        </div>
      </section>
    </>
  );
}
