interface FooterProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            お助け屋
          </h1>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">あなたの困ったを解決するパートナー</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              プライバシーポリシー
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              会社概要
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              お問い合わせ
            </button>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">© 2024 お助け屋. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}