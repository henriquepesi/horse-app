import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

export default function Home() {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    async function loadHorses() {
      const response = await api.get('/', {
        auth: {
          username: 'foo@gmail.com',
          password: 'bar',
        },
      });
      setHorses(response.data);
    }
    loadHorses();
  });

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
