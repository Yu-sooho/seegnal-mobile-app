import { useAtom } from 'jotai'

import React, { ReactNode, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'
import { ColorBar } from '../../atoms'



type Props = {
    maxWidth: number,
    action: boolean,
    percent: number,
    color: string
    reverse?: boolean,
    textImage?: ReactNode,
    text?:string
}

const ColorBarView = ({ maxWidth, action, percent, color, reverse, textImage, text }: Props) => {
    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        colorBarStyle: {
            alignItems: 'flex-end'
        },
        colorBarDetail: {
            minWidth: sizeConverter(52),
            minHeight: sizeConverter(20),
            backgroundColor: themeColor[theme].seegnal_light_gray1,
            borderRadius: sizeConverter(6),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: sizeConverter(6),
            marginTop: sizeConverter(8)
        },
        colorBarText: {
            ...themeFonts.notosans_medium_12,
            color: themeColor[theme].seegnal_dark_gray
        }
    })

    const fade = useSharedValue(0)

    const width = maxWidth / 100 * percent
    const transform = useSharedValue(0);

    const transformAnimatedStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(fade.value, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            transform: [{
                translateX: withTiming(transform.value, {
                    duration: 500,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                })
            }]
        };
    });

    useEffect(() => {
        if (action) {
            fade.value = 1
            if (reverse) return
            transform.value = 0
        } else {
            fade.value = 0
            if (reverse) return
            transform.value = -width
        }
    }, [action])

    return (
        <View style={styles.colorBarStyle}>
            <ColorBar reverse={reverse} action={action} color={color} maxWidth={maxWidth} percent={percent} />
            <Animated.View style={[styles.colorBarDetail, transformAnimatedStyles]}>
                {textImage}
                <Text style={styles.colorBarText}>{text}</Text>
            </Animated.View>
        </View>
    )
}

export default ColorBarView