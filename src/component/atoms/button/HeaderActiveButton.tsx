import { useAtom } from 'jotai'

import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'

type Props = {
    isActive: boolean,
    text: string,
    viewStyle?: StyleProp<ViewStyle>,
    onPress?: () => void
}


const HeaderActiveButton = ({ isActive, text, viewStyle, onPress }: Props) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        container: {
            height: sizeConverter(56),
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: sizeConverter(16),
        },
        text: {
            ...themeFonts.notosans_bold_14,
            lineHeight: sizeConverter(16),
            letterSpacing: -sizeConverter(0.04)
        },
        inActiveColor: {
            color: themeColor[theme].seegnal_gray,
        },
        activeColor: {
            color: themeColor[theme].seegnal_dark_gray
        }
    })
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, viewStyle]}>
            <Text style={[styles.text, isActive ? styles.activeColor : styles.inActiveColor]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default HeaderActiveButton