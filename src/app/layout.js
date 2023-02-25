import "./globals.css";
//Components
import { HeaderNav } from "./headerNav";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <head />
      <body>
        <HeaderNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
