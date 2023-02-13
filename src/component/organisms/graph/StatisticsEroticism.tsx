import { useIsFocused } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { themeColor } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { TitleText, UserImage } from '../../atoms'

const stores = createRootStore()

const StatisticsEroticism = () => {

  const theme = stores.appStateStore.selectedTheme.get()

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

export default observer(StatisticsEroticism)