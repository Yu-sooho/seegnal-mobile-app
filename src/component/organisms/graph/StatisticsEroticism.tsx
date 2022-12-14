import { useIsFocused } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { ColorBar, TitleText, UserImage } from '../../atoms'
import ColorBarView from '../../molecules/graph/ColorBarView'

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const StatisticsEroticism = () => {

  const isFocused = useIsFocused();

  const [maxWidth, setMaxWidth] = useState(sizeConverter(296))

  const styles = StyleSheet.create({
    container: {
      marginTop: sizeConverter(24)
    },
    contentView: {
      paddingTop: sizeConverter(12),
      paddingBottom: sizeConverter(16),
      marginTop: sizeConverter(16),
      paddingHorizontal: sizeConverter(16),
      width: sizeConverter(156),
      height: sizeConverter(96),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      borderRadius: sizeConverter(12)
    },
    colorBarView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: sizeConverter(12),
      width: maxWidth
    },
    textView:{
      marginTop:sizeConverter(16),
      alignItems:'center'
    },
    textStyle:{
      fontSize:sizeConverter(24),
      letterSpacing:-sizeConverter(0.06),
      lineHeight:sizeConverter(24)
    }
  })


  return (
    <View style={styles.container}>
      <View>
        <TitleText text={'평균 성욕'} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.contentView}>
          <UserImage />
          <View style={styles.textView}>
            <TitleText textStyle={styles.textStyle} text={`${10}%`} />
          </View>
        </View>
        <View style={styles.contentView}>
          <UserImage />
          <View style={styles.textView}>
            <TitleText textStyle={styles.textStyle} text={`${10}%`} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default StatisticsEroticism