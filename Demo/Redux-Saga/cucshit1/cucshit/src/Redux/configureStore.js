import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootreducer from "./../Reducers/index";
import rootSaga from "../Sagas";
import thunk from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose; //kt moi truong

const sagaMiddlewere = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [thunk,sagaMiddlewere];
  const enhancers = [applyMiddleware(...middlewares)]; //  bien de truyen mang  middleware
  const store = createStore(rootreducer, composeEnhancers(...enhancers));
  sagaMiddlewere.run(rootSaga);
  return store;
  
};


export default configureStore;
