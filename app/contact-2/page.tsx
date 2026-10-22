'use client';

import { FormEvent, useState, useMemo } from "react";
import { createVCardHandler } from '@/lib/vcard';

// ============================================
// CONFIGURATION: Set your WhatsApp number here
// ============================================
// Use international format with digits only (no +, spaces, brackets, or hyphens)
// Example: 6281234567890
const YOUR_WHATSAPP_NUMBER = "628127528236";
// ============================================

const ADDRESS = "Ruko Nicco Residence Blok A2 No.06, Pasir Putih, Kota Batam";
// Company is not listed on Google Maps yet, so the pin uses exact coordinates.
const MAP_COORDS = "1.141088,104.039408";

const MAX_MESSAGE_LENGTH = 1000;
const MAX_TOTAL_MESSAGE_LENGTH = 1500;

const strokeProps = {
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PinIcon = () => (
  <svg {...strokeProps}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...strokeProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const MailIcon = () => (
  <svg {...strokeProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.5.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17 0-.36-.02-.55-.02s-.5.07-.76.36c-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.01 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.26-.19-.56-.34zM12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34A9.93 9.93 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
  </svg>
);

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [messageLength, setMessageLength] = useState(0);
  const [messageValue, setMessageValue] = useState('');
  const [showMap, setShowMap] = useState(false);
  const handleVCardClick = useMemo(() => createVCardHandler(), []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove all formatting characters and check if we have at least 10 digits
    const digitsOnly = phone.replace(/[^0-9]/g, '');
    return digitsOnly.length >= 10;
  };

  const sanitizeText = (text: string): string => {
    // Remove control characters except newlines and tabs
    return text.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= MAX_MESSAGE_LENGTH) {
      setMessageValue(text);
      setMessageLength(text.length);
    }
  };

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    // Allow digits, +, -, and spaces for user-friendly input
    const input = e.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9+\-\s]/g, '');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});
    const newErrors: Record<string, string> = {};

    // Get and trim form values
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const phone = (formData.get('phone') as string || '').trim();
    const subject = (formData.get('subject') as string || '').trim();
    const message = (formData.get('message') as string || '').trim();

    // Validate all fields are filled
    if (!name) newErrors.name = 'Nama lengkap harus diisi';
    if (!email) newErrors.email = 'Email harus diisi';
    if (!phone) newErrors.phone = 'Nomor telepon harus diisi';
    if (!subject) newErrors.subject = 'Perihal harus dipilih';
    if (!message) newErrors.message = 'Pesan harus diisi';

    // Validate email format
    if (email && !validateEmail(email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // Validate phone format
    if (phone && !validatePhone(phone)) {
      newErrors.phone = 'Nomor telepon harus minimal 10 digit';
    }

    // Check if any errors exist
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Sanitize all text inputs
    const sanitizedName = sanitizeText(name);
    const sanitizedEmail = sanitizeText(email);
    const sanitizedPhone = sanitizeText(phone);
    const sanitizedSubject = sanitizeText(subject);
    const sanitizedMessage = sanitizeText(message);

    // Create WhatsApp message with exact formatting
    const waMessage = `*Pesan Baru dari Website*

*Nama Lengkap:* ${sanitizedName}
*Email:* ${sanitizedEmail}
*Nomor Telepon:* ${sanitizedPhone}
*Perihal:* ${sanitizedSubject}

*Pesan:*
${sanitizedMessage}`;

    // Check total message length
    if (waMessage.length > MAX_TOTAL_MESSAGE_LENGTH) {
      setErrors({
        message: `Pesan terlalu panjang. Total karakter: ${waMessage.length}. Maksimal: ${MAX_TOTAL_MESSAGE_LENGTH}`
      });
      return;
    }

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab (better UX, avoids navigation issues)
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="ct-hero">
        <div className="container">
          <p className="eyebrow">Hubungi Kami</p>
          <h1>Mari diskusikan kebutuhan proyek Anda.</h1>
          <p className="ct-hero-sub">
            Tim kami siap membantu dengan solusi elektrikal terbaik untuk proyek Anda.
          </p>
          <ul className="ct-strip">
            <li>
              <span className="ct-strip-label">Telepon Kantor</span>
              <a href="tel:07785515083">0778-5515083</a>
            </li>
            <li>
              <span className="ct-strip-label">WhatsApp</span>
              <a href="https://wa.me/628127528236" target="_blank" rel="noopener">+62 812-7528-236</a>
            </li>
            <li>
              <span className="ct-strip-label">Email</span>
              <a href="mailto:veritasindo_marketing@yahoo.com">veritasindo_marketing@yahoo.com</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="ct-main">
        <div className="container ct-grid">
          <aside className="ct-info" aria-label="Informasi kontak">
            <h2>Informasi Kontak</h2>
            <ul className="ct-info-list">
              <li>
                <span className="ct-icon"><PinIcon /></span>
                <div>
                  <h3>Alamat Kantor</h3>
                  <p>Ruko Nicco Residence Blok A2 No.06<br />Pasir Putih, Kota Batam</p>
                </div>
              </li>
              <li>
                <span className="ct-icon"><PhoneIcon /></span>
                <div>
                  <h3>Telepon &amp; WhatsApp</h3>
                  <p>
                    Kantor: <a href="tel:07785515083">0778-5515083</a><br />
                    WhatsApp: <a href="https://wa.me/628127528236" target="_blank" rel="noopener">+62 812-7528-236</a><br />
                    WhatsApp: <a href="https://wa.me/628117570898" target="_blank" rel="noopener">+62 811-7570-898</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="ct-icon"><MailIcon /></span>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:veritasindo_marketing@yahoo.com">veritasindo_marketing@yahoo.com</a></p>
                </div>
              </li>
            </ul>
            <div className="ct-actions">
              <a
                href="https://wa.me/628127528236?text=Halo%20saya%20mau%20nanya!"
                target="_blank"
                rel="noopener"
                className="btn btn-gold"
              >
                <WhatsAppIcon />
                Chat WhatsApp
              </a>
              <a
                href="/contact.vcf"
                download="PT-Veritasindo-Citra-Abadi.vcf"
                onClick={handleVCardClick}
                className="btn btn-ghost"
              >
                <DownloadIcon />
                Simpan Kontak
              </a>
            </div>
          </aside>

          <div className="ct-form">
            <h2>Kirim Pesan</h2>
            <p className="ct-form-intro">Isi formulir di bawah dan kami akan segera menghubungi Anda kembali.</p>
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Masukkan nama Anda"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span id="name-error" className="field-error" role="alert">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nama@email.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span id="email-error" className="field-error" role="alert">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+62 812 3456 7890"
                  inputMode="tel"
                  autoComplete="tel"
                  onInput={handlePhoneInput}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && <span id="phone-error" className="field-error" role="alert">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Perihal</label>
                <select
                  id="subject"
                  name="subject"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                >
                  <option value="">Pilih perihal</option>
                  <option value="Instalasi Elektrikal">Instalasi Elektrikal</option>
                  <option value="Pengadaan Material">Pengadaan Material</option>
                  <option value="Maintenance & Perbaikan">Maintenance &amp; Perbaikan</option>
                  <option value="Konsultasi">Konsultasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                {errors.subject && <span id="subject-error" className="field-error" role="alert">{errors.subject}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                  value={messageValue}
                  onChange={handleMessageChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <div className="field-meta">
                  <span id="message-error" className="field-error" role="alert">{errors.message || ''}</span>
                  <span className="field-count">{messageLength}/{MAX_MESSAGE_LENGTH}</span>
                </div>
              </div>
              <button type="submit" className="btn-submit">Kirim via WhatsApp</button>
              <p className="form-note">Pesan Anda akan dibuka di WhatsApp untuk dikirim ke tim kami.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="ct-map">
        <div className="container">
          <div className="ct-map-head">
            <div>
              <h2>Lokasi Kantor</h2>
              <p>{ADDRESS}</p>
            </div>
            <a
              className="ab-link"
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_COORDS}`}
              target="_blank"
              rel="noopener"
            >
              Buka di Google Maps &rarr;
            </a>
          </div>
          <div className="ct-map-frame">
            {showMap ? (
              <iframe
                src={`https://www.google.com/maps?q=${MAP_COORDS}&z=18&output=embed`}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT. Veritasindo Citra Abadi"
              />
            ) : (
              <div className="ct-map-placeholder">
                <span className="ct-icon"><PinIcon /></span>
                <p>Peta interaktif dimuat hanya saat diperlukan agar halaman tetap cepat.</p>
                <button type="button" className="btn btn-gold" onClick={() => setShowMap(true)}>
                  Tampilkan Peta
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
