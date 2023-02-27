import { useIsFocused } from '@react-navigation/native'
import { useAtom } from 'jotai'

import React, { ReactNode, useState } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'
import { ColorBar, TitleText } from '../../atoms'
import { Icon16NonSafe, Icon16Safe } from '../../icons'
import { ColorBarView } from '../../molecules'




type Props = {
  title?: string,
  subTitle?: string,
  color1: string,
  color2: string,
  percent1: number,
  percent2: number,
  textImage1?: ReactNode,
  textImage2?: ReactNode,
  text1?:string,
  text2?:string,
  contentContainerStyle?: StyleProp<ViewStyle>
}

const StatisticsColorBar = ({
  title,
  subTitle,
  color1,
  color2,
  percent1,
  percent2,
  textImage1,
  textImage2,
  text1,
  text2,
  contentContainerStyle
}: Props) => {

  const [theme] = useAtom(selectedTheme)

  const isFocused = useIsFocused();

  const [maxWidth, setMaxWidth] = useState(sizeConverter(296))

  const styles = StyleSheet.create({
    container: {

    },
    contentView: {
      paddingTop: sizeConverter(12),
      paddingBottom: sizeConverter(16),
      marginTop: sizeConverter(16),
      paddingHorizontal: sizeConverter(16),
      width: sizeConverter(328),
      height: sizeConverter(108),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      borderRadius: sizeConverter(12)
    },
    colorBarView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: sizeConverter(12),
      width: maxWidth
    },
  })


  return (
    <View style={[styles.container,contentContainerStyle]}>
      {
        title &&
        <View>
          <TitleText text={title} />
        </View>
      }
      <View style={styles.contentView}>
        <TitleText text={subTitle} />
        <View style={styles.colorBarView}>
          <ColorBarView textImage={textImage1} action={isFocused} maxWidth={maxWidth} percent={percent1} color={color1} text={text1} />
          <ColorBarView textImage={textImage2} reverse={true} action={isFocused} maxWidth={maxWidth} percent={percent2} color={color2} text={text2} />
        </View>
      </View>
    </View>
  )
}

export default StatisticsColorBar