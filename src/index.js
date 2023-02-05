import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import App from './App';
import { thema } from './config/mui-config';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

<ThemeProvider theme={thema}>

  <App />
</ThemeProvider>
  </Provider>

);


