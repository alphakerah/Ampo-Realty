import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { query } = await request.json();

  const score = query ? Math.min(10, 6 + query.length / 24).toFixed(1) : '8.0';
  const category = query?.includes('beach') ? 'Coastal Luxury' : query?.includes('condo') ? 'Urban Premiere' : 'Signature Estate';

  return NextResponse.json({
    query: query || '',
    recommendation: {
      category,
      score,
      narrative: `AI intelligence has matched your search to a ${category} path with strong lifestyle appeal and premium investment potential.`
    }
  });
}
