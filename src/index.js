import React from 'react';

import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './routes';

import store from './store';

// import { Container } from './styles';

export default function horse_app() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#090f17" />
      <Routes />
    </Provider>
  );
}
