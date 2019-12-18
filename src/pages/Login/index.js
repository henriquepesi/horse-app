import React, {useState, useRef} from 'react';

import logo from '../../assets/logo.png';
import api from '../../services/api';

import {
  Container,
  Logo,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  FormButtonText,
} from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  async function handleLogin(event) {
    event.preventDefault();

    await api.get('/', {
      auth: {
        username: email,
        password: password,
      },
    });
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form testID="login-form" onSubmit={handleLogin}>
        <FormLabel>Email</FormLabel>
        <FormInput
          testID="useremail"
          value={email}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          onChange={event => setEmail(event.target.value)}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          testID="userpassword"
          value={password}
          secureTextEntry
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          onChange={event => setPassword(event.target.value)}
        />
        <FormButton onPress={handleLogin}>
          <FormButtonText>Sign In</FormButtonText>
        </FormButton>
      </Form>
    </Container>
  );
}
