// withHooks

import React from 'react';
import { View } from 'react-native';
import { LibStyle } from 'esoftplay';


export interface ComponentCardProps {
  style?: any,
  children?: any
}
export default function m(props: ComponentCardProps): any {
  return (
    <View style={[{ backgroundColor: 'white', margin: 20, borderRadius: 5, padding: 20 }, LibStyle.elevation(3), props.style]} >
      {props.children}
    </View>
  )
}