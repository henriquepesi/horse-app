import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        LoginPage: Login,
        HomePage: createStackNavigator(
          {
            Home,
          },
          {
            headerLayoutPreset: 'center',
          },
        ),
      },
      {
        initialRouteName: signed ? 'HomePage' : 'LoginPage',
      },
    ),
  );
