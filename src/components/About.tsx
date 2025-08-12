import { motion } from 'framer-motion'
import { Building, MapPin, Calendar, User, Briefcase, Shield } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.section 
        className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            会社<span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">概要</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            私たちは多様なサービスを通じて、お客様の生活をより豊かにすることを使命としています
          </motion.p>
        </div>
      </motion.section>

      {/* Company Information */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Company Details Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">会社情報</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">会社名・屋号</p>
                    <p className="text-lg font-semibold text-gray-900">株式会社リプレイス</p>
                    <p className="text-md text-indigo-600 font-medium">屋号：お助け屋</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">本店所在地</p>
                    <p className="text-lg text-gray-900 leading-relaxed">
                      東京都新宿区新宿2-3-12<br />
                      グレイスビル5F
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">設立</p>
                    <p className="text-lg font-semibold text-gray-900">令和6年5月20日</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">代表者</p>
                    <p className="text-lg font-semibold text-gray-900">鈴木 達也</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Content Card */}
            <motion.div
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 border border-indigo-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">事業内容</h2>
              </div>

              <div className="space-y-4">
                {[
                  "経営コンサルティング",
                  "フランチャイズチェーンシステムによる加盟店の募集及び経営指導",
                  "宝石、貴金属及びブランド品の買取及び販売",
                  "各種商品の販売代理店業",
                  "古物営業法に基づく古物商",
                  "不動産の売買、賃貸、管理及びそれらの仲介",
                  "前各号に付帯関連する一切の業務"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              私たちの<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">価値観</span>
            </h2>
            <p className="text-xl text-gray-600">お客様との信頼関係を大切にし、持続可能な価値を提供します</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "信頼と安心",
                description: "お客様の信頼を最優先に、透明性の高いサービスを提供します"
              },
              {
                icon: User,
                title: "お客様第一",
                description: "一人ひとりのお客様のニーズに寄り添ったサービスを心がけます"
              },
              {
                icon: Briefcase,
                title: "専門性",
                description: "各分野の専門知識を活かし、最高品質のサービスを提供します"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}