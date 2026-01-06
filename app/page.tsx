export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">🧠</span>
            </div>
            <span className="font-poppins font-bold text-gray-800 text-lg">Mental Health Hub</span>
          </div>
          <a 
            href="#resources" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Sumber Daya
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ✨ Terima kasih telah mengikuti sosialisasi kami
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6 leading-tight">
            Pusat Informasi <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Kesehatan Mental
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Website ini berisi rangkuman materi, tips praktis, dan berbagai sumber daya untuk mendukung perjalanan kesehatan mental Anda.
          </p>
        </div>
      </section>

      {/* Ringkasan Materi Section */}
      <section className="py-20 px-4 bg-white/60">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Rangkuman Materi Sosialisasi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🧩</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Apa Itu Kesehatan Mental?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kesehatan mental adalah kondisi dimana individu dapat menyadari kemampuannya, mengatasi stres kehidupan normal, bekerja produktif, dan berkontribusi pada komunitasnya.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Kesehatan mental sama pentingnya dengan kesehatan fisik</li>
                <li>• Semua orang memiliki kesehatan mental yang perlu dijaga</li>
                <li>• Gangguan mental dapat dialami oleh siapa saja</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Tanda-Tanda yang Perlu Diwaspadai
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kenali gejala awal agar dapat segera mendapatkan bantuan yang tepat.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Perubahan mood atau perilaku yang signifikan</li>
                <li>• Kesulitan tidur atau tidur berlebihan</li>
                <li>• Menarik diri dari aktivitas sosial</li>
                <li>• Kehilangan minat pada hal yang biasa disukai</li>
                <li>• Perubahan nafsu makan drastis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Tips Self-Care Harian
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Praktikkan kebiasaan sehat untuk menjaga kesehatan mental Anda.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Tidur cukup (7-9 jam per malam)</li>
                <li>• Olahraga teratur minimal 30 menit</li>
                <li>• Makan makanan bergizi seimbang</li>
                <li>• Luangkan waktu untuk hobi dan relaksasi</li>
                <li>• Batasi penggunaan media sosial</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Teknik Manajemen Stres
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Metode praktis yang bisa langsung diterapkan saat merasa tertekan.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Teknik pernapasan 4-7-8</li>
                <li>• Meditasi atau mindfulness 10 menit</li>
                <li>• Journaling perasaan dan pikiran</li>
                <li>• Berbicara dengan orang terpercaya</li>
                <li>• Aktivitas fisik ringan seperti jalan kaki</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infografis Tips Cepat */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Tips Praktis Sehari-hari
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌅", title: "Pagi Hari", tips: "Mulai dengan gratitude journal. Tuliskan 3 hal yang Anda syukuri." },
              { icon: "☀️", title: "Siang Hari", tips: "Istirahat sejenak. Lakukan stretching atau jalan-jalan singkat." },
              { icon: "🌙", title: "Malam Hari", tips: "Hindari layar 1 jam sebelum tidur. Baca buku atau dengar musik." },
              { icon: "💝", title: "Setiap Saat", tips: "Jangan ragu untuk meminta bantuan saat membutuhkan." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4 bg-white/60">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Sumber Daya & Bantuan
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Jangan ragu untuk mencari bantuan profesional jika diperlukan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="font-poppins font-bold text-2xl mb-4">
                📞 Layanan Darurat
              </h3>
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <p className="font-semibold mb-1">Halo Kemkes 119</p>
                  <p className="text-sm text-purple-100">Layanan konsultasi kesehatan 24/7</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <p className="font-semibold mb-1">Into The Light - 1500-454</p>
                  <p className="text-sm text-purple-100">Hotline pencegahan bunuh diri</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <p className="font-semibold mb-1">Sejiwa - 119 ext 8</p>
                  <p className="text-sm text-purple-100">Konseling kesehatan jiwa</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
                🏥 Layanan Profesional
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="font-semibold text-gray-900 mb-1">Psikolog</p>
                  <p className="text-sm text-gray-600">Untuk konseling dan terapi bicara</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4 py-2">
                  <p className="font-semibold text-gray-900 mb-1">Psikiater</p>
                  <p className="text-sm text-gray-600">Untuk diagnosis dan pengobatan medis</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold text-gray-900 mb-1">Konselor</p>
                  <p className="text-sm text-gray-600">Untuk bimbingan dan dukungan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <p className="text-gray-700">
              <strong>💡 Catatan Penting:</strong> Tidak ada yang salah dengan mencari bantuan profesional. Berkonsultasi dengan ahli kesehatan mental adalah langkah berani dan positif untuk kesejahteraan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Mitos vs Fakta */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Mitos vs Fakta
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                mitos: "Gangguan mental adalah tanda kelemahan",
                fakta: "Gangguan mental adalah kondisi medis yang dapat dialami siapa saja, bukan masalah karakter atau kelemahan pribadi."
              },
              {
                mitos: "Orang dengan gangguan mental tidak bisa bekerja",
                fakta: "Dengan perawatan yang tepat, kebanyakan orang dengan gangguan mental dapat produktif dan sukses dalam karir mereka."
              },
              {
                mitos: "Kesehatan mental hanya soal orang dewasa",
                fakta: "Anak-anak dan remaja juga dapat mengalami masalah kesehatan mental dan membutuhkan perhatian khusus."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-red-400 pl-4">
                    <p className="text-red-600 font-semibold text-sm mb-2">❌ MITOS</p>
                    <p className="text-gray-700">{item.mitos}</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="text-green-600 font-semibold text-sm mb-2">✅ FAKTA</p>
                    <p className="text-gray-700">{item.fakta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Motivasi */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-3xl text-center text-white">
          <div className="text-6xl mb-6">💜</div>
          <blockquote className="text-2xl md:text-3xl font-poppins font-medium mb-4 leading-relaxed">
            "Menjaga kesehatan mental adalah bentuk cinta pada diri sendiri"
          </blockquote>
          <p className="text-purple-100 text-lg">
            Ingatlah bahwa Anda tidak sendiri dalam perjalanan ini
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">🧠</span>
                </div>
                <span className="font-poppins font-bold text-xl">Mental Health Hub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Sumber informasi dan dukungan untuk kesehatan mental Anda
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 info@mentalhealth.com</p>
                <p>📱 +62 812-3456-7890</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ingat</h4>
              <p className="text-sm text-gray-400">
                Jika Anda atau orang terdekat mengalami krisis mental, segera hubungi layanan darurat atau profesional kesehatan mental.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 KKN Mental Health Hub. Dibuat dengan ❤️ untuk kesehatan mental yang lebih baik.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}