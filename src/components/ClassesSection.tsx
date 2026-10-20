import React, { useState, useEffect } from 'react';
import {
  Laptop,
  Coffee,
  Users,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileCheck2,
  HardHat,
  Target,
  Crown,
  Gem,
  Zap,
  Clock,
  Calendar,
  X,
  ShieldCheck
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import onlineStudyImg from '../assets/images/online_study_korean_1790769495566.jpg';
import cafeStudyImg from '../assets/images/cafe_study_korean_1790769510255.jpg';
import studentsDiscussingImg from '../assets/images/students_discussing_1790769522877.jpg';
import topCampusImg from '../assets/images/top_korea_campus_1790769537501.jpg';
import submenuEssentialsImg from '../assets/images/submenu_essentials_study_1791093952610.jpg';
import submenuTopikImg from '../assets/images/submenu_topik_prep_1791093968656.jpg';
import submenuEpsTopikImg from '../assets/images/submenu_epstopik_work_1791093981816.jpg';

export type ClassSubmenu = 'essentials' | 'topik' | 'eps-topik';
export type TierType = 'Private Class' | 'Elite Class' | 'Pro Class';
export type FormatType = 'Online' | 'Hybrid' | 'Offline';

interface ClassesSectionProps {
  onOpenConsultation: (programName?: string) => void;
  defaultCategory?: 'essentials' | 'topik' | 'eps-topik' | 'all';
}

interface ModalDetailData {
  title: string;
  badge: string;
  format: FormatType;
  tier: TierType;
  tagline: string;
  description: string;
  formatTitle: string;
  formatSubtitle: string;
  formatDesc: string;
  suitableFor: string[];
  ratio: string;
  duration: string;
  schedule: string;
  location: string;
  highlights: string[];
  syllabus: string[];
  inclusions: string[];
  themeColor: string;
}

export const ClassesSection: React.FC<ClassesSectionProps> = ({
  onOpenConsultation,
  defaultCategory = 'essentials'
}) => {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Detect active submenu from URL or props
  const [activeSubmenu, setActiveSubmenu] = useState<ClassSubmenu>(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('eps-topik') || path.includes('epstopik')) return 'eps-topik';
    if (path.includes('topik')) return 'topik';
    if (path.includes('essentials')) return 'essentials';
    if (defaultCategory === 'topik' || defaultCategory === 'eps-topik') return defaultCategory;
    return 'essentials';
  });

  // Detail Modal State
  const [selectedModalDetail, setSelectedModalDetail] = useState<ModalDetailData | null>(null);

  // Submenu Info Modal State ('audience' or 'syllabus')
  const [activeInfoModalType, setActiveInfoModalType] = useState<'audience' | 'syllabus' | null>(null);

  // Sync state if URL changes
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('eps-topik') || path.includes('epstopik')) {
      setActiveSubmenu('eps-topik');
    } else if (path.includes('topik')) {
      setActiveSubmenu('topik');
    } else if (path.includes('essentials')) {
      setActiveSubmenu('essentials');
    } else if (defaultCategory && defaultCategory !== 'all') {
      setActiveSubmenu(defaultCategory);
    }
  }, [location.pathname, defaultCategory]);

  const handleSubmenuChange = (submenu: ClassSubmenu) => {
    setActiveSubmenu(submenu);
    navigate(`/kelas/${submenu}`, { replace: true });
  };

  // Submenu metadata: Peruntukan, Materi, dan Karakteristik
  const submenuDetails = {
    essentials: {
      badge: 'Bahasa Korea General & Percakapan',
      title: 'Kelas Essentials',
      tagline: 'Kuasai Bahasa Korea dari Nol hingga Lancar Berkomunikasi',
      themeColor: '#0047A0',
      badgeBg: 'bg-blue-50 text-[#0047A0] border-blue-200',
      image: submenuEssentialsImg,
      heroDesc:
        language === 'en'
          ? 'Start your Korean language journey from scratch! Learn Hangeul, vocabulary, grammar, and daily conversation in a practical, enjoyable way. Perfect for casual conversations, understanding K-dramas & K-Pop, or preparing before traveling to Korea.'
          : 'Mulai perjalanan Bahasa Koreamu dari dasar! Pelajari Hangeul, kosakata, tata bahasa, hingga percakapan sehari-hari dengan cara yang praktis dan menyenangkan. Cocok untuk kamu yang ingin bisa ngobrol lebih natural, memahami drakor & K-Pop, atau mempersiapkan diri sebelum liburan ke Korea.',
      audienceTitle: 'Peruntukan Kelas Essentials',
      audiencePoints: [
        'Pemula mutlak yang belum pernah belajar huruf Hangeul sama sekali.',
        'Pembelajar yang ingin fasih berbicara santai untuk liburan, traveling, dan memesan makanan di Korea.',
        'Pecinta budaya Korea & drama yang ingin memahami percakapan tanpa ketergantungan subtitle.',
        'Karyawan atau profesional yang ingin menambah keterampilan bahasa asing kedua secara fleksibel.'
      ],
      syllabusTitle: 'Cakupan Materi Kelas Essentials',
      syllabusPoints: [
        'Fondasi Hangeul lengkap: Vokal tunggal/ganda, konsonan dasar/aspirasi, dan hukum pelafalan batchim (받침).',
        'Tata bahasa esensial: Kalimat formal (ㅂ니다/습니다), sopan santun (아요/어요), dan informal/akrab (반말).',
        'Kosakata tematik: Perkenalan diri, keluarga, waktu/jam, angka Sino & asli Korea, hobi, dan profesi.',
        'Simulasi situasi riil: Memesan makanan di restoran/kafe, menawar harga & belanja di pasar tradisional/Myeongdong.',
        'Etiket & Budaya Korea: Aturan sopan santun sosial (선후배), salam membungkuk, dan cara berinteraksi alami.'
      ]
    },
    topik: {
      badge: 'Fokus Pembahasan Ujian TOPIK I & II',
      title: 'Kelas TOPIK',
      tagline: 'Fokus Belajar untuk Taklukkan TOPIK & Raih Skor Terbaik',
      themeColor: '#16A48F',
      badgeBg: 'bg-teal-50 text-[#16A48F] border-teal-200',
      image: submenuTopikImg,
      heroDesc:
        language === 'en'
          ? 'Prepare for TOPIK I (Levels 1–2) & TOPIK II (Levels 3–6) with intensive guidance, question analysis, and proven exam strategies. Boost your score and unlock more opportunities for GKS scholarships and top Korean universities.'
          : 'Persiapkan diri menghadapi TOPIK I (Level 1–2) & TOPIK II (Level 3–6) dengan bimbingan intensif, bedah soal, dan strategi pengerjaan yang tepat. Tingkatkan skor dan buka lebih banyak peluang untuk beasiswa GKS serta kuliah di kampus terbaik Korea.',
      audienceTitle: 'Peruntukan Kelas TOPIK',
      audiencePoints: [
        'Calon mahasiswa yang mendaftar S1 atau S2 di universitas ternama Korea Selatan (SKY, SNU, Yonsei, KAIST).',
        'Pelamar beasiswa prestisius GKS (Global Korea Scholarship) dan beasiswa universitas Korea.',
        'Mahasiswa jurusan Bahasa/Sastra Korea yang membutuhkan sertifikat kelulusan TOPIK resmi.',
        'Profesional yang ingin membuktikan kompetensi bahasa Korea berstandar internasional NIIED Korea.'
      ],
      syllabusTitle: 'Cakupan Materi Kelas TOPIK',
      syllabusPoints: [
        'Bedah pola soal 듣기 (Listening): Trik eliminasi cepat opsi salah, tangkap kata kunci, dan latihan audio cepat.',
        'Strategi 읽기 (Reading): Membaca cepat teks ilmiah, artikel opini, grafik survei, dan peribahasa Korea (속담).',
        'Teknik Menulis Esai 쓰기 (Khusus TOPIK II): Rumus menulis ringkasan grafik (Soal 53) & esai argumentatif (Soal 54).',
        'Penguasaan kosakata akademik (고급 어휘) & tata bahasa tingkat menengah-atas yang sering muncul di ujian.',
        'Drill bank soal 10 tahun terakhir & simulasi ujian berkala dengan estimasi skor akurat sesuai standar NIIED.'
      ]
    },
    'eps-topik': {
      badge: 'Fokus Ujian EPS-TOPIK HRD Korea',
      title: 'Kelas EPS-TOPIK',
      tagline: 'Persiapkan Diri untuk Kerja Resmi di Korea',
      themeColor: '#CD2E3A',
      badgeBg: 'bg-rose-50 text-[#CD2E3A] border-rose-200',
      image: submenuEpsTopikImg,
      heroDesc:
        language === 'en'
          ? 'Targeted training using standard HRD Korea textbooks, practice questions, and CBT (Computer Based Test) simulations. Prepare for EPS-TOPIK and seize opportunities to work legally in South Korea via the government G-to-G BP2MI scheme.'
          : 'Pelatihan terarah menggunakan Buku Standar HRD Korea, latihan soal, dan simulasi CBT (Computer Based Test). Persiapkan diri menghadapi EPS-TOPIK dan raih peluang bekerja secara resmi di Korea Selatan melalui skema G-to-G BP2MI.',
      audienceTitle: 'Peruntukan Kelas EPS-TOPIK',
      audiencePoints: [
        'Calon Pekerja Migran Indonesia (PMI) yang mendaftar program kerja resmi G-to-G BP2MI & HRD Korea.',
        'Pencari kerja yang mengincar penempatan resmi di sektor Manufaktur, Perikanan, Konstruksi, dan Pertanian Korea.',
        'Peserta yang ingin lulus ujian EPS-TOPIK CBT dalam sekali percobaan dengan skor maksimal di atas passing grade.',
        'Calon tenaga kerja yang membutuhkan persiapan menyeluruh termasuk Skill Test & wawancara kerja.'
      ],
      syllabusTitle: 'Cakupan Materi Kelas EPS-TOPIK',
      syllabusPoints: [
        'Pembahasan tuntas Buku Standar HRD Korea (한국어 표준교재) Jilid 1 & 2 dari Bab 1 sampai Bab 60.',
        'Penguasaan kosakata keselamatan kerja (K3), rambu bahaya di pabrik (안전표지), dan nama-nama peralatan kerja.',
        'Kosakata industri: Istilah lembur (야근), gaji & slip pembayaran (월급명세서), asuransi tenaga kerja, dan izin tinggal.',
        'Drill ribuan bank soal CBT Membaca (읽기) & Mendengarkan (듣기) dengan interface komputer mirip ujian asli.',
        'Pembekalan Skill Test (Tes Keterampilan fisik/ketangkasan) serta panduan wawancara kerja (면접) dengan HRD.'
      ]
    }
  };

  const currentInfo = submenuDetails[activeSubmenu];

  // Helper to construct Modal Detail Data
  const getModalDetail = (format: FormatType, tier: TierType): ModalDetailData => {
    const sub = activeSubmenu;
    const subLabel =
      sub === 'essentials'
        ? 'Kelas Essentials'
        : sub === 'topik'
        ? 'Kelas TOPIK'
        : 'Kelas EPS-TOPIK';
    
    const theme =
      format === 'Online'
        ? '#0047A0'
        : format === 'Hybrid'
        ? '#16A48F'
        : '#CD2E3A';

    // Strictly Kelas Privat 1 On 1
    const ratio = 'Kelas Privat 1 On 1 (Eksklusif Bersama Tutor)';

    // Durasi & Alokasi Sesi Pertemuan sesuai request
    let duration = '';
    let sessionsSummary = '';
    if (format === 'Online') {
      if (tier === 'Private Class') {
        duration = '16x (90 menit)';
        sessionsSummary = '16x Pertemuan (90 menit per sesi)';
      } else if (tier === 'Elite Class') {
        duration = '32x (90 menit)';
        sessionsSummary = '32x Pertemuan (90 menit per sesi)';
      } else {
        duration = '64x (90 menit)';
        sessionsSummary = '64x Pertemuan (90 menit per sesi)';
      }
    } else if (format === 'Offline') {
      if (tier === 'Private Class') {
        duration = '12x (120 menit)';
        sessionsSummary = '12x Pertemuan (120 menit per sesi)';
      } else if (tier === 'Elite Class') {
        duration = '24x (120 menit)';
        sessionsSummary = '24x Pertemuan (120 menit per sesi)';
      } else {
        duration = '48x (120 menit)';
        sessionsSummary = '48x Pertemuan (120 menit per sesi)';
      }
    } else {
      // Hybrid
      if (tier === 'Private Class') {
        duration = '8x (90 menit) + 6x (120 menit)';
        sessionsSummary = '8x Daring (90 menit) + 6x Tatap Muka (120 menit)';
      } else if (tier === 'Elite Class') {
        duration = '16x (90 menit) + 12x (120 menit)';
        sessionsSummary = '16x Daring (90 menit) + 12x Tatap Muka (120 menit)';
      } else {
        duration = '32x (90 menit) + 24x (120 menit)';
        sessionsSummary = '32x Daring (90 menit) + 24x Tatap Muka (120 menit)';
      }
    }

    const schedule = 'Bebas Pilih Jadwal Fleksibel';

    let location = 'Google Meet / Zoom HD Interaktif';
    if (format === 'Hybrid') {
      location = 'Partner Cafe Pilihan dan Zoom Meeting';
    } else if (format === 'Offline') {
      location = 'Partner Cafe Pilihan';
    }

    // Rincian Fasilitas (Inclusions) persis sesuai rincian user:
    let inclusions: string[] = [];
    if (format === 'Online') {
      inclusions = [
        'Kelas Privat 1 On 1',
        'E-Sertifikat',
        'Gift Merchandise',
        'Konsultasi Gratis Di Luar Jam Kelas',
        'Video & File Pembahasan Materi',
        'Buku Pembelajaran'
      ];
    } else if (format === 'Hybrid') {
      inclusions = [
        'Kelas Privat 1 On 1',
        'E-Sertifikat',
        'Gift Merchandise',
        'Konsultasi Gratis Di Luar Jam Kelas',
        'Video & File Pembahasan Materi Sesi',
        'Buku Pembelajaran'
      ];
    } else {
      // Offline
      inclusions = [
        'Kelas Privat 1 On 1',
        'E-Sertifikat',
        'Gift Merchandise Special',
        'Konsultasi Gratis Di Luar Jam Kelas',
        'Video & File Pembahasan Materi Sesi',
        'Buku Pembelajaran'
      ];
    }

    // Deskripsi & Karakteristik Format Pembelajaran
    let formatTitle = '';
    let formatSubtitle = '';
    let formatDesc = '';
    let suitableFor: string[] = [];

    if (format === 'Online') {
      formatTitle = 'Online Class — Belajar dari Mana Saja';
      formatSubtitle = 'Belajar Bahasa Korea Lebih Fleksibel, Tanpa Batas Tempat';
      formatDesc =
        'Belajar Bahasa Korea 100% online melalui Zoom dengan materi terstruktur dan interaktif. Dibimbing langsung oleh pengajar untuk menguasai Hangeul, tata bahasa, hingga percakapan Korea secara aktif—nyaman, fleksibel, dan tetap efektif.';
      suitableFor = [
        'Memiliki jadwal yang padat',
        'Tinggal jauh dari lokasi kelas',
        'Ingin belajar dari rumah dengan lebih fleksibel',
        'Tetap ingin mendapatkan bimbingan dan interaksi langsung dengan pengajar'
      ];
    } else if (format === 'Hybrid') {
      formatTitle = 'Hybrid Class — Fleksibel Online, Seru Saat Offline';
      formatSubtitle = 'Gabungkan Fleksibilitas Online dengan Serunya Belajar Langsung';
      formatDesc =
        'Gabungkan kenyamanan belajar via Zoom dengan pengalaman belajar langsung di cafe. Tetap fleksibel mengikuti jadwal, sambil mendapatkan kesempatan berinteraksi dan praktik Bahasa Korea secara langsung bersama pengajar.';
      suitableFor = [
        'Membutuhkan fleksibilitas waktu dan tempat',
        'Ingin merasakan pengalaman belajar online sekaligus offline',
        'Suka belajar sambil berinteraksi dan berdiskusi',
        'Ingin lebih banyak kesempatan untuk mempraktikkan Bahasa Korea'
      ];
    } else {
      // Offline
      formatTitle = 'Offline Class — Belajar Langsung, Praktik Lebih Banyak';
      formatSubtitle = 'Belajar Bahasa Korea Secara Langsung dalam Suasana yang Santai';
      formatDesc =
        'Belajar Bahasa Korea secara tatap muka di cafe dengan suasana santai dan interaktif. Lebih leluasa bertanya, berdiskusi, dan langsung mempraktikkan Bahasa Korea bersama pengajar untuk membangun kepercayaan diri dalam berkomunikasi.';
      suitableFor = [
        'Lebih nyaman belajar secara tatap muka',
        'Suka berdiskusi dan berinteraksi langsung',
        'Ingin lebih banyak latihan speaking',
        'Menikmati suasana belajar yang santai dan tidak monoton'
      ];
    }

    let tagline = '';
    let description = '';
    let highlights: string[] = [];
    let syllabus: string[] = [];

    const tierLabel = tier === 'Private Class' ? 'Privat' : tier === 'Elite Class' ? 'Elite' : 'Pro';

    // Details by Submenu & Format & Tier
    if (sub === 'essentials') {
      tagline = `${tierLabel} ${format} Essentials: Fondasi & Percakapan Korea [${duration}]`;
      description = `Program ${tierLabel} ${format} untuk Kelas Essentials dengan alokasi total ${sessionsSummary}. Dirancang secara eksklusif (Kelas Privat 1 On 1) agar kamu menguasai huruf Hangeul, tata bahasa esensial, dan percakapan harian secara fasih, percaya diri, dan menyenangkan.`;
      
      highlights = [
        `Alokasi total ${sessionsSummary} secara privat 1-on-1 bersama tutor berpengalaman.`,
        'Kecepatan belajar disesuaikan 100% dengan ritme personal siswa.',
        'Latihan pelafalan (pronunciation) dan intonasi aksen native Korea.',
        'Konsultasi gratis tanpa batas di luar jam kelas untuk tanya jawab materi.',
        'Akses rekaman video, file pembahasan materi lengkap, dan Buku Pembelajaran eksklusif.'
      ];

      syllabus = [
        'Huruf Hangeul & Aturan Hukum Pelafalan Batchim (받침)',
        'Pola Kalimat Dasar Formal (ㅂ니다/습니다) & Informal Sopan (아요/어요)',
        'Angka Sino & Asli Korea: Jam, Tanggal, Uang, dan Satuan Penghitung',
        'Kosakata Tematik Harian: Keluarga, Makanan, Hobi, Arah & Transportasi',
        'Percakapan Situasional: Belanja, Reservasi Kafe/Restoran, Traveling, dan Etiket Korea'
      ];
    } else if (sub === 'topik') {
      tagline = `${tierLabel} ${format} TOPIK: Bimbingan Intensif Bedah Soal Skor Tinggi [${duration}]`;
      description = `Program ${tierLabel} ${format} untuk Kelas TOPIK dengan alokasi total ${sessionsSummary}. Pendampingan intensif Kelas Privat 1 On 1 untuk bedah soal 듣기 & 읽기, koreksi esai 쓰기 kata-per-kata, serta strategi lolos beasiswa GKS dan seleksi kampus top Korea Selatan.`;

      highlights = [
        `Alokasi total ${sessionsSummary} terarah khusus persiapan ujian resmi TOPIK I & II.`,
        'Bimbingan Kelas Privat 1 On 1 eksklusif dengan analisis diagnostik kemampuan.',
        'Koreksi detail esai 쓰기 (Soal 51, 52, 53, 54) dengan feedback tata bahasa akademik.',
        'Konsultasi gratis di luar jam kelas seputar materi ujian & alur beasiswa GKS / universitas.',
        'Dilengkapi Buku Pembelajaran, video & file pembahasan materi sesi, serta E-Sertifikat.'
      ];

      syllabus = [
        'Strategi Menaklukkan Soal Mendengarkan (듣기): Kata Kunci, Topik Utama, & Nuansa',
        'Strategi Membaca Cepat (읽기): Teks Grafis, Artikel Opini, Surat Kabar, & Sastra',
        'Teknik Menulis Esai (쓰기): Struktur Grafik Soal 53 & Esai Panjang Soal 54 (600-700 kata)',
        'Kosakata Akademik, Sinonim-Antonim, & Peribahasa Korea (속담/사자성어)',
        'Simulasi Tryout Penuh Durasi Nyata & Pembahasan Evaluasi Skor'
      ];
    } else {
      // eps-topik
      tagline = `${tierLabel} ${format} EPS-TOPIK: Lolos CBT & Kerja Resmi Korea BP2MI [${duration}]`;
      description = `Program ${tierLabel} ${format} untuk Kelas EPS-TOPIK dengan alokasi total ${sessionsSummary}. Pendampingan Kelas Privat 1 On 1 untuk menembus ujian CBT HRD Korea skema pemerintah G-to-G BP2MI, pembahasan Buku Standar bab demi bab, serta pembekalan Skill Test.`;

      highlights = [
        `Alokasi total ${sessionsSummary} bimbingan intensif ujian CBT HRD Korea.`,
        'Bimbingan Kelas Privat 1 On 1 fokus tuntas 60 bab Buku Standar HRD Korea.',
        'Latihan simulasi CBT membaca (읽기) dan mendengarkan (듣기) dengan bank soal teruji.',
        'Konsultasi gratis di luar jam kelas untuk konsultasi administrasi pendaftaran BP2MI.',
        `Termasuk Buku Pembelajaran, video & file pembahasan materi sesi, dan ${format === 'Offline' ? 'Gift Merchandise Special' : 'Gift Merchandise'}.`
      ];

      syllabus = [
        'Buku Standar HRD Korea (한국어 표준교재) Jilid 1 (Bab 1 - 30): Tata Bahasa & Kosakata Dasar',
        'Buku Standar HRD Korea Jilid 2 (Bab 31 - 60): Kosakata Industri, K3, & Budaya Kerja Pabrik',
        'Rambu-Rambu Keselamatan Kerja (안전표지) & Nama Peralatan Manufaktur/Perikanan',
        'Kosakata Hukum & Kontrak Kerja: Gaji (월급), Asuransi (보험), Lembur (야근), Izin Sakit',
        'Drill Bank Soal CBT Membaca (읽기) & Mendengarkan (듣기) + Simulasi Waktu Ujian'
      ];
    }

    return {
      title: `${subLabel} - ${tierLabel} ${format}`,
      badge: `${subLabel} · ${tierLabel} ${format}`,
      format,
      tier,
      tagline,
      description,
      formatTitle,
      formatSubtitle,
      formatDesc,
      suitableFor,
      ratio,
      duration,
      schedule,
      location,
      highlights,
      syllabus,
      inclusions,
      themeColor: theme
    };
  };

  const handleOpenDetailModal = (format: FormatType, tier: TierType) => {
    const data = getModalDetail(format, tier);
    setSelectedModalDetail(data);
  };

  return (
    <section id="kelas" className="pt-8 pb-20 bg-transparent text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {language === 'en' ? (
              <>
                Choose the Class That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                  Fits Your Goals
                </span>
              </>
            ) : (
              <>
                Pilih Kelas yang{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                  Sesuai dengan Tujuanmu
                </span>
              </>
            )}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {language === 'en'
              ? 'Determine your learning focus and choose the method most comfortable for you. Available in Online, Hybrid, and Offline Classes, with Private, Elite, and Pro Class options.'
              : 'Tentukan fokus belajarmu dan pilih metode yang paling nyaman untukmu. Tersedia Online, Hybrid, dan Offline Class, dengan pilihan Private, Elite, hingga Pro Class.'}
          </p>

          {/* 3 SUB MENU TABS - PROMINENT & INTERACTIVE */}
          <div className="mt-8 p-1.5 sm:p-2 bg-white border border-slate-200 rounded-3xl shadow-sm inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-full">
            
            {/* Submenu Tab 1: Kelas Essentials */}
            <button
              onClick={() => handleSubmenuChange('essentials')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeSubmenu === 'essentials'
                  ? 'bg-[#0047A0] text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Compass className={`w-4 h-4 ${activeSubmenu === 'essentials' ? 'text-white' : 'text-[#0047A0]'}`} />
              <span className="leading-tight font-extrabold">Kelas Essentials</span>
            </button>

            {/* Submenu Tab 2: Kelas TOPIK */}
            <button
              onClick={() => handleSubmenuChange('topik')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeSubmenu === 'topik'
                  ? 'bg-[#16A48F] text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileCheck2 className={`w-4 h-4 ${activeSubmenu === 'topik' ? 'text-white' : 'text-[#16A48F]'}`} />
              <span className="leading-tight font-extrabold">Kelas TOPIK</span>
            </button>

            {/* Submenu Tab 3: Kelas EPS-TOPIK */}
            <button
              onClick={() => handleSubmenuChange('eps-topik')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeSubmenu === 'eps-topik'
                  ? 'bg-[#CD2E3A] text-white shadow-md scale-102'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HardHat className={`w-4 h-4 ${activeSubmenu === 'eps-topik' ? 'text-white' : 'text-[#CD2E3A]'}`} />
              <span className="leading-tight font-extrabold">Kelas EPS-TOPIK</span>
            </button>

          </div>
        </div>

        {/* SUBMENU HERO FOCUS & SYLLABUS CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm mb-12 sm:mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Information & Action Modals */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="pb-6 border-b border-slate-100">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 border shadow-2xs"
                  style={{
                    backgroundColor: `${currentInfo.themeColor}12`,
                    color: currentInfo.themeColor,
                    borderColor: `${currentInfo.themeColor}30`
                  }}
                >
                  <span>{currentInfo.badge}</span>
                </div>
                <h3 className="text-[27px] font-extrabold text-slate-900 tracking-tight leading-tight">
                  {currentInfo.title} — {currentInfo.tagline}
                </h3>
                <p className="mt-3 text-[12px] text-slate-600 leading-relaxed">
                  {currentInfo.heroDesc}
                </p>
              </div>

              {/* Grid: Tombol Pop-up Peruntukan & Cakupan Materi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-6">
                {/* Tombol Peruntukan */}
                <button
                  type="button"
                  onClick={() => setActiveInfoModalType('audience')}
                  className="group p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all text-left cursor-pointer flex items-center gap-3.5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-2xs"
                    style={{
                      backgroundColor: `${currentInfo.themeColor}15`,
                      color: currentInfo.themeColor
                    }}
                  >
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 group-hover:text-slate-950 transition-colors">
                      {currentInfo.audienceTitle}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Lihat kriteria & profil siswa
                    </p>
                  </div>
                </button>

                {/* Tombol Cakupan Materi */}
                <button
                  type="button"
                  onClick={() => setActiveInfoModalType('syllabus')}
                  className="group p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all text-left cursor-pointer flex items-center gap-3.5"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-2xs"
                    style={{
                      backgroundColor: `${currentInfo.themeColor}15`,
                      color: currentInfo.themeColor
                    }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 group-hover:text-slate-950 transition-colors">
                      {currentInfo.syllabusTitle}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                      Lihat silabus & materi lengkap
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Attractive Image */}
            <div className="lg:col-span-5 relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md group border border-slate-200/80">
              <img
                src={currentInfo.image}
                alt={currentInfo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md inline-block mb-1.5 shadow-sm text-white border border-white/20"
                  style={{ backgroundColor: `${currentInfo.themeColor}E6` }}
                >
                  {currentInfo.badge}
                </span>
                <p className="text-xs sm:text-sm font-bold text-white line-clamp-2 drop-shadow-sm">
                  {currentInfo.tagline}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RINGKASAN JENIS KELAS & ALOKASI SESI PERTEMUAN */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-12 sm:mb-16">
          <div className="pb-6 border-b border-slate-100">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Pilihan Jenis Paket Kelas &amp; Jumlah Sesi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Semua pilihan paket dijalankan dengan sistem <strong>Kelas Privat 1 On 1</strong> secara eksklusif. Klik tombol paket pada masing-masing format untuk membuka rincian lengkap program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
            {/* Paket 1: Privat Class */}
            <div className="rounded-2xl border border-amber-300/90 bg-gradient-to-br from-amber-100/90 via-amber-50 to-orange-100/90 p-5 flex flex-col justify-between hover:border-amber-400 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center font-bold">
                      <Crown className="w-4 h-4 text-amber-800" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900">Privat Class</h4>
                      <p className="text-[11px] text-slate-600 font-semibold">Kelas Privat 1 On 1</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4 text-xs">
                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Online', 'Private Class')}
                    className="w-full p-3 rounded-xl bg-white border border-blue-200 hover:border-blue-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#0047A0] flex items-center gap-1.5">
                        <Laptop className="w-3 h-3" />
                        <span>Privat Online</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">16x (90 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0047A0] group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Offline', 'Private Class')}
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 hover:border-rose-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#CD2E3A] flex items-center gap-1.5">
                        <Users className="w-3 h-3" />
                        <span>Privat Offline</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">12x (120 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#CD2E3A] group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Hybrid', 'Private Class')}
                    className="w-full p-3 rounded-xl bg-white border border-teal-200 hover:border-teal-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#16A48F] flex items-center gap-1.5">
                        <Coffee className="w-3 h-3" />
                        <span>Privat Hybrid</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">8x (90 menit) + 6x (120 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#16A48F] group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>

            {/* Paket 2: Elite Class */}
            <div className="rounded-2xl border border-cyan-300/90 bg-gradient-to-br from-blue-100/90 via-sky-50 to-cyan-100/90 p-5 flex flex-col justify-between hover:border-cyan-400 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-200/80 text-[#0047A0] flex items-center justify-center font-bold">
                      <Gem className="w-4 h-4 text-[#0047A0]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900">Elite Class</h4>
                      <p className="text-[11px] text-slate-600 font-semibold">Kelas Privat 1 On 1 (2x Intensitas)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4 text-xs">
                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Online', 'Elite Class')}
                    className="w-full p-3 rounded-xl bg-white border border-blue-200 hover:border-blue-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#0047A0] flex items-center gap-1.5">
                        <Laptop className="w-3 h-3" />
                        <span>Elite Online</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">32x (90 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0047A0] group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Offline', 'Elite Class')}
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 hover:border-rose-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#CD2E3A] flex items-center gap-1.5">
                        <Users className="w-3 h-3" />
                        <span>Elite Offline</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">24x (120 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#CD2E3A] group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Hybrid', 'Elite Class')}
                    className="w-full p-3 rounded-xl bg-white border border-teal-200 hover:border-teal-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#16A48F] flex items-center gap-1.5">
                        <Coffee className="w-3 h-3" />
                        <span>Elite Hybrid</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">16x (90 menit) + 12x (120 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#16A48F] group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>

            {/* Paket 3: Pro Class */}
            <div className="rounded-2xl border border-purple-300/90 bg-gradient-to-br from-purple-100/90 via-purple-50 to-pink-100/90 p-5 flex flex-col justify-between hover:border-pink-400 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-200/80 text-purple-900 flex items-center justify-center font-bold">
                      <Zap className="w-4 h-4 text-purple-800" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900">Pro Class</h4>
                      <p className="text-[11px] text-slate-600 font-semibold">Kelas Privat 1 On 1 (Mastery)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4 text-xs">
                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Online', 'Pro Class')}
                    className="w-full p-3 rounded-xl bg-white border border-blue-200 hover:border-blue-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#0047A0] flex items-center gap-1.5">
                        <Laptop className="w-3 h-3" />
                        <span>Pro Online</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">64x (90 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0047A0] group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Offline', 'Pro Class')}
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 hover:border-rose-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#CD2E3A] flex items-center gap-1.5">
                        <Users className="w-3 h-3" />
                        <span>Pro Offline</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">48x (120 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#CD2E3A] group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetailModal('Hybrid', 'Pro Class')}
                    className="w-full p-3 rounded-xl bg-white border border-teal-200 hover:border-teal-500 hover:shadow-2xs text-left transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#16A48F] flex items-center gap-1.5">
                        <Coffee className="w-3 h-3" />
                        <span>Pro Hybrid</span>
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">32x (90 menit) + 24x (120 menit)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#16A48F] group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. KELAS ONLINE (Private, Elite, Pro) */}
        <div className="mb-16 sm:mb-20">
            {/* Format Hero Banner with Online Study Image */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                  <img
                    src={onlineStudyImg}
                    alt="Online Class — Belajar dari Mana Saja"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-4 left-4 lg:hidden text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-[#0047A0] px-3 py-1 rounded-full shadow-xs">
                      Online Class — Belajar dari Mana Saja
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="hidden lg:block text-xs font-bold text-[#0047A0] uppercase tracking-wider mb-2">
                    <span>Online Class — Belajar dari Mana Saja</span>
                  </div>
                  <h3 className="text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug">
                    Belajar Bahasa Korea Lebih Fleksibel, Tanpa Batas Tempat
                  </h3>
                  <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      Belajar Bahasa Korea 100% online melalui Zoom dengan materi terstruktur dan interaktif. Dibimbing langsung oleh pengajar untuk menguasai Hangeul, tata bahasa, hingga percakapan Korea secara aktif—nyaman, fleksibel, dan tetap efektif.
                    </p>
                  </div>
                  
                  {/* Rincian Fasilitas Kelas Online */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-extrabold text-[#0047A0] uppercase tracking-wider mb-2.5">
                      <span>Rincian Fasilitas Kelas Online:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0047A0] shrink-0" />
                        <span className="font-semibold text-[10px]">Kelas Privat 1 On 1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0047A0] shrink-0" />
                        <span className="font-semibold text-[10px]">E-Sertifikat</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0047A0] shrink-0" />
                        <span className="font-semibold text-[10px]">Gift Merchandise</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0047A0] shrink-0" />
                        <span className="font-semibold text-[10px]">Konsultasi Gratis Di Luar Jam Kelas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0047A0] shrink-0" />
                        <span className="font-semibold text-[10px]">Video &amp; File Pembahasan Materi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0047A0] shrink-0" />
                        <span className="font-semibold text-[10px]">Buku Pembelajaran</span>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Detail Kelas: Private Class, Elite Class, Pro Class */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-2.5">
                      <span>Pilihan Paket Kelas Online:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Online', 'Private Class')}
                        className="px-3 py-2.5 bg-blue-50/80 hover:bg-blue-100 text-[#0047A0] border border-blue-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Crown className="w-3.5 h-3.5 text-[#0047A0]" />
                        <span>Private Class</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Online', 'Elite Class')}
                        className="px-3 py-2.5 bg-blue-50/80 hover:bg-blue-100 text-[#0047A0] border border-blue-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Gem className="w-3.5 h-3.5 text-[#0047A0]" />
                        <span>Elite Class</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Online', 'Pro Class')}
                        className="px-3 py-2.5 bg-blue-50/80 hover:bg-blue-100 text-[#0047A0] border border-blue-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Zap className="w-3.5 h-3.5 text-[#0047A0]" />
                        <span>Pro Class</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 2. KELAS HYBRID (Private, Elite, Pro) */}
        <div className="mb-16 sm:mb-20">
            {/* Format Hero Banner with Cafe Study Image */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                  <img
                    src={cafeStudyImg}
                    alt="Hybrid Class — Fleksibel Online, Seru Saat Offline"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-4 left-4 lg:hidden text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-[#16A48F] px-3 py-1 rounded-full shadow-xs">
                      Hybrid Class — Fleksibel Online, Seru Saat Offline
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="hidden lg:block text-xs font-bold text-[#16A48F] uppercase tracking-wider mb-2">
                    <span>Hybrid Class — Fleksibel Online, Seru Saat Offline</span>
                  </div>
                  <h3 className="text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug">
                    Gabungkan Fleksibilitas Online dengan Serunya Belajar Langsung
                  </h3>
                  <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      Gabungkan kenyamanan belajar via Zoom dengan pengalaman belajar langsung di cafe. Tetap fleksibel mengikuti jadwal, sambil mendapatkan kesempatan berinteraksi dan praktik Bahasa Korea secara langsung bersama pengajar.
                    </p>
                  </div>
                  
                  {/* Rincian Fasilitas Privat HYBRID */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-extrabold text-[#16A48F] uppercase tracking-wider mb-2.5">
                      <span>Rincian Fasilitas Privat HYBRID:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A48F] shrink-0" />
                        <span className="font-semibold text-[10px]">Kelas Privat 1 On 1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A48F] shrink-0" />
                        <span className="font-semibold text-[10px]">E-Sertifikat</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A48F] shrink-0" />
                        <span className="font-semibold text-[10px]">Gift Merchandise</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A48F] shrink-0" />
                        <span className="font-semibold text-[10px]">Konsultasi Gratis Di Luar Jam Kelas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A48F] shrink-0" />
                        <span className="font-semibold text-[10px]">Video &amp; File Pembahasan Materi Sesi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A48F] shrink-0" />
                        <span className="font-semibold text-[10px]">Buku Pembelajaran</span>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Detail Kelas: Private Class, Elite Class, Pro Class */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-2.5">
                      <span>Pilihan Paket Privat HYBRID:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Hybrid', 'Private Class')}
                        className="px-3 py-2.5 bg-teal-50/80 hover:bg-teal-100 text-[#16A48F] border border-teal-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Crown className="w-3.5 h-3.5 text-[#16A48F]" />
                        <span>Private Class</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Hybrid', 'Elite Class')}
                        className="px-3 py-2.5 bg-teal-50/80 hover:bg-teal-100 text-[#16A48F] border border-teal-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Gem className="w-3.5 h-3.5 text-[#16A48F]" />
                        <span>Elite Class</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Hybrid', 'Pro Class')}
                        className="px-3 py-2.5 bg-teal-50/80 hover:bg-teal-100 text-[#16A48F] border border-teal-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Zap className="w-3.5 h-3.5 text-[#16A48F]" />
                        <span>Pro Class</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 3. KELAS OFFLINE (Private, Elite, Pro) */}
        <div className="mb-16 sm:mb-20">
            {/* Format Hero Banner with Students Discussing Image */}
            <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                  <img
                    src={studentsDiscussingImg}
                    alt="Offline Class — Belajar Langsung, Praktik Lebih Banyak"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-4 left-4 lg:hidden text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-[#CD2E3A] px-3 py-1 rounded-full shadow-xs">
                      Offline Class — Belajar Langsung, Praktik Lebih Banyak
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="hidden lg:block text-xs font-bold text-[#CD2E3A] uppercase tracking-wider mb-2">
                    <span>Offline Class — Belajar Langsung, Praktik Lebih Banyak</span>
                  </div>
                  <h3 className="text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug">
                    Belajar Bahasa Korea Secara Langsung dalam Suasana yang Santai
                  </h3>
                  <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      Belajar Bahasa Korea secara tatap muka di cafe dengan suasana santai dan interaktif. Lebih leluasa bertanya, berdiskusi, dan langsung mempraktikkan Bahasa Korea bersama pengajar untuk membangun kepercayaan diri dalam berkomunikasi.
                    </p>
                  </div>
                  
                  {/* Rincian Fasilitas Privat OFFLINE */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-extrabold text-[#CD2E3A] uppercase tracking-wider mb-2.5">
                      <span>Rincian Fasilitas Privat OFFLINE:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#CD2E3A] shrink-0" />
                        <span className="font-semibold text-[10px]">Kelas Privat 1 On 1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#CD2E3A] shrink-0" />
                        <span className="font-semibold text-[10px]">E-Sertifikat</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#CD2E3A] shrink-0" />
                        <span className="font-semibold text-[10px]">Gift Merchandise Special</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#CD2E3A] shrink-0" />
                        <span className="font-semibold text-[10px]">Konsultasi Gratis Di Luar Jam Kelas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#CD2E3A] shrink-0" />
                        <span className="font-semibold text-[10px]">Video &amp; File Pembahasan Materi Sesi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#CD2E3A] shrink-0" />
                        <span className="font-semibold text-[10px]">Buku Pembelajaran</span>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Detail Kelas: Private Class, Elite Class, Pro Class */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-2.5">
                      <span>Pilihan Paket Privat OFFLINE:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Offline', 'Private Class')}
                        className="px-3 py-2.5 bg-rose-50/80 hover:bg-rose-100 text-[#CD2E3A] border border-rose-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Crown className="w-3.5 h-3.5 text-[#CD2E3A]" />
                        <span>Private Class</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Offline', 'Elite Class')}
                        className="px-3 py-2.5 bg-rose-50/80 hover:bg-rose-100 text-[#CD2E3A] border border-rose-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Gem className="w-3.5 h-3.5 text-[#CD2E3A]" />
                        <span>Elite Class</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenDetailModal('Offline', 'Pro Class')}
                        className="px-3 py-2.5 bg-rose-50/80 hover:bg-rose-100 text-[#CD2E3A] border border-rose-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5 font-bold text-xs"
                      >
                        <Zap className="w-3.5 h-3.5 text-[#CD2E3A]" />
                        <span>Pro Class</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 4. SHOWCASE KAMPUS TOP KOREA & INSPIRASI KARIR */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs mt-8 sm:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#0047A0] uppercase tracking-wider mb-2">
                  {language === 'en' ? 'Gateway to Higher Education & Global Career' : 'Gerbang Menuju Universitas Top & Karir Global'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {language === 'en'
                    ? 'Target Top Korean Universities & Official Careers with Confidence'
                    : 'Raih Kampus Impian Korea & Karir Masa Depanmu'}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {language === 'en'
                    ? 'Every class at Geumyoil is crafted to empower your ambitions—whether for conversational fluency in Kelas Essentials, achieving official TOPIK scores for prestigious SKY Universities (Seoul National, Yonsei, Korea University, KAIST) & GKS Scholarships, or securing government G-to-G employment via Kelas EPS-TOPIK.'
                    : 'Seluruh tingkatan kelas di Geumyoil dirancang untuk mengantarkan impianmu menuju kenyataan: mulai dari fondasi lancar percakapan di Kelas Essentials, pencapaian skor resmi di Kelas TOPIK untuk menembus SKY Universities (Seoul National University, Yonsei University, Korea University, KAIST) & beasiswa penuh GKS, hingga peluang kerja resmi bergaji tinggi di Korea melalui Kelas EPS-TOPIK.'}
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                    <Compass className="w-5 h-5 text-[#0047A0] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong>Kelas Essentials:</strong> Fondasi kokoh Hangeul &amp; percakapan harian untuk bekal hidup, traveling, dan interaksi natural di Korea.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-teal-50/60 border border-teal-100">
                    <GraduationCap className="w-5 h-5 text-[#16A48F] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong>Kelas TOPIK (Level 3 - 6):</strong> Syarat mutlak pendaftaran sarjana/magister universitas top Korea &amp; Beasiswa Penuh GKS (Global Korea Scholarship).
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/60 border border-rose-100">
                    <HardHat className="w-5 h-5 text-[#CD2E3A] shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong>Kelas EPS-TOPIK:</strong> Jalur resmi G-to-G BP2MI &amp; HRD Korea dengan perlindungan negara dan gaji standar regulasi Korea Selatan.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full overflow-hidden">
              <img
                src={topCampusImg}
                alt="Gedung Kampus Universitas Top Korea - Seoul National University, Yonsei, Korea University"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  Target Kampus &amp; Masa Depan Impian
                </span>
                <div className="text-lg sm:text-xl font-bold">
                  SKY Universities, Beasiswa GKS &amp; Karir Korea
                </div>
                <p className="text-xs text-slate-200 mt-1.5 max-w-md leading-relaxed">
                  Wujudkan mimpi studi dan karir resmi di Korea Selatan bersama kurikulum terarah dan mentor teruji Geumyoil.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* POPUP MODAL DETAIL KELAS */}
      {selectedModalDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {selectedModalDetail.title}
                </h3>
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border shadow-xs ${
                      selectedModalDetail.format === 'Online'
                        ? 'bg-blue-50 text-[#0047A0] border-blue-200'
                        : selectedModalDetail.format === 'Hybrid'
                        ? 'bg-teal-50 text-[#16A48F] border-teal-200'
                        : 'bg-rose-50 text-[#CD2E3A] border-rose-200'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Durasi: {selectedModalDetail.duration}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalDetail(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer shrink-0 mt-0.5"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
              
              {/* Deskripsi Program */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                  <span>Deskripsi &amp; Fokus Program</span>
                </h4>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <p>{selectedModalDetail.description}</p>
                </div>
              </div>

              {/* Cocok untuk kamu yang */}
              {selectedModalDetail.suitableFor && selectedModalDetail.suitableFor.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                    <span>Cocok untuk kamu yang:</span>
                  </h4>
                  <div
                    className="p-4 rounded-2xl border space-y-2 text-xs sm:text-sm"
                    style={{
                      backgroundColor: `${selectedModalDetail.themeColor}0D`,
                      borderColor: `${selectedModalDetail.themeColor}30`
                    }}
                  >
                    {selectedModalDetail.suitableFor.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: selectedModalDetail.themeColor }}
                        />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Spesifikasi Format & Rasio Siswa */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                  <span>Format, Durasi &amp; Kapasitas Kelas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100/70 border border-blue-200/70 flex items-center justify-center shrink-0 text-[#0047A0]">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 font-semibold leading-tight">Rasio Siswa &amp; Tutor:</div>
                      <div className="font-bold text-slate-900 text-[11px] mt-0.5 leading-snug">{selectedModalDetail.ratio}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-100/70 border border-teal-200/70 flex items-center justify-center shrink-0 text-[#16A48F]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 font-semibold leading-tight">Durasi per Sesi:</div>
                      <div className="font-bold text-slate-900 text-xs mt-0.5 leading-snug">{selectedModalDetail.duration}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-100/70 border border-rose-200/70 flex items-center justify-center shrink-0 text-[#CD2E3A]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 font-semibold leading-tight">Fleksibilitas Jadwal:</div>
                      <div className="font-bold text-slate-900 text-xs mt-0.5 leading-snug">{selectedModalDetail.schedule}</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/70 border border-emerald-200/70 flex items-center justify-center shrink-0 text-emerald-600">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-500 font-semibold leading-tight">Lokasi / Media:</div>
                      <div className="font-bold text-slate-900 text-xs mt-0.5 leading-snug">{selectedModalDetail.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keunggulan Utama */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                  <span>Keunggulan &amp; Fasilitas Program</span>
                </h4>
                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  {selectedModalDetail.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0047A0] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cakupan Silabus Pembelajaran */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                  <span>Cakupan Silabus &amp; Materi Pembelajaran</span>
                </h4>
                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  {selectedModalDetail.syllabus.map((syl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0047A0] shrink-0 mt-1.5" />
                      <span>{syl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Action Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedModalDetail(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  const programName = `${selectedModalDetail.title} [${selectedModalDetail.duration}]`;
                  setSelectedModalDetail(null);
                  onOpenConsultation(programName);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#0047A0] hover:bg-[#003882] text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <span>Konsultasi &amp; Daftar Kelas Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* POPUP MODAL INFORMASI PERUNTUKAN / SILABUS SUBMENU */}
      {activeInfoModalType && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn"
          onClick={() => setActiveInfoModalType(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/80">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                  style={{
                    backgroundColor: `${currentInfo.themeColor}18`,
                    color: currentInfo.themeColor
                  }}
                >
                  {activeInfoModalType === 'audience' ? (
                    <Users className="w-5 h-5" />
                  ) : (
                    <GraduationCap className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    {currentInfo.title}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {activeInfoModalType === 'audience'
                      ? currentInfo.audienceTitle
                      : currentInfo.syllabusTitle}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveInfoModalType(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer shrink-0"
                aria-label="Tutup Pop-up"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-slate-800">
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {activeInfoModalType === 'audience'
                  ? 'Karakteristik peserta yang direkomendasikan untuk mengikuti program ini:'
                  : 'Rincian modul kurikulum dan fokus pembelajaran yang akan dikuasai:'}
              </p>
              <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
                {(activeInfoModalType === 'audience'
                  ? currentInfo.audiencePoints
                  : currentInfo.syllabusPoints
                ).map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0 mt-1.5 shadow-xs"
                      style={{ backgroundColor: currentInfo.themeColor }}
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/70 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveInfoModalType(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-white hover:border-slate-400 transition-all cursor-pointer shadow-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
