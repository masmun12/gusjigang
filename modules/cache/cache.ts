import React from 'React'
import { AsyncStorage } from 'react-native'

export default class m {

  name: string
  constructor(name: string) {
    this.name = name
    this.save = this.save.bind(this)
    this.load = this.load.bind(this)
  }

  save(data: any): void {
    AsyncStorage.setItem(this.name, JSON.stringify(data))
  }

  load(): Promise<any> {
    return new Promise((r) => {
      AsyncStorage.getItem(this.name).then((v) => {
        if (v) {
          r(JSON.parse(v))
        } else {
          r(v)
        }
      })
    })
  }

}