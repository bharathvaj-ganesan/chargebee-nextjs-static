import 'styles/global.css';
import 'styles/chrome-bug.css';
import Navbar from 'components/ui/Navbar';
import Footer from 'components/ui/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
