import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {connect, useDispatch} from 'react-redux';

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
  ButtonLogout,
  ButtonLogoutText,
} from './styles';

function Home({email, password, navigation}) {
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(false);

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
    async function loadHorses() {
      const response = await api.get('/', {
        auth: {
          username: email,
          password: password,
        },
      });
      setHorses(response.data);
    }
    loadHorses();
  }, []);

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
      <ButtonLogout onPress={handleLogout}>
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <ButtonLogoutText color="#FFF">Logout</ButtonLogoutText>
        )}
      </ButtonLogout>
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

export default connect(state => ({
  email: state.email,
  password: state.password,
}))(Home);
