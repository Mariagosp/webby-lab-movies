import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(PersistGate, { loading: null, persistor: persistor, children: _jsx(App, {}) }) }) }));
