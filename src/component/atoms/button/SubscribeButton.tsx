import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { themeColor, themeFonts, themeType } from "../../../resources";
import createRootStore from "../../../stores";
import { sizeConverter } from "../../../utils";

type Props = {
    item: themeType,
    onPress: ({ item }: { item: themeType }) => void
}

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const SubscribeButton = ({ item, onPress }: Props) => {

    const { isActive, isSubscribe } = item

    const styles = StyleSheet.create({
        contentContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: sizeConverter(12),
            paddingVertical: sizeConverter(8),
            borderRadius: sizeConverter(8),
            backgroundColor: themeColor[theme].seegnal_main,
        },
        activeContainer: {
            backgroundColor: themeColor[theme].seegnal_light_gray2
        },
        subscribeContainer: {
            backgroundColor: themeColor[theme].seegnal_lwhite_gray
        },
        textStyle: {
            ...themeFonts.notosans_bold_14,
            color: themeColor[theme].seegnal_white
        },
        activeTextStyle: {
            color: themeColor[theme].seegnal_dark_gray
        },
    })

    const buttonText = () => {
        if (isActive) return '적용 중'
        if (isSubscribe) return '적용'
        return '구매'
    }

    const buttonStyle = () => {
        if (isActive || isSubscribe) return styles.activeTextStyle
    }

    const contentContainerStyle = () => {
        if (isActive) return styles.activeContainer
        if (isSubscribe) return styles.subscribeContainer
    }

    return (
        <TouchableOpacity onPress={() => {
            onPress({ item })
        }} style={[styles.contentContainer, contentContainerStyle()]}>
            <Text style={[styles.textStyle, buttonStyle()]}>{buttonText()}</Text>
        </TouchableOpacity>
    )
}

export default SubscribeButton 