import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { sizeConverter } from '../../../utils'
import { MonthTitleButton } from '../../atoms/button'
import SendImageButton from '../../molecules/SendImageButton'

const StatisticsSeegnal = () => {

    const [condition,setCondition] = useState(Object)
    const [emotion,setEmotion] = useState(Object)
  
  const styles = StyleSheet.create({
    container:{
      paddingHorizontal:sizeConverter(16)
    },
    contentView:{
      marginTop:sizeConverter(16),
      flexDirection:'row',
      justifyContent:'space-between'
    }
  })


    return (
        <View>
            <View>
                <MonthTitleButton month={1} />
            </View>
            <View style={styles.contentView}>
                <SendImageButton disabled item={condition} text={'씨그날을 보냈어요'} count={1} />
                <SendImageButton disabled item={emotion} text={'씨그날을 받았어요'} count={1} />
            </View>
        </View>
    )
}

export default StatisticsSeegnal