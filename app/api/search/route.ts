import { NextResponse } from 'next/server';
import { curatedProperties } from '../../../lib/data';

export async function POST(request: Request) {
  const { query } = await request.json();

  const normalized = String(query || '').toLowerCase();
  const found = curatedProperties.filter((property) => {
    return [property.name, property.location, property.type, property.highlight]
      .join(' ')
      .toLowerCase()
      .includes(normalized);
  });

  return NextResponse.json({ query, results: found.length ? found : curatedProperties.slice(0, 3) });
}
