import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Star } from 'lucide-react';
import { ALUMNI_STORIES } from '../data/koreaData';
import { useLanguage } from '../context/LanguageContext';

interface HomeTestimonialSliderProps {
  onViewAll?: () => void;
}

const RATING_POOL = [4.5, 4.6, 4.7, 4.8, 4.9, 5.0];

const getStarFillWidthClass = (rating: number, index: number): string => {
  const diff = Math.round((rating - index) * 10) / 10;
  if (diff >= 1) return 'w-full';
  if (diff >= 0.9) return 'w-[90%]';
  if (diff >= 0.8) return 'w-[80%]';
  if (diff >= 0.7) return 'w-[70%]';
  if (diff >= 0.6) return 'w-[60%]';
  if (diff >= 0.5) return 'w-1/2';
  return 'w-0';
};

export const HomeTestimonialSlider: React.FC<HomeTestimonialSliderProps> = () => {
  const { language } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const storyRatings = useMemo(() => {
    const pool = [...RATING_POOL];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return ALUMNI_STORIES.map((_, index) => pool[index % pool.length]);
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, ALUMNI_STORIES.length - visibleCards);

  const scrollToSlide = useCallback((targetIndex: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(targetIndex, maxIndex));
    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const gap = 20; // gap-5 = 20px
    const stepWidth = firstCard.offsetWidth + gap;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    track.scrollTo({
      left: clamped * stepWidth,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    setCurrentIndex(clamped);
  }, [maxIndex]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isPaused || prefersReducedMotion || maxIndex === 0) return;

    const timer = window.setInterval(() => {
      const nextIdx = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      scrollToSlide(nextIdx);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused, currentIndex, maxIndex, scrollToSlide]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    const stepWidth = firstCard.offsetWidth + 20;
    if (stepWidth > 0) {
      const idx = Math.round(track.scrollLeft / stepWidth);
      setCurrentIndex(Math.max(0, Math.min(idx, maxIndex)));
    }
  };

  return (
    <section
      aria-label={language === 'en' ? 'Alumni Testimonials' : 'Testimoni Alumni'}
      className="py-12 lg:py-16 border-t border-slate-200/70 bg-white/70 backdrop-blur-[2px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll-Snap Carousel Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {ALUMNI_STORIES.map((story, index) => {
            const rating = storyRatings[index];
            return (
              <article
                key={story.id}
                className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.333px)] shrink-0 snap-start bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  {/* University Name Badge (Red) + Unboxed Location & Year */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#CD2E3A] text-white text-xs font-bold tracking-wide mb-2">
                      {story.university}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <span>{story.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">Angkatan {story.year}</span>
                    </div>
                  </div>

                  {/* Mixed Proportional Star Rating (>= 4.5) */}
                  <div className="flex items-center gap-1 mb-3.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-4 h-4">
                        <Star className="w-4 h-4 text-slate-200 fill-slate-200" />
                        <div
                          className={`absolute inset-y-0 left-0 overflow-hidden ${getStarFillWidthClass(
                            rating,
                            i
                          )}`}
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </div>
                      </div>
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5 tabular-nums">
                      {rating.toFixed(1)} / 5.0
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    “{story.quote}”
                  </p>
                </div>

                {/* Attribution Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-slate-900 truncate">
                      {story.name}
                    </div>
                    {story.badge && (
                      <div className="text-xs text-slate-500 truncate mt-0.5">
                        {story.badge}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Slide Indicators */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                aria-current={currentIndex === idx ? 'true' : undefined}
                className={`h-2 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD2E3A] ${
                  currentIndex === idx
                    ? 'w-7 bg-[#CD2E3A]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
