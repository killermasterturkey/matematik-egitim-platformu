import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, X, Divide, Shuffle, FileText, Gamepad2, Grid3X3, BookOpen, Trophy, Menu, XIcon, PieChart, Calculator, Shapes, Clock, Wallet, Ruler, GraduationCap } from 'lucide-react';
import AchievementSystem from './AchievementSystem';

export default function Header() {
  const location = useLocation();
  const [showAchievements, setShowAchievements] = useState(false);
  const [showFourOperations, setShowFourOperations] = useState(false);
  const [showGrades, setShowGrades] = useState(false);
  const [showExtras, setShowExtras] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sınıf bazlı müfredat menüsü
  const gradeItems = [
    { path: '/sinif/1', label: '1. Sınıf', emoji: '🌟', color: 'from-green-400 to-emerald-500', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { path: '/sinif/2', label: '2. Sınıf', emoji: '🚀', color: 'from-blue-400 to-indigo-500', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { path: '/sinif/3', label: '3. Sınıf', emoji: '🎯', color: 'from-purple-400 to-violet-500', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { path: '/sinif/4', label: '4. Sınıf', emoji: '🏆', color: 'from-orange-400 to-amber-500', bgColor: 'bg-orange-100', textColor: 'text-orange-600' },
  ];

  const fourOperationsItems = [
    { path: '/toplama', label: 'Toplama', icon: Plus, emoji: '➕' },
    { path: '/cikarma', label: 'Çıkarma', icon: Minus, emoji: '➖' },
    { path: '/carpma', label: 'Çarpma', icon: X, emoji: '✖️' },
    { path: '/bolme', label: 'Bölme', icon: Divide, emoji: '➗' },
  ];

  const extraItems = [
    { path: '/carpim-tablosu', label: 'Çarpım Tablosu', icon: Grid3X3, emoji: '📊', isNew: true },
    { path: '/mini-oyunlar', label: 'Mini Oyunlar', icon: Gamepad2, emoji: '🎮', isNew: true },
    { path: '/hikayeli-problemler', label: 'Hikayeli Problemler', icon: BookOpen, emoji: '📖', isNew: true },
  ];

  const topicItems = [
    { path: '/kesirler', label: 'Kesirler', icon: PieChart, emoji: '🍕', isNew: true },
    { path: '/ondalik-sayilar', label: 'Ondalık Sayılar', icon: Calculator, emoji: '🔢', isNew: true },
    { path: '/geometri', label: 'Geometri', icon: Shapes, emoji: '📐', isNew: true },
    { path: '/saat-zaman', label: 'Saat ve Zaman', icon: Clock, emoji: '🕐', isNew: true },
    { path: '/para-hesaplama', label: 'Para Hesaplama', icon: Wallet, emoji: '💰', isNew: true },
    { path: '/olcu-birimleri', label: 'Ölçü Birimleri', icon: Ruler, emoji: '📏', isNew: true },
  ];

  const navItems = [
    { path: '/karisik', label: 'Karışık', icon: Shuffle, emoji: '🎯' },
    { path: '/testler', label: 'Testler', icon: FileText, emoji: '📝' },
  ];

  const isFourOperationsActive = ['/toplama', '/cikarma', '/carpma', '/bolme'].includes(location.pathname);
  const isGradesActive = location.pathname.startsWith('/sinif/') || location.pathname === '/siniflar';
  const isExtrasActive = ['/carpim-tablosu', '/mini-oyunlar', '/hikayeli-problemler'].includes(location.pathname);
  const isTopicsActive = ['/kesirler', '/ondalik-sayilar', '/geometri', '/saat-zaman', '/para-hesaplama', '/olcu-birimleri'].includes(location.pathname);

  return (
    <>
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <motion.div
                whileHover={{ rotate: 12 }}
                className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-lg"
              >
                <span className="text-3xl">🎓</span>
              </motion.div>
              <span className="text-xl font-black text-white hidden md:block whitespace-nowrap">Matematik Dünyası</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {/* 4 İşlem Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setShowFourOperations(true)}
                  onMouseLeave={() => setShowFourOperations(false)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                    isFourOperationsActive
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-lg">🔢</span>
                  <span>4 İşlem</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showFourOperations && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setShowFourOperations(true)}
                      onMouseLeave={() => setShowFourOperations(false)}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[200px] z-50"
                    >
                      {fourOperationsItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center gap-3 px-5 py-3 hover:bg-purple-50 transition-colors cursor-pointer ${
                            location.pathname === item.path ? 'bg-purple-100 text-purple-600 font-bold' : 'text-gray-700'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-bold whitespace-nowrap">{item.label}</span>
                          <span className="text-lg">{item.emoji}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sınıflar Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setShowGrades(true)}
                  onMouseLeave={() => setShowGrades(false)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                    isGradesActive
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Sınıflar</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showGrades && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setShowGrades(true)}
                      onMouseLeave={() => setShowGrades(false)}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[200px] z-50"
                    >
                      {gradeItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center gap-3 px-5 py-3 hover:${item.bgColor} transition-colors cursor-pointer ${
                            location.pathname.startsWith(item.path) ? `${item.bgColor} ${item.textColor} font-bold` : 'text-gray-700'
                          }`}
                        >
                          <span className="text-2xl">{item.emoji}</span>
                          <span className="font-bold whitespace-nowrap">{item.label}</span>
                          <span className="ml-auto bg-gradient-to-r px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{
                            backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                          }}>
                            MEB
                          </span>
                        </Link>
                      ))}
                      <Link
                        to="/siniflar"
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:from-purple-600 hover:to-pink-600 transition-all"
                      >
                        <GraduationCap className="w-4 h-4" />
                        <span>Tüm Sınıfları Gör</span>
                      </Link>
                      <div className="px-5 py-2 bg-gray-50 border-t border-gray-100">
                        <p className="text-xs text-gray-500 font-medium">
                          Türkiye Yüzyılı Maarif Modeli
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Extras Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setShowExtras(true)}
                  onMouseLeave={() => setShowExtras(false)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                    isExtrasActive
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-lg">🎮</span>
                  <span>Eğlence</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showExtras && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setShowExtras(true)}
                      onMouseLeave={() => setShowExtras(false)}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[220px] z-50"
                    >
                      {extraItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center gap-3 px-5 py-3 hover:bg-purple-50 transition-colors cursor-pointer ${
                            location.pathname === item.path ? 'bg-purple-100 text-purple-600 font-bold' : 'text-gray-700'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-bold whitespace-nowrap">{item.label}</span>
                          <span className="text-lg">{item.emoji}</span>
                          {item.isNew && (
                            <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                              YENİ
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Konular Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setShowTopics(true)}
                  onMouseLeave={() => setShowTopics(false)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                    isTopicsActive
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-lg">📚</span>
                  <span>Konular</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                <AnimatePresence>
                  {showTopics && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setShowTopics(true)}
                      onMouseLeave={() => setShowTopics(false)}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[220px] z-50"
                    >
                      {topicItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center gap-3 px-5 py-3 hover:bg-purple-50 transition-colors cursor-pointer ${
                            location.pathname === item.path ? 'bg-purple-100 text-purple-600 font-bold' : 'text-gray-700'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-bold whitespace-nowrap">{item.label}</span>
                          <span className="text-lg">{item.emoji}</span>
                          {item.isNew && (
                            <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                              YENİ
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                      location.pathname === item.path
                        ? 'bg-white text-purple-600 shadow-lg'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              ))}

              {/* Achievements Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAchievements(true)}
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap shadow-lg flex items-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                <span>Rozetler</span>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAchievements(true)}
                className="p-2 bg-yellow-400 rounded-xl"
              >
                <Trophy className="w-6 h-6 text-yellow-900" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-white/20 rounded-xl"
              >
                {mobileMenuOpen ? (
                  <XIcon className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden pb-4"
              >
                <div className="bg-white/10 backdrop-blur rounded-2xl p-4 space-y-2">
                  <p className="text-white/80 text-sm font-bold px-2">Sınıflar (MEB Müfredatı)</p>
                  <div className="grid grid-cols-2 gap-2">
                    {gradeItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold ${
                          location.pathname.startsWith(item.path)
                            ? 'bg-white text-purple-600'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <span className="text-xl">{item.emoji}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/siniflar"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl font-bold ${
                      location.pathname === '/siniflar'
                        ? 'bg-white text-purple-600'
                        : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white'
                    }`}
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>Tüm Sınıfları Gör</span>
                  </Link>

                  <p className="text-white/80 text-sm font-bold px-2 pt-2">4 İşlem</p>
                  <div className="grid grid-cols-2 gap-2">
                    {fourOperationsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold ${
                          location.pathname === item.path
                            ? 'bg-white text-purple-600'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <span>{item.emoji}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>

                  <p className="text-white/80 text-sm font-bold px-2 pt-2">Eğlence</p>
                  <div className="grid grid-cols-1 gap-2">
                    {extraItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold ${
                          location.pathname === item.path
                            ? 'bg-white text-purple-600'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <span>{item.emoji}</span>
                        <span>{item.label}</span>
                        {item.isNew && (
                          <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            YENİ
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  <p className="text-white/80 text-sm font-bold px-2 pt-2">Konular</p>
                  <div className="grid grid-cols-2 gap-2">
                    {topicItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold ${
                          location.pathname === item.path
                            ? 'bg-white text-purple-600'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <span>{item.emoji}</span>
                        <span className="text-sm">{item.label}</span>
                        {item.isNew && (
                          <span className="ml-auto bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            YENİ
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  <p className="text-white/80 text-sm font-bold px-2 pt-2">Diğer</p>
                  <div className="grid grid-cols-2 gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold ${
                          location.pathname === item.path
                            ? 'bg-white text-purple-600'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <span>{item.emoji}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Achievement System Modal */}
      {showAchievements && (
        <AchievementSystem onClose={() => setShowAchievements(false)} />
      )}
    </>
  );
}
