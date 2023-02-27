import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { images } from '../../../resources'
import { sizeConverter } from '../../../utils'
import { MonthTitleButton } from '../../atoms/button'
import { StatisticsSeegnalItem } from '../../molecules'
import SendImageButton from '../../molecules/SendImageButton'

const StatisticsSeegnal = () => {
  const [condition, setCondition] = useState(Object)
  const [emotion, setEmotion] = useState(Object)

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: sizeConverter(16),
    },
    contentView: {
      marginTop: sizeConverter(16),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })

  return (
    <View>
      <View>
        <MonthTitleButton month={1} />
      </View>
      <View style={styles.contentView}>
        <StatisticsSeegnalItem
          text={'씨그날을 보냈어요'}
          count={0}
          image={images.img_statistics_seegnal_send}
        />
        <StatisticsSeegnalItem
          text={'씨그날을 받았어요'}
          count={0}
          image={images.img_statistics_seegnal_receive}
        />
      </View>
    </View>
  )
}

export default StatisticsSeegnal
