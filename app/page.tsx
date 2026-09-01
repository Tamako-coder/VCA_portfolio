'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ProjectCarousel from '@/components/ProjectCarousel';
import SummaryStats from '@/components/SummaryStats';
import ClientCarousel from '@/components/ClientCarousel';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // On mobile, open directly; on desktop, download
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      e.preventDefault();
      // For mobile, navigate directly to the vCard file without download attribute
      window.location.href = '/contact.vcf';
    }
    // On desktop, let the default download behavior happen
  };

  useEffect(() => {
    const heroVideo = videoRef.current;
    if (!heroVideo) return;

    heroVideo.muted = true;
    const tryPlay = () => {
      const p = heroVideo.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          const resume = () => {
            heroVideo.play().finally(() => {
              document.removeEventListener('click', resume);
              document.removeEventListener('touchstart', resume);
              document.removeEventListener('scroll', resume);
            });
          };
          document.addEventListener('click', resume, { once: true });
          document.addEventListener('touchstart', resume, { once: true });
          document.addEventListener('scroll', resume, { once: true });
        });
      }
    };
    if (heroVideo.readyState >= 2) {
      tryPlay();
    } else {
      heroVideo.addEventListener('loadeddata', tryPlay, { once: true });
    }
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-video">
          <video ref={videoRef} autoPlay muted loop playsInline preload="auto" aria-hidden="true">
            <source src="/assets/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-inner container">
          <p className="eyebrow">Biro Jasa Pekerjaan &amp; Supplier Listrik</p>
          <h1>Solusi kelistrikan yang andal untuk proyek modern.</h1>
          <p className="hero-sub">
            Melayani kebutuhan instalasi dan pengadaan material listrik untuk
            Tegangan Menengah (TM) dan Tegangan Rendah (TR) dengan tenaga
            bersertifikat sesuai keahlian — pengerjaan sesuai standar, aman, dan
            terpercaya.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href="/our-projects">Lihat Proyek Kami</Link>
            <Link className="btn btn-ghost" href="/contact-2">Hubungi Kami</Link>
          </div>

          <div className="hero-stats">
            <div><strong>2024</strong><span>Berdiri Sejak</span></div>
            <div><strong>LV &amp; MV</strong><span>Spesialis Cubicle</span></div>
            <div><strong>24/7</strong><span>Dukungan Klien</span></div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">Tentang Kami</p>
            <h2>Menghadirkan produk kelistrikan dan jasa kontraktor berkualitas.</h2>
            <p>
              Berdiri sejak tahun 2024, PT. Veritasindo Citra Abadi bergerak di bidang
              perdagangan peralatan listrik, kontraktor, dan supply elektrikal — sebagai
              supplier, grosir, dan distributor switch, lampu, kabel daya, cubicle
              LV &amp; MV, transformator, dan lainnya.
            </p>
            <ul className="check-list">
              <li>Tim profesional dan berpengalaman</li>
              <li>Sumber peralatan yang terpercaya</li>
              <li>Eksekusi proyek yang akuntabel</li>
            </ul>
            <p style={{ marginTop: '1.6rem' }}>
              <Link className="btn btn-gold" href="/about-us">Selengkapnya Tentang Kami</Link>
            </p>
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

      <SummaryStats />

      <ClientCarousel />

      <section className="section services">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Layanan Kami</p>
            <h2>Jasa pemasangan trafo, pekerjaan elektrikal, dan pengadaan barang.</h2>
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
                <p>Instalasi transformator, cubicle LV &amp; MV, dan panel distribusi tenaga listrik oleh tim berpengalaman.</p>
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
                <p>Implementasi profesional untuk sistem elektrikal dan infrastruktur.</p>
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
                <p>Penyediaan komponen dan peralatan listrik yang dapat diandalkan.</p>
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
                <p>Dukungan khusus untuk instalasi, pemeliharaan, dan kebutuhan proyek.</p>
              </div>
            </article>
          </div>
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn-gold" href="/our-service">Lihat Semua Layanan</Link>
          </p>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Portofolio</p>
            <h2>Hasil pekerjaan dan dokumentasi proyek kami.</h2>
          </div>
        </div>

        <ProjectCarousel />

        <div className="container">
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link className="btn btn-gold" href="/our-projects">Lihat Semua Proyek</Link>
            <Link className="btn btn-outline" href="/gallery">Buka Galeri</Link>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Kontak</p>
            <h2>Mari diskusikan kebutuhan proyek Anda.</h2>
            <p>
              Tim kami siap membantu. Hubungi kami melalui telepon, email, atau
              WhatsApp untuk konsultasi dan penawaran.
            </p>
            <div className="btn-row">
              <Link className="btn btn-gold" href="/contact-2">Halaman Kontak</Link>
              <a
                className="btn btn-gold"
                href="/contact.vcf"
                download="PT-Veritasindo-Citra-Abadi.vcf"
                onClick={handleVCardClick}
              >
                Simpan ke Kontak
              </a>
            </div>
          </div>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Kantor</span>
              <span>Ruko Nicco Residence Blok A2 No.06, Pasir Putih, Kota Batam</span>
            </li>
            <li>
              <span className="contact-label">Telepon</span>
              <a href="tel:07785515083">0778-5515083</a>
            </li>
            <li>
              <span className="contact-label">WhatsApp</span>
              <a href="https://wa.me/628127528236?text=Halo%20saya%20mau%20nanya!" target="_blank" rel="noopener">+62 812-7528-236</a>
            </li>
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:veritasindo_marketing@yahoo.com">veritasindo_marketing@yahoo.com</a>
            </li>
          </ul>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ElectricalContractor",
          "name": "PT. Veritasindo Citra Abadi",
          "description": "Jasa pemasangan trafo, instalasi cubicle LV & MV, kontraktor elektrikal, dan supplier peralatan listrik di Batam.",
          "url": "https://veritasindocitraabadi.co.id/",
          "logo": "https://veritasindocitraabadi.co.id/assets/logo-new.webp",
          "image": "https://veritasindocitraabadi.co.id/assets/logo-new.webp",
          "telephone": "+62-778-5515083",
          "email": "veritasindo_marketing@yahoo.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ruko Nicco Residence Blok A2 No.06, Pasir Putih",
            "addressLocality": "Batam",
            "addressRegion": "Kepulauan Riau",
            "addressCountry": "ID"
          },
          "areaServed": "Batam",
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jasa Pemasangan Trafo",
                "description": "Instalasi dan pemasangan transformator untuk kebutuhan industri dan komersial."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalasi Cubicle LV & MV",
                "description": "Pemasangan cubicle tegangan rendah dan menengah untuk sistem distribusi listrik."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pengadaan Peralatan Listrik",
                "description": "Supplier switch, lampu, kabel daya, transformator, dan komponen elektrikal."
              }
            }
          ]
        })
      }} />
    </>
  );
}
