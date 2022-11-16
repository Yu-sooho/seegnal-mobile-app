import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Gesture, GestureDetector, PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'

type ProgressBarProps = {
    width: number,
    height: number,
    size: number,
    initValue: number,
    onChangeValue: (value: number) => {}
}

const store = createRootStore()
const theme = store.appStateStore.selectedTheme.get()

const ProgressBar = ({
    width,
    height,
    size,
    onChangeValue,
    initValue,
}: ProgressBarProps) => {

    const halfSize = size / 2
    const maxMove = width - size

    const init = initValue ? (maxMove / 100) * initValue : 0

    const position = useSharedValue(init);
    const lastPosition = useSharedValue(init)

    const panGesture = Gesture.Pan().runOnJS(true)
        .onBegin((e) => {
            const temp = e.absoluteX - size - halfSize
            if (position.value >= 0 && position.value <= maxMove) {
                if (temp < 0 || temp > maxMove) return
                position.value = temp
                onChangeValue((100 / maxMove) * position.value)
            } else if (temp < 0) {
                position.value = 0
                onChangeValue((100 / maxMove) * position.value)
            } else if (temp > maxMove) {
                position.value = maxMove
                onChangeValue((100 / maxMove) * position.value)
            }
        })
        .onUpdate((e) => {
            const temp = e.absoluteX - size - halfSize
            if (position.value >= 0 && position.value <= maxMove) {
                if (temp < 0 || temp > maxMove) return
                position.value = temp
                onChangeValue((100 / maxMove) * position.value)
            } else if (temp < 0) {
                position.value = 0
                onChangeValue((100 / maxMove) * position.value)
            } else if (temp > maxMove) {
                position.value = maxMove
                onChangeValue((100 / maxMove) * position.value)
            }
        })
        .onEnd((e) => {
            const temp = e.absoluteX - size - halfSize
            if (e.translationX > 0 && e.translationX <= maxMove) {
                if (temp < 0 || temp > maxMove) return
                lastPosition.value = temp
                position.value = temp
                onChangeValue((100 / maxMove) * position.value)
            } else if (temp < 0) {
                position.value = 0
                onChangeValue((100 / maxMove) * position.value)
            } else if (temp > maxMove) {
                position.value = maxMove
                onChangeValue((100 / maxMove) * position.value)
            }
        })

    const touchStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
    }));

    const animatedStyle = useAnimatedStyle(() => ({
        width: position.value
    }));

    const styles = StyleSheet.create({
        container: {
            width: width,
            height: size,
            justifyContent: 'center',
        },
        defaultView: {
            width: width,
            height: height,
            backgroundColor: themeColor[theme].seegnal_light_gray1,
            justifyContent: 'center',
        },
        touchBar: {
            width: size,
            height: size,
            position: 'absolute',
            backgroundColor: themeColor[theme].seegnal_light_gray1
        },
        activeBar: {
            backgroundColor: themeColor[theme].seegnal_main,
            height: height || sizeConverter(12),
            position: 'absolute',
        }
    })

    return (
        <View style={styles.container}>
            <GestureDetector gesture={panGesture}>
                <Animated.View style={styles.defaultView}>
                    <Animated.View style={[styles.activeBar, animatedStyle]} />
                    <Animated.View style={[styles.touchBar, touchStyle]} />
                </Animated.View>
            </GestureDetector>
        </View>
    )
}

ProgressBar.defaultProps = {
    width: sizeConverter(296),
    height: sizeConverter(12),
    size: sizeConverter(32),
    initValue: 0
}

export default ProgressBar