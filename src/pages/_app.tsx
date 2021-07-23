import type { AppProps } from "next/app";
import "ress";
import { TodoProvider } from "~/stores/index";

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
};

export default App;
