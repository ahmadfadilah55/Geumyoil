import React, { useState } from 'react';
import {
  Award,
  ArrowRight,
  MessageSquare,
  Search,
  Users,
  Compass,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SaudiFlagSvg } from './SaudiFlagSvg';

interface LanguageCourse {
  id: string;
  name: string;
  nativeName: string;
  region: 'Asia' | 'Eropa' | 'Timur Tengah' | 'BIPA';
  flagEmoji: string;
  flagSvg: React.ReactNode;
  tagline: string;
  description: string;
  certifications: string[];
  levels: string;
  targetAudience: string;
  keyFeatures: string[];
  badgeColor: string;
  accentColor: string;
}

interface GeumyoilPlusProps {
  onOpenConsultation: (program?: string) => void;
}

export const GeumyoilPlusSection: React.FC<GeumyoilPlusProps> = ({ onOpenConsultation }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { t } = useLanguage();

  const languageCourses: LanguageCourse[] = [
    {
      id: 'korea',
      name: 'Bahasa Korea',
      nativeName: '한국어 (Hangugeo)',
      region: 'Asia',
      flagEmoji: '🇰🇷',
      badgeColor: 'bg-rose-50 text-[#CD2E3A] border-rose-200',
      accentColor: 'border-l-4 border-l-[#CD2E3A]',
      tagline: 'Dari Hangeul dasar hingga persiapan TOPIK Level 1-6 & kerja resmi.',
      description: 'Program komprehensif mulai dari pengenalan aksara Hangeul, tata bahasa, percakapan harian, hingga persiapan beasiswa GKS dan kerja resmi EPS-TOPIK.',
      certifications: ['TOPIK I (Level 1-2)', 'TOPIK II (Level 3-6)', 'EPS-TOPIK (G2G)'],
      levels: 'Dasar (초급), Menengah (중급), Lanjutan (고급)',
      targetAudience: 'Peminat K-Culture, calon mahasiswa kuliah di Korea, calon pekerja resmi migran.',
      keyFeatures: [
        'Latihan pelafalan intensif dengan audio native',
        'Bedah soal tryout CBT TOPIK & EPS-TOPIK',
        'Simulasi percakapan situasi harian & formal kerja'
      ],
      flagSvg: (
        <svg viewBox="-72 -48 144 96" className="w-9 h-6 rounded-md shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <path fill="#ffffff" d="M-72-48v96H72v-96z" />
          <g stroke="#000000" strokeWidth="4">
            <path transform="rotate(33.69006752598)" d="M-50-12v24m6 0v-24m6 0v24m76 0V1m0-2v-11m6 0v11m0 2v11m6 0V1m0-2v-11" />
            <path transform="rotate(-33.69006752598)" d="M-50-12v24m6 0V1m0-2v-11m6 0v24m76 0V1m0-2v-11m6 0v24m6 0V1m0-2v-11" />
          </g>
          <g transform="rotate(33.69006752598)">
            <path fill="#cd2e3a" d="M12 0a18 18 0 11-36 0 24 24 0 1148 0" />
            <path fill="#0047a0" d="M-24 0a24 24 0 1048 0A12 12 0 100 0a12 12 0 11-24 0" />
          </g>
        </svg>
      )
    },
    {
      id: 'jepang',
      name: 'Bahasa Jepang',
      nativeName: '日本語 (Nihongo)',
      region: 'Asia',
      flagEmoji: '🇯🇵',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      accentColor: 'border-l-4 border-l-red-600',
      tagline: 'Kuasai Hiragana, Katakana, Kanji & lulus sertifikasi JLPT.',
      description: 'Kurikulum terstruktur untuk menguasai komunikasi bahasa Jepang, persiapan sekolah bahasa/kuliah di Jepang, serta program kerja Tokutei Ginou (SSW) dan Magang (Ginou Jisshuusei).',
      certifications: ['JLPT N5, N4, N3, N2, N1', 'J-Test / NAT-TEST', 'Tokutei Ginou (SSW)'],
      levels: 'N5 (Dasar) hingga N1 (Tingkat Bisnis Profesional)',
      targetAudience: 'Calon pekerja SSW/Tokutei Ginou, mahasiswa beasiswa MEXT, penggemar anime & budaya Jepang.',
      keyFeatures: [
        'Metode cepat hapal Hiragana & Katakana dalam 2 minggu',
        'Teknik pemahaman Kanji bertahap dengan radikal',
        'Latihan Kaiwa (percakapan) dan Bunpou (tata bahasa)'
      ],
      flagSvg: (
        <svg viewBox="0 0 36 24" className="w-9 h-6 rounded-md shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="36" height="24" fill="#ffffff" />
          <circle cx="18" cy="12" r="7" fill="#bc002d" />
        </svg>
      )
    },
    {
      id: 'mandarin',
      name: 'Bahasa Mandarin',
      nativeName: '普通话 / 汉语 (Hànyǔ)',
      region: 'Asia',
      flagEmoji: '🇨🇳',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      accentColor: 'border-l-4 border-l-amber-600',
      tagline: 'Kuasai Pinyin, 4 nada akurat, Hanzi, dan ujian HSK 1 - 6.',
      description: 'Bahasa bisnis global paling diminati di dunia. Belajar lafal Pinyin standar, penguasaan karakter Hanzi, percakapan dagang/bisnis internasional, serta persiapan beasiswa Tiongkok & Taiwan.',
      certifications: ['HSK Level 1 - 6 (Tertulis)', 'HSKK (Ujian Lisan)', 'TOCFL (Taiwan)'],
      levels: 'HSK 1-2 (Dasar), HSK 3-4 (Menengah), HSK 5-6 (Mahir)',
      targetAudience: 'Pebisnis, profesional perdagangan internasional, calon mahasiswa beasiswa CSC/CGS.',
      keyFeatures: [
        'Drill pengucapan 4 nada vokal agar tepat dan tidak salah arti',
        'Metode asosiasi visual karakter Hanzi mudah diingat',
        'Fokus komunikasi bisnis & kosakata perkantoran'
      ],
      flagSvg: (
        <svg viewBox="0 0 900 600" className="w-9 h-6 rounded-md shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="900" height="600" fill="#de2910" />
          <defs>
            <path id="china-star-point" d="M 0,-30 L 17.634,24.27 L -28.532,-9.27 L 28.532,-9.27 L -17.634,24.27 Z" fill="#ffde00" />
          </defs>
          {/* Main big star */}
          <use href="#china-star-point" transform="translate(150, 150) scale(3)" />
          {/* 4 small stars pointing towards big star center */}
          <use href="#china-star-point" transform="translate(300, 60) rotate(-120.96)" />
          <use href="#china-star-point" transform="translate(360, 120) rotate(-98.13)" />
          <use href="#china-star-point" transform="translate(360, 210) rotate(-74.05)" />
          <use href="#china-star-point" transform="translate(300, 270) rotate(-51.34)" />
        </svg>
      )
    },
    {
      id: 'jerman',
      name: 'Bahasa Jerman',
      nativeName: 'Deutsch',
      region: 'Eropa',
      flagEmoji: '🇩🇪',
      badgeColor: 'bg-stone-50 text-stone-800 border-stone-200',
      accentColor: 'border-l-4 border-l-stone-700',
      tagline: 'Akselerasi lulus Goethe-Zertifikat A1 - B2 & persiapan Ausbildung.',
      description: 'Pintu gerbang kuliah bebas biaya di universitas Jerman serta program vokasi Ausbildung (gaji selama masa pelatihan). Bimbingan intensif tata bahasa Jerman (Grammatik) dan latihan sprechen mandiri.',
      certifications: ['Goethe-Zertifikat A1, A2, B1, B2', 'TestDaF (Akademik)', 'Telc Deutsch'],
      levels: 'A1 (Pemula) hingga B2 (Syarat Kerja/Kuliah Jerman)',
      targetAudience: 'Peserta program Ausbildung, calon mahasiswa Studienkolleg & S1/S2, perawat (Pflegefachkraft).',
      keyFeatures: [
        'Pendalaman Grammatik Jerman: Kasus Nominativ, Akkusativ, Dativ & Genitiv',
        'Simulasi ujian sprechen (berbicara) dan schreiben (menulis surat)',
        'Materi orientasi budaya kehidupan & sistem kerja di Jerman'
      ],
      flagSvg: (
        <svg viewBox="0 0 36 24" className="w-9 h-6 rounded-md shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="36" height="8" y="0" fill="#000000" />
          <rect width="36" height="8" y="8" fill="#dd0000" />
          <rect width="36" height="8" y="16" fill="#ffce00" />
        </svg>
      )
    },
    {
      id: 'belanda',
      name: 'Bahasa Belanda',
      nativeName: 'Nederlands',
      region: 'Eropa',
      flagEmoji: '🇳🇱',
      badgeColor: 'bg-blue-50 text-[#0047A0] border-blue-200',
      accentColor: 'border-l-4 border-l-[#0047A0]',
      tagline: 'Persiapan studi universitas di Belanda & ujian integrasi MVV.',
      description: 'Belanda merupakan tujuan studi nomor satu di Eropa untuk program internasional. Program ini melatih pelafalan unik Belanda (guttural sounds), kosakata hukum/sosial, serta persiapan ujian Basisexamen Inburgering.',
      certifications: ['CNaVT (Sertifikat Bahasa Belanda Resmi)', 'Basisexamen Inburgering (MVV)', 'NT2'],
      levels: 'A1 (Dasar) hingga B2 (Komunikasi Profesional)',
      targetAudience: 'Penerima beasiswa StuNed, LPDP, Erasmus+, calon mahasiswa universitas Belanda, relokasi keluarga.',
      keyFeatures: [
        'Pengenalan pelafalan khas fonetik bahasa Belanda',
        'Modul khusus persiapan ujian integrasi Inburgering Kedutaan',
        'Studi kasus percakapan sehari-hari di kota-kota Belanda'
      ],
      flagSvg: (
        <svg viewBox="0 0 36 24" className="w-9 h-6 rounded-md shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="36" height="8" y="0" fill="#ae1c28" />
          <rect width="36" height="8" y="8" fill="#ffffff" />
          <rect width="36" height="8" y="16" fill="#21468b" />
        </svg>
      )
    },
    {
      id: 'inggris',
      name: 'Bahasa Inggris',
      nativeName: 'English (Academic & Business)',
      region: 'Eropa',
      flagEmoji: '🇬🇧',
      badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      accentColor: 'border-l-4 border-l-indigo-600',
      tagline: 'Raih skor target IELTS Band 7.0+ & TOEFL iBT untuk beasiswa dunia.',
      description: 'Bahasa pengantar global utama. Fokus pada peningkatan skor tes internasional (IELTS, TOEFL, Duolingo English Test) dan conversational fluency untuk presentasi bisnis serta interview beasiswa luar negeri.',
      certifications: ['IELTS Academic / General (Band 6.5 - 8.5)', 'TOEFL iBT / ITP', 'Duolingo English Test (DET)'],
      levels: 'Pre-Intermediate, Intermediate, Upper-Intermediate, Advanced',
      targetAudience: 'Pendaftar beasiswa LPDP, Chevening, AAS, Fulbright, profesional karier multinasional.',
      keyFeatures: [
        'Bedah teknik IELTS Writing Task 1 & Task 2 berstandar penguji resmi',
        'Latihan Speaking 1-on-1 dengan feedback grammar & vocabulary instan',
        'Strategi cepat eliminasi jawaban Listening & Reading'
      ],
      flagSvg: (
        <svg viewBox="0 0 36 24" className="w-9 h-6 rounded-md shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="36" height="24" fill="#012169" />
          {/* White diagonals */}
          <line x1="0" y1="0" x2="36" y2="24" stroke="#ffffff" strokeWidth="4" />
          <line x1="0" y1="24" x2="36" y2="0" stroke="#ffffff" strokeWidth="4" />
          {/* Red diagonals */}
          <line x1="0" y1="0" x2="36" y2="24" stroke="#c8102e" strokeWidth="2" />
          <line x1="0" y1="24" x2="36" y2="0" stroke="#c8102e" strokeWidth="2" />
          {/* White cross */}
          <rect x="15" width="6" height="24" fill="#ffffff" />
          <rect y="9" width="36" height="6" fill="#ffffff" />
          {/* Red cross */}
          <rect x="16.5" width="3" height="24" fill="#c8102e" />
          <rect y="10.5" width="36" height="3" fill="#c8102e" />
        </svg>
      )
    },
    {
      id: 'arab',
      name: 'Bahasa Arab',
      nativeName: 'العربية (Al-ʿArabiyyah)',
      region: 'Timur Tengah',
      flagEmoji: '🇸🇦',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      accentColor: 'border-l-4 border-l-emerald-600',
      tagline: 'Kuasai Nahwu, Sharaf, Muhadatsah aktif, & persiapan kuliah Timur Tengah.',
      description: 'Bahasa resmi di lebih dari 25 negara dan bahasa peradaban Islam. Mempelajari kaidah gramatika klasik (Fusha) maupun dialek percakapan modern untuk keperluan studi, ibadah haji/umrah, dan bisnis diplomatik.',
      certifications: ['TOAFL (Test of Arabic as a Foreign Language)', 'Sertifikasi Kemahiran Bahasa Arab Internasional'],
      levels: 'Mustawa Awwal (Dasar), Tsani (Menengah), Tsalits (Lanjutan)',
      targetAudience: 'Calon mahasiswa Al-Azhar Mesir, King Saud University, santri, pebisnis ekspor ke Teluk Arab.',
      keyFeatures: [
        'Penguasaan struktur tata bahasa Nahwu & Sharaf aplikatif',
        'Praktek Muhadatsah (percakapan langsung) tema harian & formal',
        'Pemahaman teks literatur berbahasa Arab gundul (kitab kuning / jurnal)'
      ],
      flagSvg: <SaudiFlagSvg />
    },
    {
      id: 'bipa',
      name: 'BIPA (Bahasa Indonesia)',
      nativeName: 'Bahasa Indonesia bagi Penutur Asing',
      region: 'BIPA',
      flagEmoji: '🇮🇩',
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
      accentColor: 'border-l-4 border-l-red-600',
      tagline: 'Kelas khusus ekspatriat & penutur asing agar fasih berbahasa Indonesia.',
      description: 'Dirancang khusus untuk warga negara asing (WNA), tenaga kerja ahli, staf diplomatik kedutaan, serta pasangan multinasional yang berdomisili atau bekerja di Indonesia.',
      certifications: ['UKBI (Uji Kemahiran Berbahasa Indonesia)', 'Sertifikat Resmi BIPA Standar Kemdikbud'],
      levels: 'BIPA 1 - 2 (Pemula), BIPA 3 - 4 (Madya), BIPA 5 - 7 (Mahir)',
      targetAudience: 'Ekspatriat di Indonesia, diplomat kedutaan asing, researcher internasional, pasangan WNA.',
      keyFeatures: [
        'Pengajaran menggunakan bahasa pengantar dwibahasa (English / Korean / Japanese)',
        'Kosakata praktis perbankan, perizinan imigrasi, dan sosial budaya Indonesia',
        'Latihan percakapan formal bisnis dan percakapan santai sehari-hari'
      ],
      flagSvg: (
        <svg viewBox="0 0 36 24" className="w-9 h-6 rounded-md shadow-xs border border-slate-200 overflow-hidden shrink-0">
          <rect width="36" height="12" y="0" fill="#ce1126" />
          <rect width="36" height="12" y="12" fill="#ffffff" />
        </svg>
      )
    }
  ];

  const filteredLanguages = languageCourses.filter((course) => {
    const matchesRegion = selectedRegion === 'all' || course.region === selectedRegion;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.certifications.some((cert) => cert.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="geumyoil-plus" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.plus.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
              Geumyoil+
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.plus.desc}
          </p>
        </div>

        {/* Region Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 mb-8 sm:mb-10 shadow-2xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.plus.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: t.plus.tabAll },
              { id: 'Asia', label: t.plus.tabAsia },
              { id: 'Eropa', label: t.plus.tabEurope },
              { id: 'Timur Tengah', label: t.plus.tabMideast },
              { id: 'BIPA', label: t.plus.tabBipa }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegion === tab.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 items-stretch">
          {filteredLanguages.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full"
            >
              <div className="flex flex-col h-full justify-between">
                
                {/* Top Section */}
                <div>
                  {/* Top Header: Flag SVG, Flag Emoji & Region Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      {course.flagSvg}
                      <span className="text-xl" title={course.name}>{course.flagEmoji}</span>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${course.badgeColor}`}>
                      {course.region}
                    </span>
                  </div>

                  {/* Course Name & Native Script */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0047A0] transition-colors leading-snug line-clamp-1">
                    {course.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-2 font-mono h-5 flex items-center truncate" title={course.nativeName}>
                    {course.nativeName}
                  </div>

                  {/* Tagline */}
                  <p className="text-[12px] text-slate-600 mb-4 leading-relaxed font-normal h-10 line-clamp-2">
                    {course.tagline}
                  </p>
                </div>

                {/* Certifications Badge List */}
                <div className="pt-3 border-t border-slate-100 mt-auto min-h-[82px] flex flex-col justify-start">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5 shrink-0">
                    <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Target Sertifikasi:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-semibold bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Why Choose Geumyoil+ Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {t.plus.whyTitle}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {t.plus.whySub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0047A0] flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[13px] text-slate-900 mb-1">{t.plus.why1Title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t.plus.why1Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#CD2E3A] flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[13px] text-slate-900 mb-1">{t.plus.why2Title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t.plus.why2Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#16A48F] flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[13px] text-slate-900 mb-1">{t.plus.why3Title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t.plus.why3Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-start">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-[13px] text-slate-900 mb-1">{t.plus.why4Title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {t.plus.why4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Free Consultation CTA Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xs border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              {t.plus.ctaBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.plus.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              {t.plus.ctaDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenConsultation('Konsultasi Geumyoil+')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#CD2E3A] hover:bg-[#a8252f] text-white font-bold text-xs sm:text-sm shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.plus.ctaBtn}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
