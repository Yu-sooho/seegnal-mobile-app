import { useAtom } from 'jotai'

import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomButton, ModalHeaderButton } from '../../atoms'
import {
  Icon24AppleLogin,
  Icon24ArrowLeft,
  Icon24GoogleLogin,
  Icon24KakaoLogin,
} from '../../icons'
import { ModalHeader } from '../../molecules'

type LoginButtonViewProps = {
  onPressKakao?: () => {}
  onPressGoogle?: () => {}
  onPressApple?: () => {}
  onPressBack?: (anim: boolean) => {}
}

const LoginButtonView = ({
  onPressKakao,
  onPressGoogle,
  onPressApple,
  onPressBack,
}: LoginButtonViewProps) => {
  const [theme] = useAtom(selectedTheme)

  const insets = useSafeAreaInsets()

  const styles = StyleSheet.create({
    containerView: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonView: {
      minWidth: sizeConverter(360),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: sizeConverter(20),
      borderTopRightRadius: sizeConverter(20),
    },
    kakaoButton: {
      backgroundColor: '#FEE500',
      borderColor: '#FEE500',
      marginBottom: sizeConverter(16),
    },
    googleButton: {
      marginBottom: sizeConverter(16),
      width: sizeConverter(328),
      height: sizeConverter(44),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: sizeConverter(1),
      borderRadius: sizeConverter(12),
      backgroundColor: themeColor[theme].seegnal_white,
      borderColor: themeColor[theme].seegnal_google_login,
    },
    googleText: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_black,
    },
    kakaoText: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_black,
    },
    appleText: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_white,
    },
    appleButton: {
      marginBottom: sizeConverter(16),
      width: sizeConverter(328),
      height: sizeConverter(44),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: sizeConverter(1),
      borderRadius: sizeConverter(12),
      backgroundColor: themeColor[theme].seegnal_apple_login,
      borderColor: themeColor[theme].seegnal_apple_login,
    },
  })

  return (
    <View style={styles.containerView}>
      <View style={{ ...styles.buttonView, paddingBottom: insets.bottom }}>
        <ModalHeader
          leftContent={() => {
            return (
              <ModalHeaderButton
                onPress={() => {
                  onPressBack?.(true)
                }}
              >
                <Icon24ArrowLeft />
              </ModalHeaderButton>
            )
          }}
        />
        <View style={{ marginTop: sizeConverter(16) }}>
          <CustomButton
            leftIcon={<Icon24GoogleLogin />}
            onPress={onPressGoogle}
            buttonStyle={styles.googleButton}
            textStyle={styles.googleText}
            text={'구글로 시작하기'}
          />
          <CustomButton
            leftIcon={<Icon24KakaoLogin />}
            onPress={onPressKakao}
            buttonStyle={styles.kakaoButton}
            textStyle={styles.kakaoText}
            text={'카카오로 시작하기'}
          />
          {Platform.OS === 'ios' && (
            <CustomButton
              leftIcon={<Icon24AppleLogin />}
              onPress={onPressApple}
              buttonStyle={styles.appleButton}
              textStyle={styles.appleText}
              text={'Apple로 시작하기'}
            />
          )}
        </View>
      </View>
    </View>
  )
}

LoginButtonView.defaultProps = {
  onPressKakao: () => {},
  onPressGoogle: () => {},
  onPressApple: () => {},
}

export default LoginButtonView
