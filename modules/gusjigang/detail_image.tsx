// withHooks

import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { GusjigangHomeProperty, LibUtils, LibStyle, LibNavigation, LibIcon, GusjigangText, LibScroll } from 'esoftplay';
import { colorBg, colorHeader, colorText } from '../../colors';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export interface GusjigangDetail_imageProps {

}
export default function m(props: GusjigangDetail_imageProps): any {
  const data = GusjigangHomeProperty.getAllData()
  let idNameDetail = LibUtils.getArgs(props, 'idName', 'detailpopup')

  let detail = GusjigangHomeProperty.getData(data, idNameDetail)
  let { id, module, idName, title, subtitle, description, image, images, nextModule, video, videos } = detail

  const width = LibStyle.width

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
      <LibScroll isHorizontal pagingEnabled >
        {JSON.parse(images).map((image: string) => (
          <TouchableWithoutFeedback onPress={() => LibNavigation.navigate('gusjigang/zoomview', { image: image })} key={image} >
            <Image style={{ alignSelf: 'center', height: LibStyle.width * 29 / 20, width, resizeMode: 'contain' }} source={{ uri: image }} />
          </TouchableWithoutFeedback>
        ))}
      </LibScroll>
    </View>
  )
}