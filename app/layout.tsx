import "./globals.css";

export const metadata = {
  title: "KKN Sosialisasi Kesehatan Mental",
  description: "Landing page KKN tentang kesehatan mental",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800 font-sans">{children}</body>
    </html>
  );
}
