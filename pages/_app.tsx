import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
function MyApp({ Component, pageProps }: AppProps) {
  // max-w-xs, max-w-sm, max-w-md, max-w-lg, max-w-xl ... blah
  // const fetcher = (url: string) => fetch(url).then((response) => response.json());
  //const { user } = useUser();
  return (
    <SWRConfig
      value={{
        // 2초마다
        // refreshInterval:2000,
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
export default MyApp;
