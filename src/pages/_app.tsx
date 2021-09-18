import type { AppProps } from 'next/app'
import Script from 'next/script'

import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/pace.min.css';
import '../assets/fontawesome/css/all.css';
import '../assets/themify-icons/themify-icons.min.css';
import '../assets/css/metisMenu.min.css';
import '../assets/css/github.min.css';
import '../assets/css/magnific-popup.min.css';
import '../assets/OwlCarousel2/owl.carousel.min.css';
import '../assets/OwlCarousel2/owl.theme.default.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="type" content="website" />
        <meta name="url" content="https://cmsis-io.vercel.app/" />
        <meta name="title" content="CMSIS-IO | A full and easy documentation for microcontrollers ARM based" />
        <meta name="description" content="Learn more about the CMSIS Library using an intuitive interface, comprehensive code examples and full tutorials." />        
        <meta name="image" content="https://cmsis-io.vercel.app/portrait-logo.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmsis-io.vercel.app/" />
        <meta property="og:title" content="CMSIS-IO | A full and easy documentation for microcontrollers ARM based" />
        <meta property="og:description" content="Learn more about the CMSIS Library using an intuitive interface, comprehensive code examples and full tutorials." />
        <meta property="og:image" content="https://cmsis-io.vercel.app/portrait-logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cmsis-io.vercel.app/" />
        <meta property="twitter:title" content="CMSIS-IO | A full and easy documentation for microcontrollers ARM based" />
        <meta property="twitter:description" content="Learn more about the CMSIS Library using an intuitive interface, comprehensive code examples and full tutorials." />
        <meta property="twitter:image" content="https://cmsis-io.vercel.app/portrait-logo.png" />
      </Head>
      <Component {...pageProps} />
      <Script data-cfasync="false" src="./cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script>
      <Script src="/js/jquery-3.3.1.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/popper.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/bootstrap.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/pace.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/jquery.easing.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/jquery.dd.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/metisMenu.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/ResizeSensor.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/theia-sticky-sidebar.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/highlight.pack.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/clipboard.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/jquery.magnific-popup.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/OwlCarousel2/owl.carousel.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>
      <Script src="/js/script.js" type="02f14593bb63a44c3663d9a0-text/javascript"></Script>      
    </>

  )
}
export default MyApp
