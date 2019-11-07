// withHooks

import React from 'react';
import { Text } from 'react-native';
import { colorText } from '../../colors';


export interface GusjigangTextProps {
  text: string,
  fontSize: number,
  style?: any
}
export default function m(props: GusjigangTextProps): any {
  const { text, style, fontSize } = props
  return (
    <Text style={[{ fontSize: fontSize, lineHeight: fontSize * 1.618, fontWeight: "normal", fontStyle: "normal", letterSpacing: 0, color: colorText }, style]} >{text}</Text>
  )
}