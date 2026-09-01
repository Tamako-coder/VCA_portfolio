'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { AnimateNumber } from 'motion-plus-react';

type Stat = {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

const STATS: Stat[] = [
  { from: 0, to: 31, suffix: '+', label: 'Proyek Terselesaikan' },
  { from: 2024, to: 2026, prefix: '2024–', label: 'Periode Pengerjaan' },
  { from: 0, to: 9, suffix: '+', label: 'Klien Dilayani' },
];

export default function SummaryStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (isInView) setRun(true);
  }, [isInView]);

  const settled = run || reduceMotion;

  return (
    <section className="section stats" ref={sectionRef}>
      <div className="container">
        <div className="section-head stats-head">
          <p className="eyebrow">Ringkasan Statistik</p>
          <h2>Rekam jejak pekerjaan kami dalam angka.</h2>
        </div>

        <div className="stats-grid">
          {STATS.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-value">
                {stat.prefix ? <span className="stat-prefix">{stat.prefix}</span> : null}
                <AnimateNumber
                  format={{ useGrouping: false }}
                  suffix={stat.suffix}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', duration: 2.4, bounce: 0 }
                  }
                >
                  {settled ? stat.to : stat.from}
                </AnimateNumber>
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}

          <div className="stat-card">
            <span className="stat-value stat-value-text">Batam</span>
            <span className="stat-label">&amp; Kawasan Industri Sekitarnya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
