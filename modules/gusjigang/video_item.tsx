// withHooks

import React from 'react';
import { View } from 'react-native';
import { colorHeader } from '../../colors';
import { LibStyle, GusjigangText } from 'esoftplay';
import { WebView } from 'react-native-webview';

export interface GusjigangVideo_itemProps {
  code: string,
  title: string
}
export default function m(props: GusjigangVideo_itemProps): any {
  const { code, title } = props
  const width = LibStyle.width
  const height = width * 9 / 16
  return (
    <View style={{ backgroundColor: colorHeader, margin: 0, marginBottom: 0 }} >
      <WebView
        style={{ width, height }}
        javaScriptEnabled={true}
        source={{ uri: "https://www.youtube.com/embed/" + code + "?rel=0&autoplay=1&mute=2&&showinfo=0&controls=1&modestbranding=1" }}
      />
      <View style={{ padding: 8 }} >
        <GusjigangText text={title} fontSize={18} />
      </View>
    </View>
  )
}