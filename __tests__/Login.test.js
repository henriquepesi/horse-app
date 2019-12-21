import React from 'react';
import Login from '~/pages/Login';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

import store from '../src/store';

describe('Login component', () => {
  it('user sent email and password', () => {
    let {getByTestId} = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    const email = 'user@gmail.com';
    const password = '123456';

    fireEvent.change(getByTestId('useremail'), {
      target: {value: email},
    });

    fireEvent.change(getByTestId('userpassword'), {
      target: {value: password},
    });

    fireEvent.press(getByTestId('login-form'));

    expect(getByTestId('useremail').value).toEqual(email);
    expect(getByTestId('userpassword').value).toEqual(password);
  });
});
