import type { AppProps } from "next/app";
import "ress";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
