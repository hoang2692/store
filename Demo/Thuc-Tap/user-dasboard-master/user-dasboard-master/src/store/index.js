import {
  configureStore,
  applyMiddleware,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false /** Disable check serializeable for actions */
    })
  },
  applyMiddleware(ReduxThunk)
);

export default store;
