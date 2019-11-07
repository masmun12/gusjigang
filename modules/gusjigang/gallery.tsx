// withHooks

import React from 'react';
import { View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { colorBg, colorHeader, colorText } from '../../colors';
import { LibStyle, LibNavigation, LibIcon, LibScroll, GusjigangText, GusjigangHomeProperty, LibUtils, LibList } from 'esoftplay';
import { title } from 'process';


export interface GusjigangGalleryProps {

}
export default function m(props: GusjigangGalleryProps): any {
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
      <LibList
        data={images}
        pagingEnabled
        isHorizontal
        staticWidth={LibStyle.width}
        renderItem={(image) => (<Image source={{ uri: image }} style={{ height: undefined, width: undefined, flex: 1, resizeMode: 'contain' }} />)}
      />
    </View>
  )
}