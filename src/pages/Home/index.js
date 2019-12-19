import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

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
  const [horses, setHorses] = useState([
    {
      id: 'd2737c53-51b3-4599-90asassad0-d5ff0f26d747',
      name: 'American Beauty',
      picture:
        'https://d2vtwgzbrv2xnd.cloudfront.net/51e87826c943fd896385734287bbac27fd43c74a.jpeg',
    },
    {
      id: 'd2737c53-51b3-4599-90d0-d5ffasas0f26d741',
      name: 'Ancient Orange',
      picture:
        'https://d2vtwgzbrv2xnd.cloudfront.net/5ea73acc5924c18bec341e3b30eb6ba8ea463d28.jpeg',
    },
    {
      id: 'd2737c53-51b3-4599-9assa0d0-d5ff0f26d743',
      name: 'Apple Candy',
      picture:
        'https://d2vtwgzbrv2xnd.cloudfront.net/a7acc104b765cf17c4adeabaa2ca401ace08a5df.jpeg',
    },
    {
      id: 'd2737c53-51b3-4599-9addffd0d0-d5ff0f26d747',
      name: 'Autumn Gold',
      picture:
        'https://d2vtwgzbrv2xnd.cloudfront.net/b05678d2169739f280993fb8636ba017ff9b6787.jpeg',
    },
    {
      id: 'd2737c53-51b3-4599-9assa0d0-d5ff0f2f6da747',
      name: 'Arabian Night',
      picture:
        'https://d2vtwgzbrv2xnd.cloudfront.net/dae8d44c97b286e627a62569c2ff46bbb4575270.jpeg',
    },
    {
      id: 'd2737c53-51b3-4599-9as0d0-d5ff0f26ad747',
      name: 'Amazing Grace',
      picture:
        'https://d2vtwgzbrv2xnd.cloudfront.net/7d860756e5c7fc9df00b39b459b868a12edbac9a.jpeg',
    },
  ]);

  // useEffect(() => {
  //   async function loadHorses() {
  //     const response = await api.get('/', {
  //       auth: {
  //         username: 'foo@gmail.com',
  //         password: 'bar',
  //       },
  //     });
  //     setHorses(response.data);
  //   }
  //   loadHorses();
  // });

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
};
