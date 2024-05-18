import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import style from './styles'

interface ButtonProps {
    onSignIn: () => void
   title: string
}

export default function PaperButton(props: ButtonProps) {
  
  return (
    <View>
     <Button
        style={style.button}
        mode="contained"
        onPress={() => props.onSignIn()}>
        {props.title}
      </Button>
    </View>
  )
}