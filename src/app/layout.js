import localFont from "next/font/local";
import "../styles/global.scss";


import Header from "../components/header";
import Footer from "../components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FinPro | Tus metas más cerca de ti",
  description: "Te ayudamos a conseguir tu estabilidad financiera y cumplir tus objetivos. Consigue prestamos, apertura de cuentas, autos y mucho más",
  keywords: "Finanzas personales, financiamiento, cuenta corriente"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body id="home" className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
