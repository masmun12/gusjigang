// withHooks

import React from 'react';
import { View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { GusjigangHomeProperty, LibUtils, LibStyle, LibNavigation, LibIcon, LibScroll, GusjigangText, ComponentCard } from 'esoftplay';
import { colorBg, colorHeader, colorText } from '../../colors';


export interface GusjigangDetail_cardProps {

}
export default function m(props: GusjigangDetail_cardProps): any {
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
        <GusjigangText
          text={title}
          style={{ flex: 1 }}
          fontSize={24} />
      </View>
      <LibScroll>
        <ComponentCard style={undefined} children={
          <GusjigangText fontSize={14} text={description.replace(/:::/g, '\n')} style={{ color: '#353535' }} />
        } />
        <View />
      </LibScroll>
    </View>
  )
}