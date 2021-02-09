import React from 'react';
import { store, persistor } from './config/store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import WithThemeAndRoutes from '../src/withThemeAndRoutes'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* App with MUI Theme Provider and Navigations */}
        <WithThemeAndRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
