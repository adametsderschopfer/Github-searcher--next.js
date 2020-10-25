import StoreContextProvider from "../redux/StoreContextProvider";

import "../styles/global.sass"

function App({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}

export default App;
