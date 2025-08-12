import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "はじめに",
      icon: FileText,
      content: "株式会社リプレイス（以下、「当社」といいます）は、当社のウェブサイト（以下、「本サイト」といいます）をご利用いただくお客様（以下、「ユーザー」といいます）の個人情報を適切に保護することを重要視しています。本プライバシーポリシーは、当社が収集する情報、その利用方法、および情報保護の取り組みについて説明するものです。"
    },
    {
      id: 2,
      title: "収集する情報",
      icon: Eye,
      content: "当社は、ユーザーから以下の情報を収集することがあります：",
      list: [
        "氏名",
        "住所", 
        "電話番号",
        "メールアドレス",
        "お問い合わせ内容",
        "サイト利用履歴（クッキーやアクセスログ等）"
      ]
    },
    {
      id: 3,
      title: "情報の利用目的",
      icon: FileText,
      content: "当社は、収集した情報を以下の目的で利用します：",
      list: [
        "お問い合わせやご依頼への対応",
        "サービス提供および改善",
        "ユーザーサポート",
        "お知らせや更新情報の提供",
        "サイト利用状況の分析"
      ]
    },
    {
      id: 4,
      title: "情報の共有",
      icon: Shield,
      content: "当社は、ユーザーの個人情報を第三者に販売、貸与、または共有することはありません。ただし、以下の場合を除きます：",
      list: [
        "ユーザーの同意がある場合",
        "法令に基づく場合",
        "サービス提供に必要な業務委託先に対して必要な範囲で開示する場合（例：配送業者、支払い処理業者）"
      ]
    },
    {
      id: 5,
      title: "データの保護",
      icon: Lock,
      content: "当社は、ユーザーの個人情報を適切に保護するために、以下の措置を講じています：",
      list: [
        "SSL/TLSによる通信の暗号化",
        "個人情報へのアクセス制限",
        "セキュリティソフトウェアの導入"
      ]
    },
    {
      id: 6,
      title: "ユーザーの権利",
      icon: Shield,
      content: "ユーザーは、以下の権利を有します：",
      list: [
        "自身の個人情報へのアクセス",
        "個人情報の訂正または削除の請求",
        "個人情報の利用停止の請求"
      ],
      additional: "これらの請求は、下記の「お問い合わせ先」までご連絡ください。"
    },
    {
      id: 7,
      title: "クッキー（Cookie）について",
      icon: Eye,
      content: "本サイトでは、クッキーを使用してユーザーのサイト利用状況を分析し、サービス向上を図っています。ユーザーはブラウザ設定によりクッキーの使用を拒否できますが、その場合、サイトの一部機能が利用できない場合があります。"
    },
    {
      id: 8,
      title: "プライバシーポリシーの変更",
      icon: FileText,
      content: "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更があった場合は、本サイト上で通知いたします。変更後も本サイトを利用することで、ユーザーは変更に同意したものとみなされます。"
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
            プライバシー
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent block">
              ポリシー
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            お客様の個人情報を適切に保護し、安心してサービスをご利用いただくための取り組み
          </motion.p>
        </div>
      </motion.section>

      {/* Privacy Policy Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.id}. {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      {section.content}
                    </p>
                    
                    {section.list && (
                      <ul className="space-y-2 mb-4">
                        {section.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.additional && (
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {section.additional}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    9. お問い合わせ先
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いします：
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-900 font-semibold">株式会社リプレイス</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-indigo-600 mt-1" />
                      <div>
                        <p className="text-gray-700">住所：東京都新宿区新宿2-3-12 グレイスビル5F</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-indigo-600" />
                      <a href="mailto:info@isa-event.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        info@isa-event.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}