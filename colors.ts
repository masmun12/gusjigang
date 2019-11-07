import React from 'react';


export const colorText = 'white'
export const colorHeader = '#2f3a4f'
export const colorTab = '#293346'
export const colorBg = '#232C3D'
export const colorAccent = '#64ff6c'
export const colorLine = '#475266'

export function getGoldenRatio(number: number, larger?: boolean): number {
  return larger ? number * 1.618 : number * 0.618
}