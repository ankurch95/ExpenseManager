import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'


interface PaperTextInputProps {
    inputValue: string
    changeInputValue: (email: string) => void
    inputLabel: string
    isPassword?: boolean
    passwordVisibility?: boolean
    togglePasswordVisibility?: () => void
}
export default function PaperTextInput(props:PaperTextInputProps) {
  return (
    <View>
      <TextInput
        value={props.inputValue}
        style={{ backgroundColor: 'white', marginTop: 16 }}
        mode="outlined"
        label={props.inputLabel}
        onChangeText={(text: string) => props.changeInputValue(text)}
        secureTextEntry={props.isPassword ? props.passwordVisibility : false}
        right={ 
        props.isPassword?
        <TextInput.Icon 
            icon={props.passwordVisibility ? 'eye-off' : 'eye'} 
            onPress={() => props.togglePasswordVisibility(!props.passwordVisibility) }
            /> 
            :
            null
        }
      />
    </View>
  )
}