import { useAtom } from 'jotai'

import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'
import { TitleText } from '../../atoms'



type Props = {
  title1: string
  title2: string,
  contentContainerStyle?:StyleProp<ViewStyle>
}

const StatisticsPhysiology = ({ title1, title2, contentContainerStyle }: Props) => {

  const [theme] = useAtom(selectedTheme)
  
  const styles = StyleSheet.create({
    container: {
      marginTop: sizeConverter(24)
    },
    contentView: {
      width: sizeConverter(156),
      height: sizeConverter(84),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      borderRadius: sizeConverter(12),
      alignItems: 'center',
      justifyContent:'space-between',
      padding:sizeConverter(16)
    },
    textView: {
      marginTop: sizeConverter(16),
      alignItems: 'center'
    },
    textStyle: {
      fontSize: sizeConverter(24),
      letterSpacing: -sizeConverter(0.06),
      lineHeight: sizeConverter(24)
    },
    titleText: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_gray
    }
  })


  return (
    <View style={[styles.container,contentContainerStyle]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.contentView}>
          <Text style={styles.titleText}>{title1}</Text>
          <TitleText text={`${'N일'}`} textStyle={{ fontSize: sizeConverter(20) }} />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.titleText}>{title2}</Text>
          <TitleText text={`${'N일'}`} textStyle={{ fontSize: sizeConverter(20) }} />
        </View>
      </View>
    </View>
  )
}

export default StatisticsPhysiology