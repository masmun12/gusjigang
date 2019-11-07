// withHooks

import React from 'react';
import { View, Button } from 'react-native';
import { LibNavigation } from 'esoftplay';


export interface GusjigangIndexProps {

}
export default function m(props: GusjigangIndexProps): any {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
      <Button title="toHone" onPress={() => LibNavigation.navigate('gusjigang/home')} />
    </View>
  )
}