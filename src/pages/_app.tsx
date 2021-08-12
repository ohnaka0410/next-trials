import type { AppProps } from "next/app";
import "ress";
import { Provider } from "jotai";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
