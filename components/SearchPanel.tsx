'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchStore } from '../store/useSearchStore';

const prompts = [
  'Luxury beachfront house with pool',
  '3-bedroom condo near IT Park under 8M',
  'Investment grade villa with high rental yield',
  'Penthouse with ocean view and private elevator'
];

export function SearchPanel() {
  const { query, setQuery } = useSearchStore();
  const [activeSuggestion, setActiveSuggestion] = useState<string>('');

  return (
    <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold/80">Search the portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold text-sand">Natural language property discovery.</h2>
        </div>
        <button className="rounded-3xl bg-gold px-5 py-3 text-sm font-semibold text-ebony transition hover:bg-[#c38a3e]/95">
          AI search studio
        </button>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <motion.div whileHover={{ y: -3 }} className="rounded-[32px] border border-white/10 bg-slate/20 p-6">
          <label className="text-sm font-semibold text-sand/75">Search by intent</label>
          <div className="mt-4 flex items-center gap-3 rounded-3xl border border-white/10 bg-ebony/60 px-4 py-3 shadow-inner">
            <span className="text-lg text-gold">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Example: Luxury beachfront house with pool"
              className="w-full bg-transparent text-sand outline-none placeholder:text-sand/50"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => {
                  setQuery(prompt);
                  setActiveSuggestion(prompt);
                }}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeSuggestion === prompt ? 'border-gold bg-gold/15 text-gold' : 'border-white/10 text-sand/70 hover:border-gold hover:text-gold'
                }`}
              >
                {prompt}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="rounded-[32px] border border-white/10 bg-[#071623]/80 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-gold/80">AI preview</p>
          <h3 className="mt-4 text-2xl font-semibold text-sand">Personalized recommendations</h3>
          <p className="mt-4 text-sm leading-7 text-sand/70">
            AMPO uses your search intent to surface smart estate matches, comparable market performance, and income potential instantly.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl bg-slate/10 p-5">
              <p className="text-sm text-sand/65">Lifestyle match</p>
              <p className="mt-2 text-lg font-semibold text-sand">Modern coastal living</p>
            </div>
            <div className="rounded-3xl bg-slate/10 p-5">
              <p className="text-sm text-sand/65">Investment insight</p>
              <p className="mt-2 text-lg font-semibold text-gold">High rental demand zone</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
