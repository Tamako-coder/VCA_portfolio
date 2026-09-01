'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navLinksRef = useRef<HTMLUListElement>(null);
  const pendingNavigation = useRef<string | null>(null);

  const isActive = (path: string) => pathname === path;

  // Manage body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        navLinksRef.current &&
        !navLinksRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('.menu-toggle')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isOpen) return; // Desktop navigation — let Next.js handle it normally

    e.preventDefault();
    pendingNavigation.current = href;
    setIsOpen(false);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Navigate immediately when motion is reduced
      router.push(href);
      pendingNavigation.current = null;
    } else {
      // Wait for closing animation to complete
      const navLinks = navLinksRef.current;
      if (navLinks) {
        const handleTransitionEnd = () => {
          if (pendingNavigation.current) {
            router.push(pendingNavigation.current);
            pendingNavigation.current = null;
          }
          navLinks.removeEventListener('transitionend', handleTransitionEnd);
        };

        navLinks.addEventListener('transitionend', handleTransitionEnd);

        // Fallback timeout in case transitionend doesn't fire
        setTimeout(() => {
          if (pendingNavigation.current) {
            router.push(pendingNavigation.current);
            pendingNavigation.current = null;
          }
        }, 350); // Slightly longer than the CSS transition
      }
    }
  };

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
          <ul
            className={`nav-links ${isOpen ? 'open' : ''}`}
            id="navLinks"
            ref={navLinksRef}
          >
            <li>
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/about-us')}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/our-projects"
                className={`nav-link ${isActive('/our-projects') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/our-projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/gallery')}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact-2"
                className={`nav-link ${isActive('/contact-2') ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '/contact-2')}
              >
                Contacts
              </Link>
            </li>
          </ul>

          <button
            className={`menu-toggle ${isOpen ? 'open' : ''}`}
            id="menuToggle"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
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
