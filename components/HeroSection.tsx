'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top,_rgba(213,156,75,0.24),_transparent_28%),linear-gradient(180deg,_rgba(5,8,18,0.9),_rgba(5,8,18,0.98))]" />
      <div className="absolute right-0 top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(90deg,rgba(5,8,18,0.95),rgba(5,8,18,0.6),rgba(5,8,18,0.95))]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold shadow-glow">
              Luxury real estate ecosystem
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-sand sm:text-6xl lg:text-7xl text-shadow">
              Discover elite estates, immersive experiences, and AI-powered investment intelligence.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-sand/75 sm:text-lg">
              AMPO Realty reimagines luxury property discovery with cinematic storytelling, intelligent search, and enterprise-grade agent tools for modern buyers, investors, and developers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="inline-flex items-center justify-center rounded-3xl bg-gold px-8 py-4 text-sm font-semibold text-ebony shadow-luxe transition hover:-translate-y-1 hover:shadow-glow">
                Explore curated collections
              </button>
              <button className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-sand transition hover:border-gold/40 hover:bg-white/10">
                Schedule a private tour
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="hidden min-h-[420px] w-full max-w-xl rounded-[44px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl lg:block"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold/80">Featured residence</p>
                <h2 className="mt-3 text-3xl font-semibold text-sand">Seaside penthouse with private spa terrace</h2>
              </div>
              <span className="rounded-3xl bg-slate/10 px-4 py-2 text-sm text-sand/80">Philippines</span>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="h-64 overflow-hidden rounded-[32px] bg-slate/10">
                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" alt="Luxury property" className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate/10 p-5">
                  <p className="text-sm text-sand/70">Purchase range</p>
                  <p className="mt-3 text-xl font-semibold text-sand">₱42.8M</p>
                </div>
                <div className="rounded-3xl bg-slate/10 p-5">
                  <p className="text-sm text-sand/70">ROI score</p>
                  <p className="mt-3 text-xl font-semibold text-gold">9.8 / 10</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
