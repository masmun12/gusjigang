// withHooks

import React from 'react';
import { View, Image, StatusBar, TouchableOpacity } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { LibStyle, LibUtils, LibNavigation, LibIcon } from 'esoftplay';
import { colorBg, colorHeader, colorText } from '../../colors';


export interface GusjigangZoomviewProps {

}

export default function m(props: GusjigangZoomviewProps): any {
  const image = LibUtils.getArgs(props, 'image')

  return (
    <View style={{ flex: 1, backgroundColor: colorBg, paddingTop: LibStyle.STATUSBAR_HEIGHT }} >
      <StatusBar barStyle='light-content' />
      <View style={{ flexDirection: 'row', backgroundColor: colorHeader, alignItems: 'center', height: 56, paddingHorizontal: 16 }} >
        <TouchableOpacity onPress={() => LibNavigation.back()} style={{ marginRight: 10 }} >
          <LibIcon name="arrow-left" color={colorText} size={24} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} >
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          // onZoomAfter={this.logOutZoomState}
          style={{
            padding: 10,
          }}
        >
          <Image key={image} style={{ alignSelf: 'center', height: LibStyle.width * 29 / 20, width: LibStyle.width, resizeMode: 'contain' }} source={{ uri: image }} />
        </ReactNativeZoomableView>
      </View>
    </View>

  )
}