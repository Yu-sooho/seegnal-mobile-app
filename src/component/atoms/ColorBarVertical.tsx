import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { color, Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { sizeConverter } from '../../utils'

type Props = {
    maxHeight: number,
    percent: number,
    color: string,
    action: boolean,
    reverse?: boolean
}

const ColorBarVertical = ({ maxHeight, percent, color, action, reverse }: Props) => {

    const height = maxHeight / 100 * percent
    const transform = useSharedValue(0);
    const fade = useSharedValue(0)
    const styles = StyleSheet.create({
        container: {
            height: height,
            width: sizeConverter(16),
            justifyContent:'flex-end'
        },
        colorBar: {
            height: height,
            width: sizeConverter(16),
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
            height: withTiming(transform.value, {
                duration: 500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            })
            ,
        };
    });

    useEffect(() => {
        if (action) {
            fade.value = 1
            transform.value = height
        } else {
            fade.value = 0
            transform.value = reverse? maxHeight : 0
        }
    }, [action])

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.colorBar, transformAnimatedStyles]} />
        </View>
    )
}

ColorBarVertical.defaultProps = {
    maxHeight: sizeConverter(360),
    percent: 100,
    reverse:false
}

export default ColorBarVertical