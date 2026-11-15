import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Clock,
  Search,
  ArrowRight,
  Sparkles,
  BookOpen,
  X,
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { ARTICLES_DATA } from '../data/articleData';
import { ArticleItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const ArticleSection: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const title = language === 'en' ? article.titleEn : article.title;
    const excerpt = language === 'en' ? article.excerptEn : article.excerpt;
    const author = article.author;

    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredArticle = ARTICLES_DATA.find((a) => a.featured) || ARTICLES_DATA[0];

  return (
    <section id="artikel" className="pt-8 pb-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {language === 'en' ? (
              <>
                Articles, Scholarship Guides &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                  Korea Updates
                </span>
              </>
            ) : (
              <>
                Panduan Beasiswa, Info Kuliah &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CD2E3A] to-[#0F4C81]">
                  Tips Karir Korea
                </span>
              </>
            )}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {language === 'en'
              ? 'Explore curated insights on GKS scholarships, EPS-TOPIK regulations, language exam secrets, and student life in South Korea.'
              : 'Temukan panduan praktis lolos beasiswa GKS, jadwal resmi EPS-TOPIK, strategi ujian TOPIK, serta pengalaman hidup mahasiswa Indonesia di Korea Selatan.'}
          </p>
        </div>

        {/* Featured Article Highlight (Only if no specific search/filter is active) */}
        {selectedCategory === 'all' && searchQuery === '' && featuredArticle && (
          <div className="mb-10 sm:mb-12 bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden group">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#CD2E3A] shadow-xs">
                    <Sparkles className="w-3 h-3" />
                    <span>{language === 'en' ? 'Featured Guide' : 'Artikel Pilihan'}</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="font-bold text-[#0047A0] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {language === 'en' ? featuredArticle.categoryLabelEn : featuredArticle.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredArticle.readTime}</span>
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-[#0047A0] transition-colors cursor-pointer leading-snug mb-3"
                  >
                    {language === 'en' ? featuredArticle.titleEn : featuredArticle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                    {language === 'en' ? featuredArticle.excerptEn : featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-medium">
                    {language === 'en' ? featuredArticle.dateEn : featuredArticle.date}
                  </div>

                  <button
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-[#0047A0] text-white text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer shadow-2xs"
                  >
                    <span>{language === 'en' ? 'Read Full' : 'Baca Artikel'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 mb-8 sm:mb-10 shadow-2xs">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'en'
                    ? 'Search articles, scholarships, or keywords...'
                    : 'Cari judul artikel, info beasiswa, atau kata kunci...'
                }
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { id: 'all', labelId: 'Semua Artikel', labelEn: 'All' },
                { id: 'scholarship', labelId: 'Beasiswa GKS', labelEn: 'Scholarships' },
                { id: 'career', labelId: 'Kerja EPS-TOPIK', labelEn: 'EPS-TOPIK' },
                { id: 'language', labelId: 'Tips Bahasa', labelEn: 'Language' },
                { id: 'living', labelId: 'Hidup di Korea', labelEn: 'Living in Korea' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {language === 'en' ? cat.labelEn : cat.labelId}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Article Cards Grid (3-Column Harmonized) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredArticles.length === 0 ? (
            <div className="col-span-full bg-white rounded-3xl border border-slate-200 p-12 text-center">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">
                {language === 'en' ? 'No Articles Found' : 'Tidak Ada Artikel Yang Cocok'}
              </h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                {language === 'en'
                  ? 'Try searching with different terms or select "All" categories.'
                  : 'Coba ganti kata kunci pencarian atau pilih kategori Semua Artikel.'}
              </p>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const title = language === 'en' ? article.titleEn : article.title;
              const excerpt = language === 'en' ? article.excerptEn : article.excerpt;
              const categoryLabel = language === 'en' ? article.categoryLabelEn : article.categoryLabel;
              const dateText = language === 'en' ? article.dateEn : article.date;

              return (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-xs font-bold text-slate-900 rounded-md shadow-2xs">
                          {categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{dateText}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <h3
                        onClick={() => setActiveArticle(article)}
                        className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#0047A0] transition-colors cursor-pointer line-clamp-2 leading-snug mb-2"
                      >
                        {title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="p-5 sm:p-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#CD2E3A] hover:text-[#a8252f] transition-colors cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Read More' : 'Selengkapnya'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="font-bold text-[#0047A0] bg-blue-50 px-2.5 py-0.5 rounded-full">
                  {language === 'en' ? activeArticle.categoryLabelEn : activeArticle.categoryLabel}
                </span>
                <span>{language === 'en' ? activeArticle.dateEn : activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {language === 'en' ? activeArticle.titleEn : activeArticle.title}
              </h2>
            </div>

            {/* Modal Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-72">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Highlights Box */}
            {((language === 'en' && activeArticle.highlightsEn) || activeArticle.highlights) && (
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 mb-6">
                <h4 className="text-xs font-bold text-[#0047A0] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>{language === 'en' ? 'Key Highlights & Takeaways' : 'Poin Kunci & Ringkasan'}</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {(language === 'en' && activeArticle.highlightsEn
                    ? activeArticle.highlightsEn
                    : activeArticle.highlights || []
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0047A0] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
              {(language === 'en' ? activeArticle.contentEn : activeArticle.content).map(
                (paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                )
              )}
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs sm:text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Close' : 'Tutup'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
