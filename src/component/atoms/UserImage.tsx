import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

type Props = {
    isText?: boolean
}

const UserImage = ({ isText }: Props) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        imageStyle: {
            width: sizeConverter(24),
            height: sizeConverter(24),
            backgroundColor: themeColor[theme].seegnal_light_gray1,
            borderRadius: sizeConverter(12),
            marginRight: sizeConverter(8)
        },
        textStyle: {
            ...themeFonts.notosans_bold_14,
            color: themeColor[theme].seegnal_dark_gray
        }
    })
    return (
        <TouchableOpacity style={styles.container}>
            <FastImage style={styles.imageStyle} />
            {
                isText &&
                <Text style={styles.textStyle}>123</Text>

            }
        </TouchableOpacity>
    )
}

UserImage.defaultProps = {
    isText: true
}

export default UserImage