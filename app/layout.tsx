import 'styles/global.css';
import 'styles/chrome-bug.css';
import Navbar from 'components/ui/Navbar';
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
      <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="prod-test" ></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
