import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";

import { AppProps } from "next/app";

// eslint-disable-next-line @typescript-eslint/naming-convention
const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default App;
