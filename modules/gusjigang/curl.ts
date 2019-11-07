import React from 'react'

export default class m {

  static endpoint = 'https://api.graph.cool/simple/v1/ck1k01yfc1tgl0139x4dnfu32'

  constructor(query: any, onDone: (res: any) => void) {
    fetch(m.endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: query,
    }).then((res) => res.json()).then((v) => {
      onDone(v)
    })
  }
}