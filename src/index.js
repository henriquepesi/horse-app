import React from 'react';

import {StatusBar} from 'react-native';

import Routes from './routes';

// import { Container } from './styles';

export default function horse_app() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#090f17" />
      <Routes />
    </>
  );
}
