import { useAtom } from 'jotai'

import React from 'react'
import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { themeColor, themeFonts } from '../../resources'
import { selectedTheme } from '../../stores'
import { sizeConverter } from '../../utils'
import { CustomTextInput } from '../atoms'

type CustomInfoInputProps = {
  title?: string
  value?: string
  titleStyle?: StyleProp<TextStyle>
  textStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  onChangeText?: (...args: any[]) => any
  keyboardType?: KeyboardType
  discription?: string
  placeholder?: string
}

const CustomInfoInput = ({
  value,
  title,
  titleStyle,
  textStyle,
  viewStyle,
  containerStyle,
  onChangeText,
  keyboardType,
  discription,
  placeholder,
}: CustomInfoInputProps) => {
  const [theme] = useAtom(selectedTheme)

  const styles = StyleSheet.create({
    subTitleText: {
      ...themeFonts.notosans_bold_16,
      color: themeColor[theme].seegnal_dark_gray,
      marginBottom: sizeConverter(10),
    },
    discriptionText: {
      ...themeFonts.notosans_medium_12,
      lineHeight: sizeConverter(16),
      letterSpacing: -sizeConverter(0.04),
      marginTop: sizeConverter(8),
      color: themeColor[theme].seegnal_gray,
    },
  })
  return (
    <View style={containerStyle}>
      <Text style={[styles.subTitleText, titleStyle]}>{title}</Text>
      <CustomTextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        textStyle={textStyle}
        viewStyle={viewStyle}
        onChangeText={onChangeText}
      />
      {discription && <Text style={styles.discriptionText}>{discription}</Text>}
    </View>
  )
}

CustomInfoInput.defaultProps = {
  title: '부제',
  keyboardType: 'default',
  discription: null,
}

export default CustomInfoInput
