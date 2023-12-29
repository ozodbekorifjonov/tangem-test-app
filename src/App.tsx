import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GenericProvider from './store/providers/generic-provider';
import GlobalStyle from './style/global-style';
import CustomRoutes from '../src/router/index';

function App(): JSX.Element {
  return (
    <GenericProvider>
      <GlobalStyle />
      <Router>
        <CustomRoutes />
      </Router>
    </GenericProvider>
  );
}

export default App;
