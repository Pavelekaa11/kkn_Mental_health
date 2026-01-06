export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Peduli Kesehatan Mental
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Sosialisasi Kesehatan Mental oleh Mahasiswa KKN
          </p>
          <a
            href="#edukasi"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Pelajari Sekarang
          </a>
        </div>
      </section>

      {/* EDUKASI */}
      <section id="edukasi" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Apa Itu Kesehatan Mental?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Pengertian",
              text: "Kesehatan mental adalah kondisi ketika seseorang mampu mengelola stres, bekerja secara produktif, dan berkontribusi pada lingkungan."
            },
            {
              title: "Pentingnya",
              text: "Mental yang sehat membantu kita berpikir jernih, mengendalikan emosi, dan membangun hubungan sosial yang baik."
            },
            {
              title: "Fakta",
              text: "Masalah kesehatan mental bisa dialami siapa saja dan bukan tanda kelemahan."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Tips Menjaga Kesehatan Mental
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              "Istirahat cukup dan tidur teratur",
              "Berbicara dengan orang yang dipercaya",
              "Kelola stres dengan aktivitas positif",
              "Batasi penggunaan media sosial berlebihan",
              "Jangan ragu mencari bantuan profesional"
            ].map((tip, i) => (
              <li key={i} className="bg-gray-50 p-5 rounded-lg shadow-sm">
                ✅ {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AJAKAN */}
      <section className="bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Kamu Tidak Sendirian
          </h2>
          <p className="text-gray-700 mb-6">
            Jika kamu atau orang di sekitarmu mengalami kesulitan mental,
            jangan ragu untuk mencari bantuan.
          </p>
          <a
            href="#kontak"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Lihat Kontak Bantuan
          </a>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Kontak & Layanan Bantuan
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Layanan Darurat</h3>
            <p>119 ext. 8</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Kemenkes RI</h3>
            <p>www.kemkes.go.id</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">WHO</h3>
            <p>www.who.int</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p>
          © {new Date().getFullYear()} KKN | Sosialisasi Kesehatan Mental
        </p>
      </footer>
    </main>
  );
}
