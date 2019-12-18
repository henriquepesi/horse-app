import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Home,
    },
    {
      headerMode: 'none',
    },
  ),
);

export default Routes;
