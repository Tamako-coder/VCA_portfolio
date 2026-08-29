'use client';

import Image from 'next/image';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

type Client = {
  name: string;
  logo?: string;
  isText?: boolean;
};

const CLIENTS: Client[] = [
  { name: 'PLN Batam', logo: '/clients/pln-batam.png' },
  { name: 'PT Tata Murdaya Laksana', logo: '/clients/tata-murdaya-laksana.png' },
  { name: 'PT. Sumaraja Indah', logo: '/clients/sumaraja-indah.png' },
  { name: 'PT Appipa Indonesia', logo: '/clients/appipa-transparent.png' },
  { name: 'Precision Pipe Indonesia', logo: '/clients/precision-pipe-indonesia.png' },
  { name: 'PT. Amnor Shipyard', logo: '/clients/amnor-shipyard.png' },
  { name: 'PT. Sentral Sejuk Sejati', isText: true },
  { name: 'Vihara Buddhayana Batam', isText: true },
  { name: 'PT. Fengli Biofuel Energy', isText: true },
];

const COPIES = 3;
const SPEED = 30; // px per second

function ClientItem({ client }: { client: Client }) {
  return (
    <div className="clients-marquee-item">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          className="clients-marquee-logo"
          width={600}
          height={320}
          draggable={false}
          loading="lazy"
          sizes="(max-width: 620px) 160px, 180px"
        />
      ) : (
        <span className="clients-marquee-text">{client.name}</span>
      )}
    </div>
  );
}

export default function ClientCarousel() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);

  // Measure one copy for seamless wrapping
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return;

    const measure = () => {
      const total = track.scrollWidth;
      if (total > 0) setSetWidth(total / COPIES);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const wrap = useCallback(
    (value: number) => {
      if (setWidth <= 0) return value;
      let next = value;
      while (next <= -setWidth) next += setWidth;
      while (next > 0) next -= setWidth;
      return next;
    },
    [setWidth],
  );

  useAnimationFrame((_, delta) => {
    if (reduceMotion || setWidth <= 0) return;
    const step = Math.min(delta, 64) / 1000;
    const movement = -SPEED * step;
    x.set(wrap(x.get() + movement));
  });

  if (reduceMotion) {
    return (
      <div className="clients-marquee-wrapper clients-marquee-static">
        <p className="clients-marquee-label">Dipercaya oleh berbagai perusahaan</p>
        <ul className="clients-marquee-static-track">
          {CLIENTS.map((client) => (
            <li key={client.name}>
              <ClientItem client={client} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="clients-marquee-wrapper">
      <p className="clients-marquee-label">Dipercaya oleh berbagai perusahaan</p>
      <div className="clients-marquee-viewport">
        <motion.div className="clients-marquee-track" ref={trackRef} style={{ x }}>
          {Array.from({ length: COPIES }).map((_, copy) =>
            copy === 0 ? (
              <ul className="clients-marquee-set" key={copy}>
                {CLIENTS.map((client) => (
                  <li key={client.name}>
                    <ClientItem client={client} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="clients-marquee-set" key={copy} aria-hidden="true">
                {CLIENTS.map((client, idx) => (
                  <div key={idx}>
                    <ClientItem client={client} />
                  </div>
                ))}
              </div>
            ),
          )}
        </motion.div>
      </div>
    </div>
  );
}
