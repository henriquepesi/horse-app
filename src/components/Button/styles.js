import styled from 'styled-components';

export const ButtonComponent = styled.TouchableOpacity`
  background: #ff0000;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  margin: 10px 0 20px 0;
  opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const ButtonComponentText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
