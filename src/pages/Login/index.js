import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

import {Alert, ActivityIndicator} from 'react-native';

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
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);

    try {
      await api.get('/', {
        auth: {
          username: email,
          password: password,
        },
      });
      dispatch({
        type: 'LOG_IN',
        email,
        password,
      });
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Check your email and password');
      setPassword('');
    }
    setLoading(false);
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
          onChangeText={text => setEmail(text)}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          testID="userpassword"
          value={password}
          secureTextEntry
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          onChangeText={text => setPassword(text)}
        />
        <FormButton loading={loading} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <FormButtonText>Sign In</FormButtonText>
          )}
        </FormButton>
      </Form>
    </Container>
  );
}
