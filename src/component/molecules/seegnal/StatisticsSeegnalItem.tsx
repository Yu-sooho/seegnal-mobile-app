import { observer } from 'mobx-react-lite'
import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { TitleText } from '../../atoms'

const stores = createRootStore()

type Props = {
    image: object,
    imageStyle?: StyleProp<ImageStyle>,
    count: number,
    text: string,
    textStyle?: StyleProp<TextStyle>,
    countStyle?: StyleProp<TextStyle>,
}

const StatisticsSeegnalItem = ({ image, imageStyle, count, text, textStyle, countStyle }: Props) => {

    const theme = stores.appStateStore.selectedTheme.get()

    const styles = StyleSheet.create({
        container: {
            width: sizeConverter(156),
            height: sizeConverter(154),
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            borderRadius: sizeConverter(12),
            alignItems:'center',
            paddingTop:sizeConverter(10),
            paddingBottom:sizeConverter(16)
        },
        imageStyle: {
            width: sizeConverter(156),
            height: sizeConverter(80),
        },
        titleStyle: {
            fontSize: sizeConverter(20),
            marginBottom:sizeConverter(6),
            lineHeight:sizeConverter(24)
        },
        textStyle: {
            ...themeFonts.notosans_medium_12,
            color: themeColor[theme].seegnal_gray
        }
    })

    return (
        <View style={styles.container}>
            <Image style={[styles.imageStyle, imageStyle]} source={image} />
            <TitleText textStyle={[styles.titleStyle, countStyle]} text={`${count}번`} />
            <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </View>
    )

}

export default observer(StatisticsSeegnalItem)