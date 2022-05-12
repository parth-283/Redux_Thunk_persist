import { createStore,applyMiddleware } from "redux";
import rootreducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk"

const persistConfig ={
  key:"persist-store",
  storage
}

const persistedReducer = persistReducer(persistConfig,rootreducer)
const store = createStore(
  persistedReducer,
  applyMiddleware(ReduxThunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store)
export default store;
