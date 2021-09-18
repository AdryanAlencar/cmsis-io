import type { AppProps } from 'next/app'

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
      <script data-cfasync="false" src="./cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
      <script src="/js/jquery-3.3.1.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/popper.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/bootstrap.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/pace.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/jquery.easing.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/jquery.dd.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/metisMenu.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/ResizeSensor.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/theia-sticky-sidebar.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/highlight.pack.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/clipboard.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/jquery.magnific-popup.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/OwlCarousel2/owl.carousel.min.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>
      <script src="/js/script.js" type="02f14593bb63a44c3663d9a0-text/javascript"></script>      
    </>

  )
}
export default MyApp
