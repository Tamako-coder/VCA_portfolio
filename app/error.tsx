'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error boundary caught:', error);
    }
  }, [error]);

  return (
    <div className="not-found-page">
      <div className="not-found-grid"></div>
      <div className="not-found-glow not-found-glow-1"></div>
      <div className="not-found-glow not-found-glow-2"></div>

      <div className="not-found-container">
        <h1 className="not-found-heading">Terjadi Kesalahan</h1>
        <p className="not-found-description">
          Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang memperbaikinya.
        </p>

        <div className="not-found-actions">
          <button
            onClick={reset}
            className="not-found-btn not-found-btn-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            Coba Lagi
          </button>
          <Link href="/" className="not-found-btn not-found-btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            textAlign: 'left'
          }}>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
              Development Error Details:
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', fontFamily: 'monospace' }}>
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
