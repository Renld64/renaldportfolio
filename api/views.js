const BADGE_URL = 'https://hits.sh/renaldportfolio.vercel.app.svg?label=Total%20views&extraCount=1680&color=c2a4ff&labelColor=17111f&style=flat-square';

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).end();
  }
  try {
    const upstream = await fetch(BADGE_URL, { signal: AbortSignal.timeout(8000) });
    if (!upstream.ok) throw new Error('Counter unavailable');
    const svg = await upstream.text();
    if (!svg.trimStart().startsWith('<svg')) throw new Error('Invalid counter response');
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    // Each badge request must reach the counter rather than a shared CDN cache.
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(req.method === 'HEAD' ? '' : svg);
  } catch {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).end();
  }
}
