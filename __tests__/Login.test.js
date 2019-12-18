import React from 'react';
import Login from '~/pages/Login';

import {render, fireEvent} from '@testing-library/react-native';

describe('Login component', () => {
  it('user sent email and password', () => {
    const email = 'user@gmail.com';
    const password = '123456';

    let {getByTestId} = render(<Login />);

    fireEvent.change(getByTestId('useremail'), {
      target: {value: email},
    });

    fireEvent.change(getByTestId('userpassword'), {
      target: {value: password},
    });

    fireEvent.press(getByTestId('login-form'));

    expect(getByTestId('useremail')).toHaveProp('value', email);
    expect(getByTestId('userpassword')).toHaveProp('value', password);
  });
});
