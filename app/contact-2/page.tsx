'use client';

import { FormEvent, useState } from "react";

// ============================================
// CONFIGURATION: Set your WhatsApp number here
// ============================================
// Use international format with digits only (no +, spaces, brackets, or hyphens)
// Example: 6281234567890
const YOUR_WHATSAPP_NUMBER = "628127528236";
// ============================================

const MAX_MESSAGE_LENGTH = 1000;
const MAX_TOTAL_MESSAGE_LENGTH = 1500;

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [messageLength, setMessageLength] = useState(0);
  const [messageValue, setMessageValue] = useState('');

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

    console.log('WhatsApp URL:', waUrl);
    console.log('Message:', waMessage);

    // Navigate to WhatsApp in same tab (no popup blocker)
    window.location.assign(waUrl);
  };

  return (
    <>
      <style jsx>{`
        /* Modern contact page styling */
        .contact-modern {
          background: linear-gradient(180deg, #f6f2e9 0%, #e8f4f8 50%, #ffffff 100%);
          padding: 0;
        }

        .contact-hero {
          background: linear-gradient(135deg, #0e355a 0%, #12456f 100%);
          color: #FFFFFF;
          padding: 5rem 0 3rem;
          text-align: center;
        }

        .eyebrow-pill {
          display: inline-block;
          background: rgba(224, 165, 22, 0.15);
          color: #ffc850;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          font-family: 'Archivo', sans-serif;
        }

        .contact-hero h1 {
          font-family: 'Archivo', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          color: #FFFFFF;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-hero h1 em {
          color: #ffc850;
          font-style: italic;
        }

        .contact-hero p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 400;
          max-width: 580px;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
        }

        .contact-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 4vw;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .contact-form-section {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 2px 12px rgba(14, 53, 90, 0.08);
          border: 1px solid rgba(14, 53, 90, 0.12);
        }

        .contact-form-section h2 {
          font-family: 'Archivo', sans-serif;
          font-size: 1.75rem;
          color: #0e355a;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .contact-form-section p {
          color: #4c5762;
          font-size: 0.95rem;
          font-weight: 400;
          margin-bottom: 2rem;
          font-family: 'Inter', sans-serif;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0e355a;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Archivo', sans-serif;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.85rem 1.1rem;
          border: 1.5px solid rgba(14, 53, 90, 0.12);
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #1c2b38;
          background: #f6f2e9;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #e0a516;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(224, 165, 22, 0.1);
        }

        .form-group textarea {
          min-height: 130px;
          resize: vertical;
        }

        .btn-submit {
          width: 100%;
          background: linear-gradient(135deg, #ffc850, #e0a516);
          color: #0e355a;
          border: none;
          padding: 1rem 2rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Archivo', sans-serif;
        }

        .btn-submit:hover {
          background: linear-gradient(135deg, #e0a516, #d09314);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(224, 165, 22, 0.35);
        }

        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 2px 12px rgba(14, 53, 90, 0.08);
          border: 1px solid rgba(14, 53, 90, 0.12);
          transition: all 0.2s ease;
        }

        .info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(14, 53, 90, 0.15);
        }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          background: rgba(224, 165, 22, 0.12);
          color: #e0a516;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-size: 1.3rem;
        }

        .info-card h3 {
          font-family: 'Archivo', sans-serif;
          font-size: 1.15rem;
          color: #0e355a;
          font-weight: 600;
          margin: 0;
        }

        .info-card-content {
          color: #4c5762;
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.7;
          font-family: 'Inter', sans-serif;
        }

        .info-card-content a {
          color: #0e355a;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .info-card-content a:hover {
          color: #e0a516;
          text-decoration: underline;
        }

        .info-card-content p {
          margin: 0.4rem 0;
        }

        .quick-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .quick-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem 1.5rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          font-family: 'Archivo', sans-serif;
        }

        .quick-btn-wa {
          background: #25D366;
          color: #FFFFFF;
        }

        .quick-btn-wa:hover {
          background: #1FAF52;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
        }

        .quick-btn-phone {
          background: #f6f2e9;
          color: #0e355a;
          border: 1.5px solid rgba(14, 53, 90, 0.12);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .quick-btn-phone:hover {
          background: #0e355a;
          color: #FFFFFF;
          border-color: #0e355a;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 24px rgba(14, 53, 90, 0.25);
        }

        .quick-btn-phone:active {
          transform: translateY(-1px) scale(1.02);
        }

        .map-section {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 2px 12px rgba(14, 53, 90, 0.08);
          border: 1px solid rgba(14, 53, 90, 0.12);
        }

        .map-section h2 {
          font-family: 'Archivo', sans-serif;
          font-size: 1.75rem;
          color: #0e355a;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .map-container {
          width: 100%;
          height: 450px;
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid rgba(14, 53, 90, 0.12);
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 960px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .quick-actions {
            grid-template-columns: 1fr;
          }

          .contact-content {
            padding: 3rem 4vw;
          }
        }
      `}</style>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow-pill">Hubungi Kami</span>
          <h1>Mari diskusikan <em>kebutuhan</em> proyek Anda</h1>
          <p>
            Tim kami siap membantu dengan solusi elektrikal terbaik untuk proyek Anda.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-modern">
        <div className="contact-content">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Kirim Pesan</h2>
              <p>Isi formulir di bawah dan kami akan segera menghubungi Anda kembali.</p>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Masukkan nama Anda"
                    autoComplete="name"
                  />
                  {errors.name && <span style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="nama@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <span style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+62 812 3456 7890"
                    inputMode="numeric"
                    autoComplete="tel"
                    onInput={handlePhoneInput}
                  />
                  {errors.phone && <span style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Perihal</label>
                  <select id="subject" name="subject">
                    <option value="">Pilih perihal</option>
                    <option value="Instalasi Elektrikal">Instalasi Elektrikal</option>
                    <option value="Pengadaan Material">Pengadaan Material</option>
                    <option value="Maintenance & Perbaikan">Maintenance &amp; Perbaikan</option>
                    <option value="Konsultasi">Konsultasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  {errors.subject && <span style={{ color: '#d32f2f', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan kebutuhan proyek Anda..."
                    value={messageValue}
                    onChange={handleMessageChange}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
                    <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.message || ''}</span>
                    <span style={{ color: '#4c5762', fontSize: '0.85rem' }}>{messageLength}/{MAX_MESSAGE_LENGTH}</span>
                  </div>
                </div>
                <button type="submit" className="btn-submit">Kirim Pesan</button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">📍</div>
                  <h3>Alamat Kantor</h3>
                </div>
                <div className="info-card-content">
                  <p>Ruko Nicco Residence Blok A2 No.06</p>
                  <p>Pasir Putih, Kota Batam</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">📞</div>
                  <h3>Telepon & WhatsApp</h3>
                </div>
                <div className="info-card-content">
                  <p><strong>Kantor:</strong> <a href="tel:07785515083">0778-5515083</a></p>
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/628127528236" target="_blank" rel="noopener">+62 812-7528-236</a></p>
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/628117570898" target="_blank" rel="noopener">+62 811-7570-898</a></p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">✉️</div>
                  <h3>Email</h3>
                </div>
                <div className="info-card-content">
                  <p><a href="mailto:veritasindo_marketing@yahoo.com">veritasindo_marketing@yahoo.com</a></p>
                </div>
              </div>

              <div className="quick-actions">
                <a
                  href="https://wa.me/628127528236?text=Halo%20saya%20mau%20nanya!"
                  target="_blank"
                  rel="noopener"
                  className="quick-btn quick-btn-wa"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.5.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17 0-.36-.02-.55-.02s-.5.07-.76.36c-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.01 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.12-.26-.19-.56-.34zM12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34A9.93 9.93 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2z" />
                  </svg>
                  Chat WhatsApp
                </a>
                <a
                  href="/contact.vcf"
                  download="PT-Veritasindo-Citra-Abadi.vcf"
                  onClick={handleVCardClick}
                  className="quick-btn quick-btn-phone"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
                  </svg>
                  Simpan Kontak
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>Lokasi Kantor</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0615762891!2d104.03716731475393!3d1.1411111990704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDgnMjguMCJOIDEwNMKwMDInMjEuOCJF!5e0!3m2!1sen!2sid!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT. Veritasindo Citra Abadi">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
