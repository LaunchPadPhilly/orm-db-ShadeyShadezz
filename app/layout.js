import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "My Web Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
