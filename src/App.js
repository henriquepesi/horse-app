import React from 'react';
import {useSelector} from 'react-redux';

import createRouter from './routes';

export default function App() {
  const {log} = useSelector(state => state);

  const Routes = createRouter(log);

  return <Routes />;
}
