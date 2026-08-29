import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TargetIcon, RocketIcon, ShieldIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Tentang Kami | PT. Veritasindo Citra Abadi",
  description: "Mengenal PT. Veritasindo Citra Abadi — kontraktor elektrikal dan supplier peralatan listrik di Batam. Visi, misi, dan nilai kami: cepat, tanggap, penuh tanggung jawab.",
};

export default function AboutUs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Tentang Kami</p>
          <h1>Menghadirkan produk kelistrikan dan jasa kontraktor berkualitas.</h1>
          <p className="page-hero-sub">
            Mitra terpercaya untuk kebutuhan instalasi dan pengadaan material listrik
            Tegangan Menengah (TM) dan Tegangan Rendah (TR) di Batam.
          </p>
        </div>
      </section>

      <section className="section about">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">Profil Perusahaan</p>
            <h2>Cepat, tanggap, dan penuh tanggung jawab.</h2>
            <p>
              Berdiri sejak tahun 2024, PT. Veritasindo Citra Abadi bergerak di bidang
              perdagangan peralatan listrik, kontraktor, dan supply elektrikal — sebagai
              supplier, grosir, dan distributor switch, lampu, kabel daya, cubicle
              LV &amp; MV, transformator, dan lainnya.
            </p>
            <p>
              Kami hadir untuk memberikan solusi bisnis yang inovatif kepada setiap mitra,
              dengan selalu mengutamakan kualitas dan kepercayaan demi hubungan bisnis
              yang harmonis dan berkelanjutan. Didukung sumber daya yang berkualitas dan
              berpengalaman, kami melayani perusahaan swasta maupun pemerintah dengan
              penuh integritas.
            </p>
            <ul className="check-list">
              <li>Tim profesional dan berpengalaman</li>
              <li>Sumber peralatan yang terpercaya</li>
              <li>Eksekusi proyek yang akuntabel</li>
            </ul>
          </div>
          <div className="about-media">
            <Image
              src="/assets/portfolio_2.webp"
              alt="Pekerjaan elektrikal dan konstruksi"
              width={600}
              height={460}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section vision">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Visi &amp; Misi</p>
            <h2>Arah dan komitmen perusahaan kami.</h2>
          </div>
          <div className="vision-grid">
            <article className="vision-card" data-card="visi">
              <div className="vision-icon" style={{ color: 'var(--gold)' }}>
                <TargetIcon size={30} />
              </div>
              <h3>Visi</h3>
              <p>
                Menjadi perusahaan yang berkembang dan bermanfaat untuk memenuhi
                kebutuhan masyarakat, bangsa, dan negara.
              </p>
            </article>
            <article className="vision-card" data-card="misi">
              <div className="vision-icon" style={{ color: 'var(--gold)' }}>
                <RocketIcon size={30} />
              </div>
              <h3>Misi</h3>
              <p>
                Membangun bisnis dan aset produktif secara terintegrasi guna
                memberikan manfaat &amp; pelayanan yang luas.
              </p>
            </article>
            <article className="vision-card" data-card="nilai">
              <div className="vision-icon" style={{ color: 'var(--gold)' }}>
                <ShieldIcon size={30} />
              </div>
              <h3>Nilai</h3>
              <p>
                Cepat, tanggap, dan penuh tanggung jawab dalam setiap pekerjaan
                yang kami lakukan.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
