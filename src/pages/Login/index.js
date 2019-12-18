import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native';

import logo from '../../assets/logo.png';

import {
  Container,
  Logo,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  FormButtonText,
} from './styles';

// import logo from '../../assets/LaunchScreenIcon@3x.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  function handleLogin(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form testID="login-form" onSubmit={handleLogin}>
        <FormLabel>Email</FormLabel>
        <FormInput
          testID="useremail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          onChange={event => setEmail(event.target.value)}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          testID="userpassword"
          secureTextEntry
          value={password}
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          onChange={event => setPassword(event.target.value)}
        />
        <FormButton onClick={handleLogin}>
          <FormButtonText>Sign In</FormButtonText>
        </FormButton>
      </Form>
    </Container>
  );
}
