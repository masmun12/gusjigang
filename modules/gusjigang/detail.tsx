// withHooks

import React, { useEffect } from 'react';
import { View, StatusBar, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { colorHeader, colorText, colorBg, colorAccent, getGoldenRatio } from '../../colors';
import { LibIcon, LibStyle, LibNavigation, GusjigangText, LibScroll, GusjigangHomeProperty, LibUtils, esp } from 'esoftplay';


export interface GusjigangDetailProps {
  title: string
}
export default function m(props: GusjigangDetailProps): any {
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
        {image != '' && <Image style={{ alignSelf: 'center', height: LibStyle.width * 9 / 16, width: LibStyle.width, }} source={{ uri: image }} />}
        <View style={[{ margin: 20, padding: 20, backgroundColor: colorHeader, borderRadius: 4 }, LibStyle.elevation(2)]} >
          {title != '' && <GusjigangText fontSize={24} text={title} style={{ marginBottom: 16 }} />}
          <GusjigangText fontSize={14} text={description} />
        </View>
      </LibScroll>
    </View>
  )
}