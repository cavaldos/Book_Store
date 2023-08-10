import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";


const root = createRoot(document.getElementById("root"));

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {}

root.render(
  <React.StrictMode>
    <Profiler id="app" onRender={onRenderCallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Profiler>
  </React.StrictMode>
);
reportWebVitals();

