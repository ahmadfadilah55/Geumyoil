import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

export interface Translations {
  nav: {
    home: string;
    classes: string;
    classesAll: string;
    classesEssentials: string;
    classesTopik: string;
    classesEpsTopik: string;
    program: string;
    programServices: string;
    programContact: string;
    services: string;
    plus: string;
    career: string;
    articles: string;
    more: string;
    moreTestimonials: string;
    moreFaq: string;
    contact: string;
    testimonials: string;
    faq: string;
    freeConsultation: string;
  };
  hero: {
    greeting: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    desc: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bullet4: string;
    ctaConsult: string;
    ctaContact: string;
    alsoAvailable: string;
    globalTitle: string;
    globalSub: string;
    card1Title: string;
    card1Sub: string;
    card2Title: string;
    card2Sub: string;
    card3Title: string;
    card3Sub: string;
    detail: string;
  };
  contact: {
    title: string;
    desc: string;
    waTitle: string;
    waDesc: string;
    waBtn: string;
    igTitle: string;
    igDesc: string;
    igBtn: string;
    hoursTitle: string;
    hoursDesc: string;
    hoursWeek: string;
    hoursSun: string;
    hoursBtn: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    waLabel: string;
    waPlaceholder: string;
    progLabel: string;
    modeLabel: string;
    msgLabel: string;
    msgPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    officeTitle: string;
    officeSub: string;
    getDirections: string;
    hoursLabel: string;
    methodsBadge: string;
    methodsTitle: string;
    methodsDesc: string;
    optGroup: string;
    optPrivateOnline: string;
    optHybrid: string;
    optPrivateOffline: string;
  };
  plus: {
    badge: string;
    titlePrefix: string;
    desc: string;
    searchPlaceholder: string;
    tabAll: string;
    tabAsia: string;
    tabEurope: string;
    tabMideast: string;
    tabBipa: string;
    targetCert: string;
    learningFocus: string;
    consultBtn: string;
    whyBadge: string;
    whyTitle: string;
    whySub: string;
    why1Title: string;
    why1Desc: string;
    why2Title: string;
    why2Desc: string;
    why3Title: string;
    why3Desc: string;
    why4Title: string;
    why4Desc: string;
    ctaBadge: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    chatWa: string;
  };
  footer: {
    tagline: string;
    social: string;
    address: string;
    backToTop: string;
    rights: string;
  };
  modal: {
    title: string;
    desc: string;
    name: string;
    namePlaceholder: string;
    wa: string;
    waPlaceholder: string;
    program: string;
    mode: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    cancel: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: 'Beranda',
      classes: 'Kelas',
      classesAll: 'Semua Pilihan Kelas',
      classesEssentials: 'Kelas Essentials',
      classesTopik: 'Kelas TOPIK',
      classesEpsTopik: 'Kelas EPS-TOPIK',
      program: 'Program',
      programServices: 'Program & Layanan',
      programContact: 'Hubungi Kami & Konsultasi',
      services: 'Layanan',
      plus: 'Geumyoil+',
      career: 'Karir',
      articles: 'Artikel',
      more: 'Lainnya',
      moreTestimonials: 'Testimoni Alumni',
      moreFaq: 'Tanya Jawab (FAQ)',
      contact: 'Hubungi Kami',
      testimonials: 'Testimoni',
      faq: 'FAQ',
      freeConsultation: 'Konsultasi Gratis'
    },
    hero: {
      greeting: '안녕하세요 여러분',
      titlePrefix: 'Wujudkan Mimpimu Ke',
      titleHighlight: 'Korea Selatan',
      titleSuffix: 'Bersama Geumyoil.',
      desc: 'Belajar Bahasa Korea dari nol hingga mahir, persiapkan diri meraih sertifikat TOPIK untuk melanjutkan studi atau tingkatkan peluang bekerja di Korea Selatan melalui program EPS-TOPIK. Semua dalam satu pusat pembelajaran, didampingi mentor berpengalaman dengan program yang terarah dan fleksibel. Tersedia kelas Online maupun Offline, sehingga kamu bisa belajar dengan cara yang paling sesuai dengan kebutuhanmu.',
      bullet1: 'Konsultasi studi & karir',
      bullet2: 'Pengajar Berpengalaman',
      bullet3: 'Bimbingan Visa & Dokumen Resmi',
      bullet4: 'Cicilan 0% Tanpa Kartu Kredit',
      ctaConsult: 'Konsultasi Gratis Sekarang',
      ctaContact: 'Hubungi Kami',
      alsoAvailable: 'Juga Tersedia:',
      globalTitle: 'Geumyoil+ Kursus 8 Bahasa Dunia',
      globalSub: '(Jepang, Mandarin, Jerman, dll)',
      card1Title: 'Belajar Bahasa (TOPIK 1-6)',
      card1Sub: 'Online & Offline Class',
      card2Title: 'Studi Beasiswa (GKS / Self-Funded)',
      card2Sub: 'Mentoring Kampus & Essay',
      card3Title: 'Kerja Resmi EPS-TOPIK (G2G)',
      card3Sub: 'Jalur Resmi BP2MI & HRD Korea',
      detail: 'Detail >'
    },
    contact: {
      title: 'Konsultasikan Impianmu Ke Korea Bersama Geumyoil',
      desc: 'Punya pertanyaan mengenai program belajar bahasa, persiapan ujian TOPIK/EPS-TOPIK, kuliah, atau jalur kerja resmi? Tim konsultan kami siap mendampingi langkahmu.',
      waTitle: 'WhatsApp Resmi',
      waDesc: 'Respons cepat setiap hari untuk konsultasi langsung.',
      waBtn: 'Chat WhatsApp Sekarang',
      igTitle: 'Instagram',
      igDesc: 'Update materi harian, tips beasiswa & info terbaru.',
      igBtn: 'Kunjungi Instagram',
      hoursTitle: 'Jam Operasional',
      hoursDesc: 'Konsultasi online & tatap muka cabang Bandung.',
      hoursWeek: 'Senin - Sabtu: 08.00 - 18.00 WIB',
      hoursSun: 'Minggu & Libur Nasional: Reservasi Khusus',
      hoursBtn: 'Jadwalkan Konsultasi',
      formTitle: 'Kirim Pesan Konsultasi',
      formDesc: 'Isi formulir di bawah ini, tim konsultan kami akan segera menghubungi kamu via WhatsApp.',
      nameLabel: 'Nama Lengkap *',
      namePlaceholder: 'Masukkan nama lengkap kamu',
      waLabel: 'Nomor WhatsApp *',
      waPlaceholder: 'Contoh: 081234567890',
      progLabel: 'Program Pilihan *',
      modeLabel: 'Metode Belajar *',
      msgLabel: 'Pertanyaan atau Pesan Tambahan',
      msgPlaceholder: 'Ceritakan targetmu (misal: ingin mulai dari nol, target TOPIK Level 3, persiapan beasiswa tahun depan, dll)...',
      submitBtn: 'Kirim Konsultasi ke WhatsApp',
      successTitle: 'Formulir Terkirim!',
      successDesc: 'Pesan kamu telah diteruskan ke WhatsApp resmi Geumyoil. Jika WhatsApp belum terbuka otomatis, silakan klik tombol WhatsApp di atas.',
      officeTitle: 'Kantor Offline',
      officeSub: 'Kunjungan tatap muka & sesi kelas offline',
      getDirections: 'Buka Petunjuk Arah Google Maps',
      hoursLabel: 'Jam Kerja:',
      methodsBadge: 'Pilihan Program Belajar',
      methodsTitle: 'Tersedia Beragam Pilihan Kelas',
      methodsDesc: 'Hubungi kami untuk mendapatkan rincian kurikulum, ketersediaan jadwal batch terbaru, dan rekomendasi program terbaik.',
      optGroup: 'Kelas interaktif 3–5 murid',
      optPrivateOnline: 'Intensif 1 on 1 via Zoom',
      optHybrid: 'Kombinasi Online & Offline cafe',
      optPrivateOffline: 'Tatap muka langsung 100% di Bandung'
    },
    plus: {
      badge: 'Program Bahasa Global',
      titlePrefix: 'Jelajahi Dunia dengan',
      desc: 'Tidak hanya Bahasa Korea! Kini Geumyoil menghadirkan 8 kursus bahasa strategis dunia dengan kurikulum berstandar internasional, tutor berpengalaman, dan pendampingan sertifikasi resmi.',
      searchPlaceholder: 'Cari bahasa / sertifikasi...',
      tabAll: 'Semua Bahasa (8)',
      tabAsia: 'Asia (3)',
      tabEurope: 'Eropa (3)',
      tabMideast: 'Timur Tengah (1)',
      tabBipa: 'BIPA (1)',
      targetCert: 'Target Sertifikasi:',
      learningFocus: 'Fokus Pembelajaran:',
      consultBtn: 'Konsultasi',
      whyBadge: 'Standar Pembelajaran Internasional',
      whyTitle: 'Mengapa Belajar Bahasa di Geumyoil+?',
      whySub: 'Pengalaman belajar yang dirancang intensif, terarah, dan disesuaikan dengan tujuan karir atau akademismu.',
      why1Title: 'Tutor Berpengalaman & Bersertifikat',
      why1Desc: 'Belajar bersama pengajar Bahasa Korea yang berpengalaman dalam mengajar dan memiliki sertifikasi TOPIK, sehingga pembelajaran lebih terarah dan sesuai dengan kebutuhan siswa.',
      why2Title: 'Materi Terstruktur & Praktis',
      why2Desc: 'Materi pembelajaran disusun secara bertahap, mulai dari Bahasa Korea dasar, conversation, hingga persiapan TOPIK dan EPS-TOPIK, dengan fokus pada kemampuan yang benar-benar dibutuhkan siswa.',
      why3Title: 'Pilihan Group & Private',
      why3Desc: 'Tersedia kelas private 1-on-1 dengan pembelajaran yang lebih personal serta pilihan kelas kelompok untuk belajar bersama dengan suasana yang lebih interaktif.',
      why4Title: 'E-Sertifikat Penyelesaian Program',
      why4Desc: 'Setelah menyelesaikan program, siswa akan mendapatkan E-Sertifikat dari Geumyoil sebagai bukti telah mengikuti dan menyelesaikan program pembelajaran.',
      ctaBadge: 'Konsultasi Program Gratis',
      ctaTitle: 'Belum Tahu Bahasa Mana yang Paling Tepat Buatmu?',
      ctaDesc: 'Diskusikan rencana studi ke luar negeri, persiapan karier, atau kebutuhan pelatihan bahasa kantormu bersama tim konsultan Geumyoil+.',
      ctaBtn: 'Konsultasi Sekarang',
      chatWa: 'Chat WhatsApp'
    },
    footer: {
      tagline: 'South Korea Study and Career Consultant.',
      social: 'Media Sosial',
      address: 'Alamat Kantor',
      backToTop: 'Kembali Ke Atas',
      rights: 'All rights reserved.'
    },
    modal: {
      title: 'Konsultasi Program Gratis',
      desc: 'Diskusikan rencana belajar bahasa, persiapan ujian, kuliah, atau kerja resmi ke Korea Selatan bersama konsultan Geumyoil.',
      name: 'Nama Lengkap',
      namePlaceholder: 'Nama lengkap Anda',
      wa: 'Nomor WhatsApp',
      waPlaceholder: 'Contoh: 081234567890',
      program: 'Program yang Diminati',
      mode: 'Pilihan Format Belajar',
      notes: 'Catatan / Pertanyaan Tambahan',
      notesPlaceholder: 'Ceritakan kendala, target skor, atau jadwal belajar yang Anda inginkan...',
      submit: 'Mulai Konsultasi via WhatsApp',
      cancel: 'Batal'
    }
  },
  en: {
    nav: {
      home: 'Home',
      classes: 'Classes',
      classesAll: 'All Classes Overview',
      classesEssentials: 'Essentials Class',
      classesTopik: 'TOPIK Exam Class',
      classesEpsTopik: 'EPS-TOPIK Exam Class',
      program: 'Programs',
      programServices: 'Courses & Programs',
      programContact: 'Contact & Consultation',
      services: 'Services',
      plus: 'Geumyoil+',
      career: 'Careers',
      articles: 'Articles',
      more: 'More',
      moreTestimonials: 'Alumni Stories',
      moreFaq: 'FAQ',
      contact: 'Contact Us',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      freeConsultation: 'Free Consultation'
    },
    hero: {
      greeting: '안녕하세요 여러분 (Hello Everyone)',
      titlePrefix: 'Realize Your Dream to',
      titleHighlight: 'South Korea',
      titleSuffix: 'With Geumyoil.',
      desc: 'Learn Korean from beginner to advanced, prepare to achieve the TOPIK certificate for higher education or boost your opportunities to work in South Korea through the official EPS-TOPIK program. All in one learning hub, guided by experienced mentors with structured and flexible programs. Available in Online and Offline classes tailored to your lifestyle.',
      bullet1: 'Study & Career Consultation',
      bullet2: 'Experienced Native & Certified Tutors',
      bullet3: 'Official Visa & Document Support',
      bullet4: '0% Installment Schemes Without Credit Card',
      ctaConsult: 'Free Consultation Now',
      ctaContact: 'Contact Us',
      alsoAvailable: 'Also Available:',
      globalTitle: 'Geumyoil+ 8 Global Language Courses',
      globalSub: '(Japanese, Mandarin, German, etc.)',
      card1Title: 'Language Learning (TOPIK 1-6)',
      card1Sub: 'Online & Offline Classes',
      card2Title: 'Study & Scholarships (GKS / Self-Funded)',
      card2Sub: 'Campus & Essay Mentoring',
      card3Title: 'Official Work EPS-TOPIK (G2G)',
      card3Sub: 'Official Government BP2MI & HRD Korea',
      detail: 'Details >'
    },
    contact: {
      title: 'Consult Your Korean Dream with Geumyoil',
      desc: 'Have questions about language programs, TOPIK/EPS-TOPIK exam preparation, university admission, or official employment pathways? Our consultant team is ready to assist your journey.',
      waTitle: 'Official WhatsApp',
      waDesc: 'Fast daily response for direct live consultation.',
      waBtn: 'Chat on WhatsApp Now',
      igTitle: 'Instagram',
      igDesc: 'Daily learning updates, scholarship tips & class announcements.',
      igBtn: 'Visit Instagram',
      hoursTitle: 'Operating Hours',
      hoursDesc: 'Online & face-to-face consultation at our Bandung branch.',
      hoursWeek: 'Monday - Saturday: 08:00 - 18:00 WIB',
      hoursSun: 'Sunday & Public Holidays: By Appointment',
      hoursBtn: 'Schedule Consultation',
      formTitle: 'Send Consultation Inquiry',
      formDesc: 'Fill out the form below, and our educational consultants will contact you directly via WhatsApp.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'Enter your full name',
      waLabel: 'WhatsApp Number *',
      waPlaceholder: 'e.g. +6281234567890',
      progLabel: 'Preferred Program *',
      modeLabel: 'Learning Format *',
      msgLabel: 'Additional Inquiries or Goals',
      msgPlaceholder: 'Tell us about your learning goals (e.g. beginner level, target TOPIK Level 3, scholarship intake next year, etc)...',
      submitBtn: 'Send Consultation to WhatsApp',
      successTitle: 'Inquiry Sent!',
      successDesc: 'Your request has been forwarded to Geumyoil official WhatsApp. If WhatsApp did not open automatically, please click the WhatsApp button above.',
      officeTitle: 'Offline Office',
      officeSub: 'In-person visits & offline classroom sessions',
      getDirections: 'Open Google Maps Directions',
      hoursLabel: 'Office Hours:',
      methodsBadge: 'Learning Method Options',
      methodsTitle: 'Multiple Class Formats Available',
      methodsDesc: 'Contact us for detailed curriculum outlines, upcoming batch schedules, and customized program recommendations.',
      optGroup: 'Interactive group of 3–5 students',
      optPrivateOnline: 'Intensive 1-on-1 via Zoom',
      optHybrid: 'Combination of Online & Cafe Offline',
      optPrivateOffline: '100% Face-to-face in Bandung'
    },
    plus: {
      badge: 'Global Language Program',
      titlePrefix: 'Explore the World with',
      desc: 'Not only Korean! Geumyoil now provides 8 strategic world language courses with international standard curriculum, experienced tutors, and official certification preparation.',
      searchPlaceholder: 'Search language / certification...',
      tabAll: 'All Languages (8)',
      tabAsia: 'Asia (3)',
      tabEurope: 'Europe (3)',
      tabMideast: 'Middle East (1)',
      tabBipa: 'BIPA (1)',
      targetCert: 'Target Certifications:',
      learningFocus: 'Learning Focus:',
      consultBtn: 'Consult',
      whyBadge: 'International Learning Standards',
      whyTitle: 'Why Study Languages at Geumyoil+?',
      whySub: 'Intensive, structured learning experiences tailored to your career and academic aspirations.',
      why1Title: 'Certified Instructors',
      why1Desc: 'Guided by graduates of top domestic & international universities and seasoned native speakers.',
      why2Title: 'CEFR-Aligned Curriculum',
      why2Desc: 'Syllabus synchronized with official global certifications (TOPIK, JLPT, HSK, Goethe, IELTS).',
      why3Title: 'Group & Private Formats',
      why3Desc: 'Available in interactive small groups (3-5 students) or 1-on-1 intensive private sessions with flexible timing.',
      why4Title: 'Official E-Certificate',
      why4Desc: 'Receive verified completion certificates to bolster your scholarship dossier or professional CV.',
      ctaBadge: 'Free Program Consultation',
      ctaTitle: 'Not Sure Which Language Fits You Best?',
      ctaDesc: 'Discuss your study abroad pathways, career preparation, or corporate language training with our Geumyoil+ consultants.',
      ctaBtn: 'Consult Now',
      chatWa: 'Chat on WhatsApp'
    },
    footer: {
      tagline: 'South Korea Study and Career Consultant.',
      social: 'Social Media',
      address: 'Office Address',
      backToTop: 'Back To Top',
      rights: 'All rights reserved.'
    },
    modal: {
      title: 'Free Program Consultation',
      desc: 'Discuss your language learning, test prep, university study, or official employment plans to South Korea with Geumyoil consultants.',
      name: 'Full Name',
      namePlaceholder: 'Your full name',
      wa: 'WhatsApp Number',
      waPlaceholder: 'e.g. +6281234567890',
      program: 'Program of Interest',
      mode: 'Preferred Study Format',
      notes: 'Additional Notes / Goals',
      notesPlaceholder: 'Share your background, target score, or preferred learning schedule...',
      submit: 'Start WhatsApp Consultation',
      cancel: 'Cancel'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('geumyoil_language');
    return (saved === 'en' || saved === 'id') ? saved : 'id';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('geumyoil_language', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
