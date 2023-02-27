import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { sizeConverter } from '../../../utils'
import { LoginButtonView } from '../../organisms'
import { BackgroundOpacity, ModalContent } from '../../atoms'
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { RootStackParamList } from '../../../navigation'
import { StackScreenProps } from '@react-navigation/stack'

const modalSize = sizeConverter(252)

type Props = StackScreenProps<RootStackParamList, 'LoginModalScreen'>

const LoginModalScreen = ({ navigation, route }: Props) => {
  useEffect(() => {
    startAnim()
  }, [])

  const onPressKakao = () => {
    console.log('KakaoLogin!')
    onPressBack(false)
    navigation.navigate('LoginStack', { screen: 'RegistTosScreen' })
    return true
  }

  const onPressGoogle = () => {
    console.log('GoogleLogin!')
    onPressBack(false)
    navigation.navigate('LoginStack', { screen: 'RegistTosScreen' })
    return true
  }

  const onPressApple = () => {
    console.log('AppleLogin!')
    onPressBack(false)
    navigation.navigate('LoginStack', { screen: 'RegistTosScreen' })
    return true
  }

  const onPressBack = (anim: boolean) => {
    if (anim) {
      endAnim()
    }
    navigation.pop()
    return true
  }

  const startAnim = () => {
    opacityOffset.value = 1
    translateYOffset.value = 0
  }

  const endAnim = () => {
    translateYOffset.value = modalSize / 2
    opacityOffset.value = 0
  }

  const translateYOffset = useSharedValue(modalSize / 2)
  const opacityOffset = useSharedValue(0)

  const transformAnimatedStyles = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      bottom: 0,
      transform: [
        {
          translateY: withTiming(translateYOffset.value, {
            duration: 300,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    }
  })

  const opacityAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityOffset.value),
    }
  })

  return (
    <View style={styles.loginButtonViewStyle}>
      <ModalContent style={opacityAnimatedStyles}>
        <BackgroundOpacity
          onPress={() => {
            onPressBack(true)
          }}
        />
      </ModalContent>
      <ModalContent style={[transformAnimatedStyles, opacityAnimatedStyles]}>
        <LoginButtonView
          onPressBack={onPressBack}
          onPressKakao={onPressKakao}
          onPressGoogle={onPressGoogle}
          onPressApple={onPressApple}
        />
      </ModalContent>
    </View>
  )
}

const styles = StyleSheet.create({
  loginButtonViewStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
})

export default LoginModalScreen
