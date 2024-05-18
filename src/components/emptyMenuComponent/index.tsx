import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './styles'
import { images } from '../../assets/images'

export default function EmptyMenuComponent() {
  return (
    <View style={style.emptyMenuView}>
      <Image
        source={images.EmptyCategory}
        style={style.emptyImageView}
        resizeMode='contain' />
      <Text style={style.emptyMenuHeading}>No data to show</Text>
      <Text style={style.emptyMenuDesc}>It seems like you didn't set spending limits for this month</Text>
    </View>
  )
}