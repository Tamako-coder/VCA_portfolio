'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="site-header" id="top">
      <nav className="nav container">
        <Link className="brand" href="/" aria-label="PT. Veritasindo Citra Abadi — Home">
          <Image
            src="/assets/main_logo.png"
            alt="Logo PT. Veritasindo Citra Abadi"
            className="brand-logo"
            width={60}
            height={60}
            priority
          />
          <span className="brand-text">
            <strong>PT. Veritasindo Citra Abadi</strong>
            <small>Contractor &amp; Electrical Supplier</small>
          </span>
        </Link>

        <div className="nav-right">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
            <li><Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
            <li><Link href="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>About Us</Link></li>
            <li><Link href="/our-service" className={`nav-link ${isActive('/our-service') ? 'active' : ''}`}>Our Services</Link></li>
            <li><Link href="/our-projects" className={`nav-link ${isActive('/our-projects') ? 'active' : ''}`}>Projects</Link></li>
            <li><Link href="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link></li>
            <li><Link href="/contact-2" className={`nav-link ${isActive('/contact-2') ? 'active' : ''}`}>Contacts</Link></li>
          </ul>


          <button
            className={`menu-toggle ${isOpen ? 'open' : ''}`}
            id="menuToggle"
            aria-label="Buka menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
