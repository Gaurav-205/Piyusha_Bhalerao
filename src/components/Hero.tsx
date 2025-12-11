'use client';

import { memo } from 'react';
import InfiniteGallery from './ui/3d-gallery-photography';
import { SAMPLE_IMAGES, GALLERY_CONFIG, Z_INDEX } from '@/lib/constants';

const Hero = memo(() => {
  return (
    <main className="min-h-screen h-full w-full">
      <InfiniteGallery
        images={SAMPLE_IMAGES}
        speed={GALLERY_CONFIG.SPEED}
        zSpacing={GALLERY_CONFIG.Z_SPACING}
        visibleCount={GALLERY_CONFIG.VISIBLE_COUNT}
        falloff={GALLERY_CONFIG.FALLOFF}
        fadeSettings={GALLERY_CONFIG.FADE_SETTINGS}
        blurSettings={GALLERY_CONFIG.BLUR_SETTINGS}
        className="h-screen w-full rounded-lg overflow-hidden"
      />
      
      {/* Main title overlay - perfectly centered */}
      <div 
        className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center mix-blend-exclusion text-white"
        style={{ zIndex: Z_INDEX.GALLERY_OVERLAY }}
      >
        <h1 className="font-serif text-4xl md:text-7xl tracking-tight text-center">
          <span className="italic">Piyusha Bhalerao</span>
        </h1>
      </div>
      
      {/* Navigation instructions */}
      <div 
        className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold text-white px-4"
        style={{ zIndex: Z_INDEX.GALLERY_OVERLAY }}
      >
        <p className="hidden md:block">Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="block md:hidden">Swipe or pinch to zoom in/out to navigate</p>
        <p className="opacity-60">Auto-play resumes after 3 seconds of inactivity</p>
      </div>
    </main>
  );
});

Hero.displayName = 'Hero';

export default Hero;