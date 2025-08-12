import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Building } from 'lucide-react'

export default function Contact() {

  const contactInfo = [
    {
      icon: Building,
      title: "会社名",
      content: "株式会社リプレイス",
      subContent: "屋号：お助け屋"
    },
    {
      icon: MapPin,
      title: "所在地",
      content: "東京都新宿区新宿2-3-12",
      subContent: "グレイスビル5F"
    },
    {
      icon: Mail,
      title: "メール",
      content: "info@isa-event.com",
      subContent: "24時間受付"
    },
    {
      icon: Clock,
      title: "営業時間",
      content: "平日 9:00 - 18:00",
      subContent: "土日祝日はお休み"
    }
  ]

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
            お問い<span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">合わせ</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            お気軽にご相談ください。専門スタッフがお客様のご要望にお応えいたします
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.subContent}</p>
              </motion.div>
            ))}
          </div>

          {/* Google Forms Section */}
          <section id="contact" className="px-4 py-16 bg-slate-50 rounded-2xl">
            <div className="mx-auto w-full max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                お問い合わせ
              </h2>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfidvAN6YjCJvOCz1PAPNZCBy_xfO2s0YRW_chdmZei7fek2g/viewform?embedded=true"
                title="お問い合わせフォーム"
                className="w-full rounded-xl border-0 bg-white shadow"
                style={{ display: 'block', minHeight: '1000px' }}
                loading="lazy"
              />
            </div>
          </section>

          <div className="grid lg:grid-cols-1 gap-16 mt-16">
            {/* Move Additional Information to single column below form */}

            {/* Additional Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">お気軽にご相談ください</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-700">催事の企画から運営まで、豊富な経験を活かしてサポートいたします</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-700">初回のご相談は無料で承っております</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-700">お客様のご要望に合わせて最適なプランをご提案します</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">対応エリア</h3>
                <div className="space-y-3">
                  <p className="text-gray-700 font-medium">関東圏を中心に全国対応</p>
                  <p className="text-gray-600 text-sm">東京都、神奈川県、埼玉県、千葉県、茨城県、栃木県、群馬県</p>
                  <p className="text-gray-600 text-sm">※その他の地域についてもお気軽にご相談ください</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">お返事について</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-medium text-indigo-600">メール：</span>
                    24時間以内にご返信いたします
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium text-indigo-600">お電話：</span>
                    営業時間内（平日9:00-18:00）に対応
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}