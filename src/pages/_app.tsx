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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
