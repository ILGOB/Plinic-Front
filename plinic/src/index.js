import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import './index.css';
import App from './App';
import Layout from './styles/layout';
import theme from './styles/theme';
// import Modal from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Layout>
      <App />
    </Layout>
    {/* <Modal /> */}
  </ThemeProvider>
);
