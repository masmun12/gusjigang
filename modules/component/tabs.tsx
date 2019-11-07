// withHooks

import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { colorHeader, colorAccent, colorText } from '../../colors';
import { GusjigangText, LibStyle } from 'esoftplay';


export interface ComponentTabsProps {
  titles: string[],
  onIndexChange: (index: number) => void,
  index: number
}
export default function m(props: ComponentTabsProps): any {
  const { titles, onIndexChange, index } = props
  return (
    <View style={{ backgroundColor: colorHeader }} >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal>
        {titles.map((title: string, i: number) => {
          let isActive = index == i
          return (
            <TouchableWithoutFeedback key={i.toString()} onPress={() => onIndexChange(i)} >
              <View style={{ paddingHorizontal: 24, paddingVertical: 10, borderBottomColor: isActive ? colorAccent : 'transparent', borderBottomWidth: 1 }} >
                <GusjigangText fontSize={16} text={title} style={{ color: isActive ? colorAccent : colorText }} />
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </ScrollView>
    </View>
  )
}