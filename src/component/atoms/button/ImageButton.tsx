import { useAtom } from 'jotai'

import React from 'react'
import { Image, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { EMOTION_TYPE, themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'

type ImageButtonProps = {
    item?: EMOTION_TYPE,
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    imageStyle?: StyleProp<ImageStyle>,
    imageViewStyle?: StyleProp<ViewStyle>,
    textViewStyle?: StyleProp<ViewStyle>,
    disabled?: boolean,
    image?: Object
    text?: string,
    onPress?: () => void
}



const ImageButton = ({
    item,
    style,
    disabled,
    textStyle,
    textViewStyle,
    imageViewStyle,
    imageStyle,
    image,
    text,
    onPress,
}: ImageButtonProps) => {
    const [theme] = useAtom(selectedTheme)

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
            <View style={imageViewStyle}>
                {item && item?.image ?
                    <Image resizeMode={'contain'} source={item?.image} style={[styles.imageActive, imageStyle]} />
                    :
                    image ?
                        <Image resizeMode={'contain'} source={image} style={[styles.imageActive, imageStyle]} />
                        :
                        <View style={styles.imageDefault} />
                }

            </View>
            {
                item && item?.keyword &&
                <View style={textViewStyle}>
                    <Text style={[styles.text, textStyle]}>{item?.keyword}</Text>
                </View>
            }
            {
                !!text &&
                <View style={textViewStyle}>
                    <Text style={[styles.text, textStyle]}>{text}</Text>
                </View>
            }
        </TouchableOpacity>
    )
}

ImageButton.defaultProps = {
    item: null,
    disabled: false,
}

export default ImageButton