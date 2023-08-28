import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import CesiumViewer from './CesiumViewer';
import reportWebVitals from './reportWebVitals';
import "cesium/Build/Cesium/Widgets/widgets.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
//const [containerLoaded, setContainer] = React.useState(
root.render(
  <React.StrictMode>
    {/* <CesiumViewer /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
