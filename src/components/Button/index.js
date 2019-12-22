import React from 'react';

import {ButtonComponent, ButtonComponentText} from './styles';

export default function Button(props) {
  return <ButtonComponent onPress={props.press}>{props.value}</ButtonComponent>;
}
