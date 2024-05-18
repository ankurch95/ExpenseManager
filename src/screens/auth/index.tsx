import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { PASSWORD, emailRegex } from '../../helper/constant';
import PaperButton from '../../components/button';
import PaperTextInput from '../../components/paperInput';
import style from './styles';
import { useAuth } from '../../routes/context/Auth';
import PaperActivityIndicator from '../../components/paperActivityIndicator';

export default function LoginScreen() {
  const auth = useAuth();
  const [email, setEmail] = useState<string>('');
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [loaderVisibility, setLoaderVisibility] = useState<boolean>(false);


  const changeEmail = (email: string) => {
    setEmailErrorMsg('')
    setEmail(email)
  }

  const changePassword = (password: string) => {
    setPasswordErrorMsg('')
    setPassword(password)
  }

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const onSignInn = async () => {
    if (email) {
      if (emailRegex.test(email) !== false) {
        if (password) {
          if (password === PASSWORD) {
            setLoaderVisibility(true)
            startTimeout()
          } else {
            setPasswordErrorMsg('Please enter valid password.')
          }
        } else {
          setPasswordErrorMsg('Please enter password.')
        }
      } else {
        setEmailErrorMsg('Please enter valid email.')
      }
    } else {
      setEmailErrorMsg('Please enter email.')
    }
  }

  const startTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(async() => {
      setLoaderVisibility(false)
      await auth.signIn(email);      
      clearExistingTimeout()
    }, 10000);
    setTimeoutId(id);
  };

  const clearExistingTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };


  return (
    <View style={style.container}>
      <Text style={style.signInText}>Sign In</Text>

      <PaperTextInput
        inputLabel='Email'
        inputValue={email}
        changeInputValue={changeEmail}
      />
      {emailErrorMsg ? <Text style={{ color: 'red' }}>{emailErrorMsg}</Text> : null}

      <PaperTextInput
        inputLabel='Password'
        inputValue={password}
        changeInputValue={changePassword}
        isPassword={true}
        passwordVisibility={passwordVisibility}
        togglePasswordVisibility={changePasswordVisibility}
      />
      {passwordErrorMsg ? <Text style={{ color: 'red' }}>{passwordErrorMsg}</Text> : null}

      <PaperButton
        onSignIn={() => onSignInn()}
        title='Sign In' />

      <PaperActivityIndicator
        visibility={loaderVisibility} />

    </View>
  )
}