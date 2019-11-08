// withHooks

import React, { useEffect, useState, useRef } from 'react';
import { View, StatusBar, Text, Image, ImageBackground, Animated, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { LibStyle, LibIcon, esp, LibUtils, GusjigangCurl, LibNavigation, GusjigangText, LibScroll, CacheVersion, CacheData } from 'esoftplay';
import { store } from '../../App';
import { colorBg, colorHeader, colorText, colorAccent } from '../../colors';


export interface GusjigangHomeProps {

}

export function getData(data: any, idName: string): any {
  return data.find((item: any) => item.idName == idName) || {}
}
var allData: any = []
export function getAllData(): any {
  return allData
}

export default function m(props: GusjigangHomeProps): any {

  const [data, setData] = useState([])

  useEffect(() => {
    checkVersion()
  }, [])

  function checkVersion() {
    loadData()
    new GusjigangCurl(JSON.stringify({
      query: `query{ allLastUpdates{ version } }`
    }), (res) => {
      let lastVersion = res && res.data && res.data.allLastUpdates && res.data.allLastUpdates.length > 0 && res.data.allLastUpdates[0].version || 0
      let cversion = new CacheVersion()
      cversion.load().then((v) => {
        if (v) {
          if (lastVersion > v) {
            cversion.save(lastVersion)
            fetchNewData()
          } else {
            fetchNewData()
            loadData()
          }
        } else {
          cversion.save(lastVersion)
          fetchNewData()
        }
      })
    })
  }


  function loadData() {
    let cData = new CacheData()
    cData.load().then((v) => {
      if (v) {
        allData = v
        setData(v)
      } else {
        fetchNewData()
      }
    })
  }

  function fetchNewData() {
    new GusjigangCurl(JSON.stringify({
      query: `query { allDatas{ description id idName image images module nextModule subtitle title video videos } }`
    }), (res: any) => {
      let cData = new CacheData()
      let newData = res && res.data && res.data.allDatas || []
      allData = newData
      setData(newData)
      cData.save(newData)
    })
  }

  const about = getData(data, 'didit')
  const apptitle = getData(data, 'apptitle')
  const video = getData(data, 'video')
  const gus = getData(data, 'gus')
  const ji = getData(data, 'ji')
  const gang = getData(data, 'gang')
  const implgus = getData(data, 'implgus')
  const implji = getData(data, 'implji')
  const implgang = getData(data, 'implgang')
  const desmed = getData(data, 'deskripsi-media')
  const kontak = getData(data, 'kontak')
  const foto = getData(data, 'foto')

  function toDetailImage(idName: string) {
    LibNavigation.navigate('gusjigang/detail_image', { 'idName': idName })
  }

  function toDetail(idName: string) {
    LibNavigation.navigate('gusjigang/detail', { 'idName': idName })
  }

  function toDetailTabs(idName: string) {
    LibNavigation.navigate('gusjigang/detail_tabs', { 'idName': idName })
  }
  if (data.length == 0) return <View style={{ flex: 1, backgroundColor: colorBg }} />
  return (
    <View style={{ flex: 1, backgroundColor: colorBg, paddingTop: LibStyle.STATUSBAR_HEIGHT }} >
      <StatusBar barStyle='light-content' />
      <View style={{ flexDirection: 'row', backgroundColor: colorHeader, alignItems: 'center', height: 56, paddingHorizontal: 16 }} >
        <GusjigangText
          text={apptitle && apptitle.title}
          style={{ flex: 1 }}
          fontSize={24} />
        <TouchableOpacity onPress={() => toDetail('detail-about')} >
          <LibIcon name="dots-vertical" color={colorText} size={24} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }} >
        <LibScroll>

          <View style={{ flexDirection: 'row' }} >
            <View style={{ flex: 1, backgroundColor: colorHeader, margin: 10, padding: 10 }} >
              <TouchableOpacity onPress={() => toDetailImage('detail-beranda')} style={{ flex: 1 }} >
                <View style={{ flex: 1, alignItems: 'center' }} >
                  <LibIcon name="home" size={60} color={'white'} />
                  <GusjigangText fontSize={15} style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }} text={about && about.title} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginHorizontal: 0, padding: 10 }} >
              <TouchableOpacity onPress={() => LibNavigation.navigate('gusjigang/detail_card', { 'idName': 'deskripsi-media' })} style={{ flex: 1 }} >
                <View style={{ flex: 1, alignItems: 'center' }} >
                  <LibIcon name="book-open-page-variant" size={60} color={'white'} />
                  <GusjigangText fontSize={15} style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }} text={desmed && desmed.title} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: colorHeader, margin: 10, padding: 10 }} >
              <TouchableOpacity onPress={() => LibNavigation.navigate('gusjigang/detail_card', { 'idName': 'kontak' })} style={{ flex: 1 }} >
                <View style={{ flex: 1, alignItems: 'center' }} >
                  <LibIcon name="cellphone-message" size={60} color={'white'} />
                  <GusjigangText fontSize={15} style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }} text={kontak && kontak.title} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity onPress={() => { LibNavigation.navigate('gusjigang/video', { 'idName': 'detail-video' }) }} style={{ flex: 1 }} >
              <ImageBackground source={esp.assets('video_thumb.png')} style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginTop: 0, borderRadius: 2, overflow: 'hidden' }} >
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }} >
                  <Image source={esp.assets('group_4.png')} style={{ height: 40, width: 40, opacity: 0.4 }} />
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: LibUtils.hexToRgba(colorHeader, 1), padding: 10 }} >
                  <GusjigangText text={video && video.title} fontSize={10} />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { toDetailImage('foto') }} style={{ flex: 1 }} >
              <ImageBackground source={{ uri: foto.image }} style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginTop: 0, marginHorizontal: 0, borderRadius: 2, overflow: 'hidden' }} >
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: LibUtils.hexToRgba(colorHeader, 1), padding: 10 }} >
                  <GusjigangText text={foto && foto.title} fontSize={10} />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => LibNavigation.navigate('gusjigang/detail_card', { 'idName': 'kontak' })} style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginTop: 0, padding: 10 }}  >
              <View style={{ flex: 1, alignItems: 'center' }} >
                <LibIcon name="cellphone-message" size={60} color={'white'} />
                <GusjigangText fontSize={15} style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }} text={kontak && kontak.title} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <TouchableWithoutFeedback onPress={() => { toDetail('detail-gus') }} style={{ flex: 1, }} >
              <View style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginTop: 0, marginRight: 0, height: 160, justifyContent: 'center', borderRadius: 2, overflow: 'hidden' }} >
                <ImageBackground style={{ flex: 1, }} source={{ uri: gus && gus.image }} />
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: LibUtils.hexToRgba(colorHeader, 0.5) }} >
                  <GusjigangText text={gus && gus.title} fontSize={20} style={{ fontWeight: 'bold', color: colorAccent }} />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { toDetail('detail-ji') }} style={{ flex: 1, }} >
              <View style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginTop: 0, height: 160, justifyContent: 'center', borderRadius: 2, overflow: 'hidden' }} >
                <ImageBackground style={{ flex: 1, }} source={{ uri: ji && ji.image }} />
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: LibUtils.hexToRgba(colorHeader, 0.5) }} >
                  <GusjigangText text={ji && ji.title} fontSize={20} style={{ fontWeight: 'bold', color: colorAccent }} />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { toDetail('detail-gang') }} style={{ flex: 1, }} >
              <View style={{ flex: 1, backgroundColor: colorHeader, margin: 10, marginTop: 0, marginLeft: 0, height: 160, justifyContent: 'center', borderRadius: 2, overflow: 'hidden' }} >
                <ImageBackground style={{ flex: 1, }} source={{ uri: gang && gang.image }} />
                <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: LibUtils.hexToRgba(colorHeader, 0.5) }} >
                  <GusjigangText text={gang && gang.title} fontSize={20} style={{ fontWeight: 'bold', color: colorAccent }} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </LibScroll>
      </View>
    </View>
  )
}