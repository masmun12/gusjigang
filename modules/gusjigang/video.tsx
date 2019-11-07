// withHooks

import React from 'react';
import { View, StatusBar, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { colorBg, colorHeader, colorText } from '../../colors';
import { LibStyle, LibNavigation, LibIcon, LibScroll, GusjigangText, LibUtils, GusjigangHomeProperty, GusjigangVideo_item } from 'esoftplay';

export interface GusjigangVideoProps {

}
export default function m(props: GusjigangVideoProps): any {
  const data = GusjigangHomeProperty.getAllData()
  let idNameDetail = LibUtils.getArgs(props, 'idName', 'detailpopup')

  let detail = GusjigangHomeProperty.getData(data, idNameDetail)
  let { id, module, idName, title, subtitle, description, image, images, nextModule, video, videos } = detail

  return (
    <View style={{ flex: 1, backgroundColor: colorBg, paddingTop: LibStyle.STATUSBAR_HEIGHT }} >
      <StatusBar barStyle='light-content' />
      <View style={{ flexDirection: 'row', backgroundColor: colorHeader, alignItems: 'center', height: 56, paddingHorizontal: 16 }} >
        <TouchableOpacity onPress={() => LibNavigation.back()} style={{ marginRight: 10 }} >
          <LibIcon name="arrow-left" color={colorText} size={24} />
        </TouchableOpacity>
      </View>
      <LibScroll>
        {
          JSON.parse(videos).map((_v: string, i: number) => (
            <GusjigangVideo_item key={i} code={_v} title={JSON.parse(subtitle)[i]} />
          ))
        }
        <View />
      </LibScroll>
    </View>
  )
}