import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { themeColor, themeFonts, themeType } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'
import { SubscribeButton } from '../atoms'

type Props = {
    item: themeType,
    index: number,
    onPress: (({ item }: { item: themeType }) => void)
}

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const ThemeListItem = ({ item, index, onPress }: Props) => {

    const styles = StyleSheet.create({
        contentContainer: {
            flexDirection: 'row',
            width: sizeConverter(328),
            height: sizeConverter(56),
        },
        imageStyle: {
            width: sizeConverter(56),
            height: sizeConverter(56),
            backgroundColor: themeColor[theme].seegnal_white,
            borderRadius: sizeConverter(28)
        },
        textStyle: {
            marginLeft: sizeConverter(12),
            justifyContent: 'center',
            height: sizeConverter(56),
            flex: 1
        },
        titleText: {
            ...themeFonts.notosans_bold_14,
            lineHeight: sizeConverter(16),
            color: themeColor[theme].seegnal_dark_gray
        },
        bodyText: {
            ...themeFonts.notosans_medium_12,
            marginTop: sizeConverter(2),
            color: themeColor[theme].seegnal_gray
        },
        buttonView: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.contentContainer}>
            <View>
                <FastImage style={styles.imageStyle} />
            </View>
            <View style={styles.textStyle}>
                <Text style={styles.titleText}>{item?.title}</Text>
                <Text style={styles.bodyText}>{item?.description}</Text>
            </View>
            <View style={styles.buttonView}>
                <SubscribeButton item={item} onPress={onPress} />
            </View>
        </View>
    )
}

export default ThemeListItem