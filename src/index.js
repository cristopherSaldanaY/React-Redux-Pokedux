import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//creamos el store con el reducer
const store = createStore(pokemonReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
