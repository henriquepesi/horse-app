import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';

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
  ButtonLogoutText,
} from './styles';

import Button from '../../components/Button';

//{email, password, navigation}

export default function Home({navigation}) {
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(false);
  const {email, password} = useSelector(state => state);

  const dispatch = useDispatch();

  function handleLogout() {
    setLoading(true);

    dispatch({
      type: 'LOG_IN',
    });
    navigation.navigate('Login');
    setLoading(false);
  }

  useEffect(() => {
    let mounted = true;

    async function loadHorses() {
      const response = await api.get('/', {
        auth: {
          username: email,
          password: password,
        },
      });
      if (mounted) {
        setHorses(response.data);
      }
    }

    loadHorses();

    return () => {
      mounted = false;
    };
  }, [email, password]);

  return (
    <Container>
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
      <Button
        loading={loading}
        value={
          loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ButtonLogoutText color="#FFF">Logout</ButtonLogoutText>
          )
        }
        press={handleLogout}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Horses',

  headerStyle: {
    backgroundColor: '#090f17',
  },
  headerTintColor: '#ff0000',
  fontSize: 30,
  headerLeft: null,

  headerTitleStyle: {textAlign: 'center', fontSize: 35},
};
