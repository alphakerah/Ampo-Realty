'use client';

import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    location: string;
    price: string;
    type: string;
    area: string;
    score: string;
    highlight: string;
    image: string;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[32px] bg-ebony/70">
      <div className="relative overflow-hidden">
        <img src={property.image} alt={property.name} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ebony/95 to-transparent px-6 py-5">
          <p className="text-xs uppercase tracking-[0.32em] text-sand/70">{property.type}</p>
          <h3 className="mt-2 text-2xl font-semibold text-sand">{property.name}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sand/70">{property.location}</span>
          <span className="rounded-3xl bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">{property.score}</span>
        </div>
        <p className="mt-4 text-3xl font-semibold text-sand">{property.price}</p>
        <p className="mt-4 text-sm leading-7 text-sand/70">{property.highlight}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <div className="rounded-3xl bg-slate/10 px-4 py-3 text-sm text-sand/80">{property.area}</div>
          <button className="rounded-3xl bg-white/10 px-5 py-3 text-sm font-semibold text-sand transition hover:bg-white/15">View details</button>
        </div>
      </div>
    </div>
  );
}
