import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import Loader from '@/components/Loader';

export const metadata = {
  title: { default: 'Jade Orchid Aesthetics | Skin, considered differently', template: '%s | Jade Orchid Aesthetics' },
  description: 'Clinically-led aesthetic treatments focused on skin health, regeneration and natural-looking results across Leicester and Wolverhampton.',
  icons: { icon: '/img/old/Logo-removebg-preview-2-e1772796519966.png' },
};

// Runs before first paint: enables motion styles (unless the visitor prefers reduced motion)
// and shows the loader on the first home-page visit. Failsafe removes them if JS never starts.
const bootScript = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js-motion');if(location.pathname==='/'&&!sessionStorage.getItem('jo-visited'))d.classList.add('js-loader');setTimeout(function(){if(!window.__motionReady){d.classList.remove('js-motion','js-loader')}},6000)}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
        />
        <noscript>
          <style>{`.loader{display:none!important}.js-motion *{opacity:1!important;visibility:visible!important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <Loader />
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
