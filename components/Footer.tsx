'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('2024');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src="/assets/Transparent_Main_Logo_Black-Color.png"
            alt="PT. Veritasindo Citra Abadi"
            className="footer-logo"
            width={288}
            height={52}
          />
          <p>Kontraktor &amp; supplier elektrikal terpercaya — cepat, tanggap, penuh tanggung jawab.</p>
        </div>

        <div className="footer-links">
          <h4>Artikel</h4>
          <p>
            <Link href="/articles/article_1" style={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
              Mengenal Cubicle LV dan MV: Komponen Penting dalam Sistem Distribusi Tenaga Listrik
            </Link>
          </p>
          <p>
            <Link href="/articles/article_2" style={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
              Pentingnya Memilih Supplier Peralatan Listrik yang Tepat untuk Mendukung Kelancaran Operasional Perusahaan
            </Link>
          </p>
        </div>

        <div className="footer-contact">
          <h4>Hubungi Kami</h4>
          <p>Telp: <a href="tel:07785515083">0778-5515083</a></p>
          <p>WhatsApp: <a href="https://wa.me/628127528236?text=Halo%20saya%20mau%20nanya!" target="_blank" rel="noopener">+62 812-7528-236</a></p>
          <p>WhatsApp: <a href="https://wa.me/628117570898?text=Halo%20saya%20mau%20nanya!" target="_blank" rel="noopener">+62 811-7570-898</a></p>
          <p>Email: <a href="mailto:veritasindo_marketing@yahoo.com">veritasindo_marketing@yahoo.com</a></p>
        </div>

        <div className="footer-social">
          <h4>Ikuti Kami</h4>
          <div className="social-icons">
            <span className="social-icon ig" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.44c-3.14 0-3.51.01-4.75.07-1.02.05-1.57.22-1.94.36-.49.19-.83.42-1.2.78-.36.37-.59.71-.78 1.2-.14.37-.31.92-.36 1.94-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.02.22 1.57.36 1.94.19.49.42.83.78 1.2.37.36.71.59 1.2.78.37.14.92.31 1.94.36 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.83-.42 1.2-.78.36-.37.59-.71.78-1.2.14-.37.31-.92.36-1.94.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.02-.22-1.57-.36-1.94a3.23 3.23 0 0 0-.78-1.2 3.23 3.23 0 0 0-1.2-.78c-.37-.14-.92-.31-1.94-.36-1.24-.06-1.61-.07-4.75-.07zm0 2.45a5.95 5.95 0 1 1 0 11.9 5.95 5.95 0 0 1 0-11.9zm0 9.81a3.86 3.86 0 1 0 0-7.72 3.86 3.86 0 0 0 0 7.72zm7.57-10.05a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0z" />
              </svg>
            </span>
            <a
              href="https://wa.me/628127528236?text=Halo%20saya%20mau%20nanya!"
              target="_blank"
              rel="noopener"
              className="social-icon wa"
              aria-label="WhatsApp"
            >
              <Image
                src="/assets/whatsapp-icon.png"
                alt="WhatsApp"
                width={22}
                height={22}
                style={{ display: 'block' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {year} PT. Veritasindo Citra Abadi. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
