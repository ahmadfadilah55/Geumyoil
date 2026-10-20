import React from 'react';
import { Star, MapPin, CheckCircle2, Building2, Calendar } from 'lucide-react';
import { ALUMNI_STORIES } from '../data/koreaData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="pt-10 pb-20 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 text-slate-900 relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Cerita Nyata Alumni Yang Telah <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">Meraih Mimpi di Korea</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Dari Belajar Bahasa Korea, Hingga Selangkah Lebih Dekat ke Korea Selatan.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {ALUMNI_STORIES.map((story, index) => {
            const isSeoul = story.location.includes('Seoul');
            return (
              <div
                key={story.id}
                className={`bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group ${
                  index >= 3 ? 'lg:col-span-1 lg:last:col-start-auto' : ''
                }`}
              >
                <div>
                  {/* University & Location Tag */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-wide shadow-2xs mb-2">
                        <Building2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>{story.university}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-[#CD2E3A]" />
                        <span>{story.location}</span>
                      </div>
                    </div>

                    <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200/70">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {story.year}
                    </span>
                  </div>

                  {/* Student Info Card */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/90 border border-slate-100 mb-5">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-13 h-13 rounded-full object-cover ring-2 ring-white shadow-2xs shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 truncate">
                          {story.name}
                        </h3>
                        <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50 shrink-0" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        Alumni Angkatan {story.year} • {isSeoul ? 'Kampus Seoul' : 'Kampus Busan'}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 / 5.0</span>
                  </div>

                  {/* Main Quote */}
                  <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-relaxed italic relative mb-4">
                    “{story.quote}”
                  </p>
                </div>

                {/* Card Footer / Verification Badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Admission Verified</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Geumyoil Alumni
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
