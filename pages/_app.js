import StoreContextProvider from "../redux/StoreContextProvider";

function App({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}

export default App;
