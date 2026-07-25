import { readFile } from 'node:fs/promises';
import path from 'node:path';

const imagePath = path.join(
  process.cwd(),
  'public',
  '.4455D1A4-E309-44E9-9843-6D526EE1E677 copy.HEIC.png-fukW'
);

export async function GET() {
  const image = await readFile(imagePath);

  return new Response(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
