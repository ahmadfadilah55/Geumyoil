import { ServiceProgram, PricingPlan, AlumniStory, FAQItem, HangeulWord } from '../types';

export const SERVICE_PROGRAMS: ServiceProgram[] = [
  {
    id: 'lang-basic',
    title: 'Belajar Bahasa Korea',
    subtitle: 'Program Kelas Reguler, Kelas TOPIK, dan Kelas EPS-TOPIK',
    category: 'language',
    badge: 'Program Terfavorit',
    description: 'Pilihan program kelas bahasa Korea komprehensif mulai dari pemula, hobi, hingga persiapan ujian sertifikasi dan kerja.',
    features: [
      'Kelas Reguler (Dasar hingga Percakapan)',
      'Kelas TOPIK (Persiapan Kuliah/Beasiswa)',
      'Kelas EPS-TOPIK (Persiapan Kerja)',
      'Pilihan Metode: Group, Private, Hybrid & Offline'
    ],
    targetAudience: 'Pemula, Hobi, Mahasiswa, Calon Pekerja',
    duration: 'Bervariasi (16x Pertemuan)',
    scheduleOption: 'Online & Offline',
    popular: true,
    iconName: 'BookOpen',
    pricingList: [],
    image: 'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'study-gks',
    title: 'Study Abroad ke Korea',
    subtitle: 'Konsultasi persiapan kuliah dan beasiswa ke Korea Selatan.',
    category: 'study',
    badge: 'Konsultasi Studi',
    description: 'Layanan konsultasi dan panduan cara kuliah atau mendapatkan beasiswa ke Korea. Jika konsumen belum memiliki basic bahasa Korea, akan dialihkan ke program Kelas TOPIK terlebih dahulu.',
    features: [
      'Konsultasi Jalur Studi & Beasiswa',
      'Review Dokumen & Persyaratan',
      'Tips & Trik Lolos Universitas/Beasiswa',
      'Dialihkan ke Kelas TOPIK jika belum ada basic'
    ],
    targetAudience: 'Calon mahasiswa dan pencari beasiswa ke Korea.',
    duration: 'Menyesuaikan Kebutuhan',
    scheduleOption: 'Online & Offline',
    popular: true,
    iconName: 'GraduationCap',
    pricingList: [],
    image: '/src/assets/images/graduated_student_toga_1791089395828.jpg'
  },
  {
    id: 'career-eps',
    title: 'Bekerja ke Korea',
    subtitle: 'Konsultasi dan panduan jalur kerja resmi ke Korea.',
    category: 'career',
    badge: 'Konsultasi Kerja',
    description: 'Konsultasi komprehensif tentang bagaimana cara bekerja di Korea secara resmi (Jalur G to G / BP2MI). Jika konsumen belum memiliki basic bahasa Korea, akan dialihkan ke program Kelas EPS-TOPIK terlebih dahulu.',
    features: [
      'Konsultasi Jalur Kerja Resmi (EPS)',
      'Panduan Pendaftaran BP2MI',
      'Orientasi Budaya & Sistem Kerja',
      'Dialihkan ke Kelas EPS-TOPIK jika belum ada basic'
    ],
    targetAudience: 'Calon pekerja migran yang ingin berangkat ke Korea.',
    duration: 'Menyesuaikan Kebutuhan',
    scheduleOption: 'Online & Offline',
    popular: true,
    iconName: 'Briefcase',
    pricingList: [],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'online-group',
    name: 'Online Class (Group)',
    tagline: 'Kelas interaktif dengan grup kecil 3-5 murid',
    price: 1499000,
    originalPrice: 1999000,
    installmentMonths: 3,
    badge: 'Best Value',
    suitableFor: 'Belajar bersama teman atau mencari kelas yang interaktif',
    features: [
      'Kelas 3 – 5 Murid Per Kelas',
      'E-Sertifikat & Online Class',
      '16 x Pertemuan (90 Menit)',
      '1 Minggu 4x Pertemuan / Menyesuaikan',
      'Video & File Pembahasan Materi Pertemuan',
      'Materi Pembelajaran Bahasa Korea / TOPIK',
      'Bisa Upgrade / Konversi ke Privat Class'
    ]
  },
  {
    id: 'online-privat',
    name: 'Online Class (Privat)',
    tagline: 'Kelas intensif 1-on-1 dengan jadwal fleksibel',
    price: 2999000,
    originalPrice: 3499000,
    installmentMonths: 3,
    popular: true,
    badge: 'Paling Populer',
    suitableFor: 'Fokus intensif 1-on-1 dari mana saja',
    features: [
      'Kelas Privat 1 On 1',
      'E-Sertifikat & Online Class',
      'Gift Merchandise Special',
      '16 x Pertemuan (90 Menit)',
      '1 Minggu 4x Pertemuan / Menyesuaikan',
      'Konsultasi Gratis Di Luar Jam Kelas',
      'Video & File Pembahasan Materi Pertemuan',
      'Buku Pembelajaran Bahasa Korea / TOPIK'
    ]
  },
  {
    id: 'hybrid-privat',
    name: 'Hybrid Privat Class',
    tagline: 'Kombinasi kelas online & offline tatap muka',
    price: 3499000,
    originalPrice: 3999000,
    installmentMonths: 6,
    badge: 'Premium Flex',
    suitableFor: 'Keseimbangan antara online & interaksi langsung',
    features: [
      'Kelas Privat 1 On 1',
      'E-Sertifikat',
      'Gift Merchandise Special',
      '10 x Pertemuan Online (90 Menit)',
      '6 x Pertemuan Offline at the cafe (60 Menit)',
      '1 Minggu 4x Pertemuan / Menyesuaikan',
      'Konsultasi Gratis Di Luar Jam Kelas',
      'Video & File Pembahasan Materi Pertemuan',
      'Buku Pembelajaran Bahasa Korea / TOPIK'
    ]
  },
  {
    id: 'offline-privat',
    name: 'Offline Privat Class',
    tagline: 'Fokus maksimal dengan tatap muka langsung 100%',
    price: 3999000,
    originalPrice: 4499000,
    installmentMonths: 6,
    badge: 'Intensif',
    suitableFor: 'Pendampingan langsung secara tatap muka penuh',
    features: [
      'Kelas Privat 1 On 1',
      'E-Sertifikat',
      'Gift Merchandise Special',
      '16 x Pertemuan Offline at the cafe (90 Menit)',
      '1 Minggu 4x Pertemuan / Menyesuaikan',
      'Konsultasi Gratis Di Luar Jam Kelas',
      'File Pembahasan Materi Pertemuan',
      'Buku Pembelajaran Bahasa Korea / TOPIK'
    ]
  }
];

export const ALUMNI_STORIES: AlumniStory[] = [
  {
    id: 'alumni-1',
    name: 'RINI FARISTIAGORE',
    university: 'Chung-Ang University',
    location: 'Seoul, South Korea',
    destination: 'Chung-Ang University (Seoul)',
    category: 'study',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    year: '2024',
    badge: 'Studi S1 / Bahasa di Seoul',
    quote: 'Pendampingannya sangat membantu dan komunikatif. Berkat Geumyoil, impian saya untuk kuliah di Korea Selatan akhirnya terwujud!',
    fullStory: 'Dibimbing intensif dari persiapan dokumen, konsultasi universitas, hingga proses adaptasi di kampus Chung-Ang University.'
  },
  {
    id: 'alumni-2',
    name: 'LEONARDO FERRI',
    university: 'Sejong University',
    location: 'Seoul, South Korea',
    destination: 'Sejong University (Seoul)',
    category: 'study',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    year: '2025',
    badge: 'Kuliah di Seoul',
    quote: 'Dari belajar Bahasa Korea sampai akhirnya bisa kuliah di Korea, Geumyoil sangat membantu dan selalu fast response!',
    fullStory: 'Mulai dari pemula belajar bahasa hingga bimbingan administrasi pendaftaran kampus Sejong University yang responsif.'
  },
  {
    id: 'alumni-3',
    name: 'ADITYA DWI CHANDRA',
    university: 'Youngsan University',
    location: 'Busan, South Korea',
    destination: 'Youngsan University (Busan)',
    category: 'study',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    year: '2025',
    badge: 'Certificate of Admission (CoA)',
    quote: 'Geumyoil membantu saya untuk konsultasi studi di korea selatan, dari pemberkasan hingga mendapatkan Certificate of Admission (CoA)',
    fullStory: 'Konsultasi lengkap dan terstruktur membantu pengurusan dokumen hingga penerbitan CoA resmi dari Youngsan University.'
  },
  {
    id: 'alumni-4',
    name: 'ROSMAYANTI',
    university: 'Youngsan University',
    location: 'Busan, South Korea',
    destination: 'Youngsan University (Busan)',
    category: 'study',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    year: '2020',
    badge: 'Kuliah di Busan',
    quote: 'Cara mengajarnya enak dan fleksibel, komunikasinya juga mudah. Terima kasih Geumyoil sudah membantu mewujudkan impian saya!',
    fullStory: 'Proses belajar yang komunikatif dan pendampingan yang ramah membuka jalan meraih pendidikan tinggi di Korea Selatan.'
  },
  {
    id: 'alumni-5',
    name: 'AHMAD FADILAH',
    university: 'Youngsan University',
    location: 'Busan, South Korea',
    destination: 'Youngsan University (Busan)',
    category: 'study',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    year: '2022',
    badge: 'Kuliah di Busan',
    quote: 'Mulai dari belajar Bahasa Korea hingga persiapan kuliah, semuanya dibimbing dengan sabar dan komunikatif. 감사합니다, Geumyoil!',
    fullStory: 'Bimbingan komprehensif mulai dari dasar Bahasa Korea hingga tuntas proses keberangkatan kuliah ke Youngsan University.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Apakah bisa belajar dari nol jika sama sekali belum mengerti Hangeul?',
    answer: 'Sangat bisa! Lebih dari 80% siswa kami memulai dari nol tanpa pengetahuan Bahasa Korea sebelumnya. Kurikulum kami dirancang secara bertahap dari pengenalan abjad Hangeul, pelafalan, tata bahasa dasar, hingga percakapan praktis.'
  },
  {
    id: 'faq-3',
    category: 'study',
    question: 'Apakah biaya kuliah di Korea Selatan bisa dicover beasiswa penuh?',
    answer: 'Ya! Terdapat program beasiswa pemerintah Korea yaitu GKS (Global Korea Scholarship) yang menanggung 100% biaya kuliah, tunjangan hidup bulanan penuh, tiket pesawat PP, serta asuransi kesehatan. Kami menyediakan program bimbingan khusus pendaftaran GKS ini.'
  },
  {
    id: 'faq-4',
    category: 'payment',
    question: 'Bagaimana cara berkonsultasi dan mendaftar di Geumyoil?',
    answer: 'Anda dapat langsung berkonsultasi melalui menu Hubungi Kami atau menghubungi WhatsApp kami di 0896-3366-3799. Tim kami akan membantu memilihkan program belajar yang paling tepat dan menjadwalkan kelas Anda.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'Apa perbedaan metode pembelajaran Online dan Offline?',
    answer: 'Kelas Online dilakukan live via Zoom / Google Meet dengan pengajar interaktif dan akses rekaman modul. Kelas Offline dilaksanakan tatap muka di cafe terdekat daerah Kota Bandung.'
  },
  {
    id: 'faq-2',
    category: 'career',
    question: 'Berapa batasan umur dan syarat untuk bekerja di Korea lewat program EPS-TOPIK?',
    answer: 'Persyaratan resmi pemerintah (BP2MI / HRD Korea) untuk program G2G EPS-TOPIK adalah: Berusia 18 - 39 tahun, pendidikan minimal SMP/SMA sederajat, tidak buta warna parsial/total, serta tidak memiliki riwayat kejahatan berat atau pencekal perjalanan internasional.'
  },

];

export const HANGEUL_WORDS: HangeulWord[] = [
  {
    id: 'h-1',
    hangul: '안녕하세요',
    romanization: 'An-nyeong-ha-se-yo',
    meaning: 'Halo / Apa Kabar (Sapaan Sopan)',
    category: 'Salam Sehari-hari',
    audioText: 'Annyeonghaseyo',
    tips: 'Sapaan paling populer di Korea. Digunakan kapan saja dalam situasi formal atau sopan.'
  },
  {
    id: 'h-2',
    hangul: '감사합니다',
    romanization: 'Gam-sa-ham-ni-da',
    meaning: 'Terima Kasih',
    category: 'Ungkapan Kesopanan',
    audioText: 'Gamsahamnida',
    tips: 'Ucapkan ini sembari menundukkan kepala sedikit untuk memberikan rasa hormat.'
  },
  {
    id: 'h-3',
    hangul: '한국어',
    romanization: 'Han-gug-eo',
    meaning: 'Bahasa Korea',
    category: 'Kosakata Dasar',
    audioText: 'Hangugeo',
    tips: 'Terdiri dari kata Hanguk (Korea) + Eogua/Eo (Bahasa).'
  },
  {
    id: 'h-4',
    hangul: '합격',
    romanization: 'Hap-gyeok',
    meaning: 'Lulus / Lolos Ujian',
    category: 'Motivasi Belajar',
    audioText: 'Hapgyeok',
    tips: 'Kata yang sangat dicari oleh peserta ujian TOPIK & EPS-TOPIK!'
  },
  {
    id: 'h-5',
    hangul: '꿈은 이루어진다',
    romanization: 'Kkum-eun I-ru-eo-jin-da',
    meaning: 'Mimpi Akan Menjadi Kenyataan',
    category: 'Kata Mutiara',
    audioText: 'Kkumeun Irueojinda',
    tips: 'Slogan terkenal di Korea Selatan yang membakar semangat anak muda.'
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: 'Bandung',
    address: 'Jl Mars Dirgahayu I RT 001 RW 022 No 22, Bandung, Jawa Barat',
    phone: '+6289633663799',
    hours: 'Senin - Sabtu: 08.00 - 18.00 WIB'
  }
];
