import React from "react";
import { Provider } from "react-redux";

import store from "./index";

function StoreContextProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreContextProvider