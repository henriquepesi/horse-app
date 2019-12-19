import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #090f17;
  justify-content: center;
`;

export const HorseImage = styled.Image`
  width: 185px;
`;

export const HorseList = styled.FlatList`
  margin: 0;
  padding: 0;
`;

export const HorseBlock = styled.View`
  flex-direction: row;
  align-content: stretch;
  height: 120px;
  border-bottom-color: gray;
  border-bottom-width: 2px;
`;

export const HorseInfo = styled.View`
  justify-content: space-between;
  padding: 5px 10px 15px 10px;
  text-align: right;
  flex: 1;
`;

export const HorseArrow = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background: gray;
  border-radius: 35px;

  align-self: flex-end;
`;

export const HorseArrowIcon = styled.Text`
  color: #fff;
  align-items: center;
  justify-content: center;
`;

export const HorseText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  top: 0;
`;
