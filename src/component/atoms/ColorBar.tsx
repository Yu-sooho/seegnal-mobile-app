import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { color, Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { sizeConverter } from '../../utils'

type Props = {
    maxWidth: number,
    percent: number,
    color: string,
    action: boolean,
    reverse?: boolean
}

const ColorBar = ({ maxWidth, percent, color, action, reverse }: Props) => {

    const width = maxWidth / 100 * percent
    const transform = useSharedValue(0);
    const fade = useSharedValue(0)
    const styles = StyleSheet.create({
        container: {
            width: width,
            height: sizeConverter(16),
            alignItems:reverse ? 'flex-end' :'flex-start'
        },
        colorBar: {
            width: width,
            height: sizeConverter(16),
            backgroundColor: color,
            borderRadius: sizeConverter(12)
        }
    })

    const transformAnimatedStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(fade.value, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
            width: withTiming(transform.value, {
                duration: 500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            })
            ,
        };
    });

    useEffect(() => {
        if (action) {
            fade.value = 1
            transform.value = width
        } else {
            fade.value = 0
            transform.value =reverse? maxWidth : 0
        }
    }, [action])

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.colorBar, transformAnimatedStyles]} />
        </View>
    )
}

ColorBar.defaultProps = {
    maxWidth: sizeConverter(360),
    percent: 100,
    reverse:false
}

export default ColorBar