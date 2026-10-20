import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProgramSection } from './components/ProgramSection';
import { ClassesSection } from './components/ClassesSection';
import { GeumyoilPlusSection } from './components/GeumyoilPlusSection';
import { CareerSection } from './components/CareerSection';
import { ArticleSection } from './components/ArticleSection';
import { MoreSection } from './components/MoreSection';
import { LevelQuiz } from './components/LevelQuiz';
import { HangeulWidget } from './components/HangeulWidget';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

type ContextType = { handleOpenConsultation: (program?: string) => void };

function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleOpenConsultation = (program?: string) => {
    if (program) {
      setSelectedProgram(program);
    } else {
      setSelectedProgram('Kursus Bahasa Korea');
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#CD2E3A] selection:text-white flex flex-col relative">
      {/* Background Wallpaper with subtle blur */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/src/assets/images/korean_culture_pattern_bg_1791088186837.jpg"
          alt="Korean Culture Pattern Background"
          className="w-full h-full object-cover object-center filter blur-[1.5px] opacity-35 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-20">
        <Header onOpenConsultation={handleOpenConsultation} />
      </div>
      
      <main className="flex-grow pt-[72px] relative z-10">
        <Outlet context={{ handleOpenConsultation }} />
      </main>

      <div className="relative z-10">
        <Footer onOpenConsultation={() => handleOpenConsultation('Pertanyaan Footer')} />
      </div>
      
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProgram={selectedProgram}
      />
    </div>
  );
}

function Home() {
  const { handleOpenConsultation } = useOutletContext<ContextType>();
  const navigate = useNavigate();

  const handleNavigateContact = () => {
    navigate('/hubungi-kami');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePlus = () => {
    navigate('/geumyoil-plus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Hero
      onOpenConsultation={handleOpenConsultation}
      onNavigateContact={handleNavigateContact}
      onNavigatePlus={handleNavigatePlus}
    />
  );
}

function ProgramPage() {
  const { handleOpenConsultation } = useOutletContext<ContextType>();
  return <ProgramSection onOpenConsultation={handleOpenConsultation} />;
}

function ClassesPage({ category }: { category?: 'essentials' | 'topik' | 'eps-topik' | 'all' }) {
  const { handleOpenConsultation } = useOutletContext<ContextType>();
  return <ClassesSection onOpenConsultation={handleOpenConsultation} defaultCategory={category} />;
}

function GeumyoilPlus() {
  const { handleOpenConsultation } = useOutletContext<ContextType>();
  return <GeumyoilPlusSection onOpenConsultation={handleOpenConsultation} />;
}

function CareerPage() {
  return <CareerSection />;
}

function ArticlePage() {
  return <ArticleSection />;
}

function MorePage() {
  const { handleOpenConsultation } = useOutletContext<ContextType>();
  return <MoreSection onOpenConsultation={handleOpenConsultation} />;
}

function TesLevel() {
  const { handleOpenConsultation } = useOutletContext<ContextType>();
  return <LevelQuiz onOpenConsultation={handleOpenConsultation} />;
}

function Hangeul() {
  const { handleOpenConsultation } = useOutletContext<ContextType>();
  return <HangeulWidget onOpenConsultation={() => handleOpenConsultation('Bahasa Korea Pemula')} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Menu Kelas: Pilihan Kelas Online, Hybrid, & Offline dengan 3 Sub Menu */}
          <Route path="kelas" element={<ClassesPage />} />
          <Route path="classes" element={<ClassesPage />} />
          <Route path="kelas/essentials" element={<ClassesPage category="essentials" />} />
          <Route path="kelas-essentials" element={<ClassesPage category="essentials" />} />
          <Route path="kelas/topik" element={<ClassesPage category="topik" />} />
          <Route path="kelas-topik" element={<ClassesPage category="topik" />} />
          <Route path="kelas/eps-topik" element={<ClassesPage category="eps-topik" />} />
          <Route path="kelas-eps-topik" element={<ClassesPage category="eps-topik" />} />

          {/* Menu Program: Gabungan Layanan & Hubungi Kami */}
          <Route path="program" element={<ProgramPage />} />
          <Route path="layanan" element={<ProgramPage />} />
          <Route path="hubungi-kami" element={<ProgramPage />} />
          <Route path="biaya" element={<ProgramPage />} />

          {/* Menu Geumyoil+ */}
          <Route path="geumyoil-plus" element={<GeumyoilPlus />} />
          <Route path="plus" element={<GeumyoilPlus />} />

          {/* Menu Karir: Lowongan Pekerjaan */}
          <Route path="karir" element={<CareerPage />} />
          <Route path="career" element={<CareerPage />} />

          {/* Menu Artikel: Berita Studi, Beasiswa, Tips Kerja & Bahasa */}
          <Route path="artikel" element={<ArticlePage />} />
          <Route path="articles" element={<ArticlePage />} />

          {/* Menu Lainnya: Gabungan Testimoni & FAQ */}
          <Route path="lainnya" element={<MorePage />} />
          <Route path="more" element={<MorePage />} />
          <Route path="testimoni" element={<MorePage />} />
          <Route path="faq" element={<MorePage />} />

          {/* Interactive Tools */}
          <Route path="tes-level" element={<TesLevel />} />
          <Route path="hangeul" element={<Hangeul />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
