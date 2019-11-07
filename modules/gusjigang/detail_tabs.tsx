// withHooks

import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { colorBg, colorHeader, colorText } from '../../colors';
import { LibStyle, LibNavigation, LibIcon, LibScroll, GusjigangText, ComponentTabs, LibUtils, GusjigangHomeProperty } from 'esoftplay';


export interface GusjigangDetail_tabsProps {

}
export default function m(props: GusjigangDetail_tabsProps): any {
  const data = GusjigangHomeProperty.getAllData()
  let idNameDetail = LibUtils.getArgs(props, 'idName', 'detailpopup')
  const [activeTab, setActiveTab] = useState(0)

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
      {title != '' && <GusjigangText fontSize={17} text={title} style={{ margin: 16 }} />}
      {/* {subtitle != '' && <ComponentTabs titles={JSON.parse(subtitle)} index={activeTab} onIndexChange={(index) => setActiveTab(index)} />} */}
      <LibScroll>
        {image != '' && <Image style={{ alignSelf: 'center', height: LibStyle.width * 9 / 16, width: LibStyle.width, }} source={{ uri: image }} />}
        <View style={[{ padding: 20, borderRadius: 4 }, LibStyle.elevation(2)]} >
          <GusjigangText fontSize={15} text={JSON.parse(description)[activeTab].toString().replace(/:::/g, '\n')} />
        </View>
      </LibScroll>
    </View>
  )
}

