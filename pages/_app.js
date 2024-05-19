import '../styles.css'
import Script from 'next/script'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3670089965415680" 
        strategy="afterInteractive" 
        async 
        crossorigin="anonymous"
      />
    </>
  )
}