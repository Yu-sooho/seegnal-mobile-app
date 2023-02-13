import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'

type Props = {
    text: string,
    size?:number,
    viewStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>
}

const stores = createRootStore()


const TitleText = ({ text, viewStyle, textStyle, size }: Props) => {
    
    const theme = stores.appStateStore.selectedTheme.get()

    const styles = StyleSheet.create({
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray,
            fontSize:size
        }
    })

    return (
        <View style={[viewStyle]}>
            <Text style={[styles.titleText, textStyle]}>{text}</Text>
        </View>
    )
}

TitleText.defaultProps = {
    text: 'title',
    size:sizeConverter(24)
}

export default observer(TitleText)