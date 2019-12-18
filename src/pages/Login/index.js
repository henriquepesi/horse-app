import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
  }

  return (
    <View testID="login-form" onSubmit={handleLogin}>
      <Text>Email</Text>
      <TextInput
        testID="useremail"
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

      <Text>Password</Text>
      <TextInput
        testID="userpassword"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <TouchableOpacity onClick={handleLogin}>login</TouchableOpacity>
    </View>
  );
}
