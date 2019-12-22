import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #090f17;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 150;
  height: 150;
  margin: 0 auto;
`;

export const Form = styled.View`
  margin: 20px;
`;

export const FormLabel = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const FormInput = styled.TextInput`
  background: #fff;
  border-radius: 5px;
  margin: 5px 0 15px;
`;

export const FormButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
