'use client';

import Link from 'next/link';
import Image from 'next/image';

// Simple SVG icons matching the project's style
function HomeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="not-found-page">
        {/* Background grid pattern */}
        <div className="not-found-grid" />

        {/* Subtle glow effects */}
        <div className="not-found-glow not-found-glow-1" />
        <div className="not-found-glow not-found-glow-2" />

        <div className="not-found-container">
          {/* Construction Workers Illustration */}
          <div className="not-found-image">
            <Image
              src="/404-workers.png"
              alt="Construction workers repairing electrical systems"
              width={700}
              height={467}
              priority
              className="not-found-illustration"
            />
          </div>

          {/* 404 Number */}
          <div className="not-found-number">404</div>

          {/* Heading */}
          <h1 className="not-found-heading">
            Sepertinya Ada Kabel yang Terputus.
          </h1>

          {/* Description */}
          <p className="not-found-description">
            Halaman yang Anda cari tidak dapat ditemukan atau mungkin telah dipindahkan.
            Mari kembali ke jalur yang benar.
          </p>

          {/* Action Buttons */}
          <div className="not-found-actions">
            <Link href="/" className="not-found-btn not-found-btn-primary">
              <HomeIcon size={20} />
              Kembali ke Beranda
            </Link>

            <Link href="/contact-2" className="not-found-btn not-found-btn-secondary">
              <PhoneIcon size={20} />
              Hubungi Kami
            </Link>
          </div>

          {/* Alternative Navigation */}
          <nav className="not-found-nav" aria-label="Alternative navigation">
            <p className="not-found-nav-label">Halaman Lainnya:</p>
            <div className="not-found-links">
              <Link href="/about-us">Tentang Kami</Link>
              <Link href="/our-projects">Projects</Link>
              <Link href="/gallery">Gallery</Link>
            </div>
          </nav>

          {/* Company tagline */}
          <p className="not-found-tagline">
            PT. Veritasindo Citra Abadi - Kontraktor Listrik Terpercaya di Batam
          </p>
        </div>
      </main>
  );
}
