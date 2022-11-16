import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { EMOTION_TYPE, themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'

type ImageButtonProps = {
    item?: EMOTION_TYPE,
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    imageStyle?: StyleProp<ImageStyle>,
    disabled?: boolean,
    image?: Object
    onPress?: () => void
}

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const ImageButton = ({
    item,
    style,
    disabled,
    textStyle,
    imageStyle,
    image,
    onPress,
}: ImageButtonProps) => {

    const styles = StyleSheet.create({
        container: {
            width: sizeConverter(80),
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageActive: {
            height: sizeConverter(80),
            width: sizeConverter(80),
        },
        imageDefault: {
            height: sizeConverter(80),
            width: sizeConverter(80),
            borderRadius: sizeConverter(40),
            backgroundColor: themeColor[theme].seegnal_light_gray1,
        },
        text: {
            ...themeFonts.notosans_medium_14,
            textAlign: 'center',
            color: themeColor[theme].seegnal_dark_gray,
            marginTop: sizeConverter(8)
        }

    })

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, style]}>
            {item && item?.image ?
                <Image resizeMode={'contain'} source={item?.image} style={[styles.imageActive, imageStyle]} />
                :
                image ?
                    <Image resizeMode={'contain'} source={image} style={[styles.imageActive, imageStyle]} />
                    :
                    <View style={styles.imageDefault} />
            }
            {
                item && item?.keyword &&
                <Text style={[styles.text, textStyle]}>{item?.keyword}</Text>
            }
        </TouchableOpacity>
    )
}

ImageButton.defaultProps = {
    item: null,
    disabled: false,
}

export default ImageButton