import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import api from '../../services/api';

import {
  Container,
  HorseImage,
  HorseList,
  HorseText,
  HorseInfo,
  HorseArrow,
  HorseArrowIcon,
  HorseBlock,
} from './styles';

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
    <Container>
      <Text>Home</Text>
      <HorseList
        data={horses}
        keyExtractor={horse => horse.id}
        renderItem={({item}) => (
          <HorseBlock>
            <HorseImage source={{uri: item.picture}} resizeMode="contain" />
            <HorseInfo>
              <HorseText> {item.name} </HorseText>
              <HorseArrow>
                <HorseArrowIcon>> </HorseArrowIcon>
              </HorseArrow>
            </HorseInfo>
          </HorseBlock>
        )}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Horses',
  headerBackTitleVisible: false,

  headerStyle: {
    backgroundColor: '#090f17',
  },
  headerTintColor: '#ff0000',
  fontSize: 30,
  fontWeight: 'bold',
  headerLeft: null,

  headerTitleStyle: {textAlign: 'center', alignSelf: 'center', fontSize: 35},
};
