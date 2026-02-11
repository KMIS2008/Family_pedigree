import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from "react-redux";
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#1D1E21',
    white: '#FFFFFF',
    blue:'#0047AB',
    whiteblue: '#F7F8FA',
    green: '#59B17A',
    yellow: '#ECE595' ,
    red:"#69221d",
    morning:"rgba(255, 153, 102, 0.7)",
    evening:"rgba(72, 61, 139, 0.4)",
    allprayers:"rgba(49, 7, 91, 0.2)",
    // gold:' rgb(255, 215, 0)',
    gold: 'rgb(170,134,46)',
    blueTitle:'rgb(4, 112, 227)',

  //   morning: "rgba(217,166,140,1)",
  // evening: "rgba(80,114,119,1)",
  // allprayers: "rgba(71,102,133,1)"
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <BrowserRouter  basename="/Temple-App.-Peter-and-Paul-">
          <ThemeProvider theme = {theme}>
             <App />
          </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);

