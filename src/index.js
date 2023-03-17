import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { featuring, logger } from "./middlewares";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//los enhancers para la funcionalidad del store
const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
);

//creamos el store con el reducer
const store = createStore(pokemonReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
