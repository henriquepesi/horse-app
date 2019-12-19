import React, {useState, useRef} from 'react';

import {Alert} from 'react-native';

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

  async function handleLogin() {
    try {
      await api.post('/', {
        auth: {
          username: email,
          password: password,
        },
      });
      navigation.navigate('Home');
    } catch (error) {
      // Alert.alert('Error', 'Check your user and password');
    }
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

Login.navigationOptions = {
  headerMode: 'none',
};
