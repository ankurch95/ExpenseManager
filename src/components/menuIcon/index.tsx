import { Image } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import style from './styles'
import { COLORS } from '../../theme/colors'

interface MenuIconProps {
    color: string,
    img:string|any,
    fillValue:number,
    fillColor:string
}

export default function MenuIcon({ color,img,fillValue,fillColor }: MenuIconProps)  {  
  return (
    <AnimatedCircularProgress
      size={60}
      width={3}
      fill={fillValue}
      rotation={360}
      tintColor={fillColor}
      backgroundColor={color}
      childrenContainerStyle={{ backgroundColor: color }}>
      {
        (fill) => (
          <Image
            source={img}
            style={{...style.imageStyle,tintColor:color.length==9?fillColor:COLORS.WHITE}} />
        )
      }
    </AnimatedCircularProgress>
  )
}