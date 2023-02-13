import { observer } from 'mobx-react-lite'
import React from 'react'
import { KeyboardType, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'
import { CustomTextInput } from '../atoms'

type CustomInfoInputProps = {
    title?: string,
    value?: string
    titleStyle?: StyleProp<TextStyle>,
    textStyle?: StyleProp<TextStyle>,
    viewStyle?: StyleProp<ViewStyle>,
    onChangeText?: (...args: any[]) => any,
    keyboardType?: KeyboardType
}

const store = createRootStore()

const CustomInfoInput = ({ value, title, titleStyle, textStyle, viewStyle, onChangeText, keyboardType }: CustomInfoInputProps) => {

    const theme = store.appStateStore.selectedTheme.get()

    const styles = StyleSheet.create({
        subTitleText: {
            ...themeFonts.notosans_bold_16,
            color: themeColor[theme].seegnal_dark_gray,
            marginBottom: sizeConverter(10)
        }
    })
    return (
        <View>
            <Text style={[styles.subTitleText, titleStyle]}>{title}</Text>
            <CustomTextInput keyboardType={keyboardType} value={value} textStyle={textStyle} viewStyle={viewStyle} onChangeText={onChangeText} />
        </View>
    )
}

CustomInfoInput.defaultProps = {
    title: '부제',
    keyboardType: 'default'
}

export default observer(CustomInfoInput)