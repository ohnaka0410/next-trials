import type { AppProps } from "next/app";
import "ress";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
