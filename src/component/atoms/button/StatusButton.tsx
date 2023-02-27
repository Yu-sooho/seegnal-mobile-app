import { useAtom } from 'jotai'

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import { STATUS_BUTTONS_TYPE, themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'

type Props = {
  item?: STATUS_BUTTONS_TYPE
  onPress?: (value?: STATUS_BUTTONS_TYPE) => void
  bottomInset?: number
}

const StatusButton = ({ item, onPress, bottomInset }: Props) => {
  const [theme] = useAtom(selectedTheme)

  const styles = StyleSheet.create({
    container: {
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      height: sizeConverter(32),
      paddingHorizontal: sizeConverter(12),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: sizeConverter(8),
      flexDirection: 'row',
    },
    textStyle: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_dark_gray,
    },
    imageStyle: {
      width: sizeConverter(16),
      height: sizeConverter(16),
      marginRight: sizeConverter(4),
    },
  })

  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) onPress(item)
      }}
      style={styles.container}
    >
      {item?.image && (
        <FastImage
          resizeMode={'contain'}
          style={styles.imageStyle}
          source={item?.image}
        />
      )}
      <View>
        <Text style={styles.textStyle}>{item?.keyword}</Text>
      </View>
    </TouchableOpacity>
  )
}

StatusButton.defaultProps = {
  text: '상태입력',
}

export default StatusButton
