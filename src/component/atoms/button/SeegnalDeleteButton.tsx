import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const SeegnalDeleteButton = () => {

    const styles = StyleSheet.create({
        container:{
            width:sizeConverter(35),
            height:sizeConverter(20),
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:themeColor[theme].seegnal_light_gray1,
            borderRadius:sizeConverter(4)
        },
        textStyle:{
            ...themeFonts.notosans_medium_12,
            color:themeColor[theme].seegnal_gray
        }
    })

    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.textStyle}>삭제</Text>
        </TouchableOpacity>
    )
}

export default SeegnalDeleteButton