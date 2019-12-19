import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';
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

function Home(login) {
  console.log(login);
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function handleLogout() {
    setLoading(true);

    dispatch({
      type: 'LOG_IN',
    });
    // navigation.navigate('Login');
    setLoading(false);
  }

  useEffect(() => {
    async function loadHorses() {
      const response = await api.get('/', {
        auth: {
          username: login.loginData.email,
          password: login.loginData.password,
        },
      });
      setHorses(response.data);
    }
    loadHorses();
  });

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

export default connect(state => ({
  loginData: state,
}))(Home);
