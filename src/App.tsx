import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Star, Users, Shield } from 'lucide-react'
import About from './components/About'
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderHeader = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              お助け屋
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              ホーム
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`transition-colors ${currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              会社概要
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`transition-colors ${currentPage === 'contact' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              お問い合わせ
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              相談する
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => {setCurrentPage('home'); setIsMenuOpen(false)}}
              className={`block transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              ホーム
            </button>
            <button 
              onClick={() => {setCurrentPage('about'); setIsMenuOpen(false)}}
              className={`block transition-colors ${currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              会社概要
            </button>
            <a href="#contact" className="block text-gray-600 hover:text-indigo-600">お問い合わせ</a>
            <button 
              onClick={() => {setCurrentPage('contact'); setIsMenuOpen(false)}}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl"
            >
              相談する
            </button>
          </div>
        </div>
      )}
    </header>
  )

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-white">
        {renderHeader()}
        <About />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    )
  }

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        {renderHeader()}
        <PrivacyPolicy />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    )
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        {renderHeader()}
        <Contact />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                お助け屋
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                ホーム
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`transition-colors ${currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                会社概要
              </button>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">お問い合わせ</a>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                相談する
              </button>
            </nav>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => {setCurrentPage('home'); setIsMenuOpen(false)}}
                className={`block transition-colors ${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                ホーム
              </button>
              <button 
                onClick={() => {setCurrentPage('about'); setIsMenuOpen(false)}}
                className={`block transition-colors ${currentPage === 'about' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                会社概要
              </button>
              <button 
                onClick={() => {setCurrentPage('contact'); setIsMenuOpen(false)}}
                className={`block transition-colors ${currentPage === 'contact' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
              >
                お問い合わせ
              </button>
              <button 
                onClick={() => {setCurrentPage('contact'); setIsMenuOpen(false)}}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl"
              >
                相談する
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-indigo-700 text-sm font-medium">日本全国対応可能</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">催事で結ぶ、価値と笑顔</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              不用品の買取から健康の悩みまで、私たちがあなたの日常のお困りごとを
              <br className="hidden sm:block" />
              <span className="font-medium text-indigo-700">ワンストップで解決</span>いたします
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={() => setCurrentPage('contact')}
                className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 shadow-lg"
              >
                無料で相談する
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group border-2 border-indigo-600 text-indigo-600 px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-white/50"
              >
                サービスを見る
              </button>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>安心保証</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Star className="w-4 h-4" />
                <span>満足度98%</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Users className="w-4 h-4" />
                <span>累計5,000件以上</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SERVICE
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              私たちの<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">サービス</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl mb-8 overflow-hidden relative border border-orange-100">
                <img 
                  src="/buying-event.png" 
                  alt="買取催事 - ジュエリーバイバック" 
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    // 画像が読み込めない場合のフォールバック
                    e.currentTarget.style.display = 'none';
                    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextSibling) nextSibling.style.display = 'block';
                  }}
                />
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                買取催事
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                デパートや専門店での買取催事を企画・運営いたします。宝石、貴金属、ブランド品、時計などの買取イベントを専門知識と経験を活かしてサポート。会場の手配から集客まで、成功する買取催事を実現いたします。
              </p>
            </motion.div>

            <motion.div
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-8 overflow-hidden relative border border-blue-100">
                <img 
                  src="/buying-event2.png" 
                  alt="磁気治療器催事 - オンラインショッピング" 
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    // 画像が読み込めない場合のフォールバック
                    e.currentTarget.style.display = 'none';
                    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextSibling) nextSibling.style.display = 'block';
                  }}
                />
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                磁気治療器催事
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                デパートやショッピングセンターでの磁気治療器販売催事を企画・運営いたします。医療機器認定済みの安全で効果的な磁気治療器の展示販売イベントを通じて、お客様の健康をサポート。専門スタッフが丁寧な説明とアフターサービスを提供いたします。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              なぜ<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">お助け屋</span>なのか
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="group text-center p-10 rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-9 h-9 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">高品質なサービス</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                お客様の満足度を最優先に、常に高品質なサービスを提供することをお約束します。
              </p>
            </motion.div>

            <motion.div
              className="group text-center p-10 rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-9 h-9 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">経験豊富なスタッフ</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                長年の経験を持つ専門スタッフが、お客様のニーズに合わせた最適なソリューションを提供します。
              </p>
            </motion.div>

            <motion.div
              className="group text-center p-10 rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-9 h-9 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">安心・安全</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                お客様の個人情報の保護と、安全なサービス提供を徹底しています。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            今すぐお困りごとを<span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">解決しませんか？</span>
          </motion.h3>
          <motion.p 
            className="text-xl text-indigo-100 mb-16 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            お客様のお困りごとをお聞かせください。
            <br className="hidden sm:block" />
            経験豊富なスタッフが最適なソリューションをご提案いたします。
          </motion.p>
          <motion.button 
            onClick={() => setCurrentPage('contact')}
            className="group bg-white text-indigo-600 px-12 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            無料相談を申し込む
          </motion.button>
        </div>
      </motion.section>

      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App