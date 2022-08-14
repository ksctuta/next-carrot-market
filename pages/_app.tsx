import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // max-w-xs, max-w-sm, max-w-md, max-w-lg, max-w-xl ... blah
  return <div className='w-full max-w-xl mx-auto'>
    <Component {...pageProps} />
    </div>
}
export default MyApp
