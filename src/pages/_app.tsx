import type { AppProps } from "next/app";
import "ress";
import { RecoilRoot } from "recoil";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
