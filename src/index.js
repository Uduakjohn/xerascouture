import React from 'react';
// import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
// import * as serviceWorker from "./serviceWorker";
import { createRoot } from 'react-dom/client';
// import { StrictMode } from 'react';
// import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import reportWebVitals from "./reportWebVitals"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
     <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
         <App/>
         {/* <Product/> */}
         {/* <Home/> */}
         </StateProvider>
     </React.StrictMode>
);
// serviceWorker.unregister();

// function index() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default index
reportWebVitals();