// withHooks

import React from 'react';
import { View, Text } from 'react-native';
import { colorHeader, colorText } from '../../colors';


export interface GusjigangItemProps {

}
export default function m(props: GusjigangItemProps): any {
  return (
    <View style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginTop: 0, marginRight: 0, padding: 10, height: 200, justifyContent: 'center' }} >
      <Text style={{ fontSize: 12.5, textAlign: 'center', fontWeight: "normal", fontStyle: "normal", lineHeight: 26.7, letterSpacing: 0, color: colorText }} >Implementasi ajaran Gus dalam Pancasila dan UUD NRI Tahun 1945</Text>
    </View>
  )
}