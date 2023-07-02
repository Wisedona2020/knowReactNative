import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import{View,Text,Button} from 'react-native';
import Constants from 'expo-constants';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
