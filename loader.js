'use client';

// export default function myImageLoader({ src, width, quality }) {
//   if (src.startsWith('https://image.pexels.com')) return src;
//   return `https://nextjsportfolio.com/${src}?w=${width}&q=${quality}||75`;
// }

export default function myImageLoader({ src }) {
  return src;
}
