
import { useAtom } from 'jotai';

import React from 'react';
import { Animated, Dimensions, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { themeColor } from '../../../resources';
import { selectedTheme } from '../../../stores';

type BackgroundOpacityProps = {
    style?: StyleProp<ViewStyle>,
    onPress?: () => void,
    absolute?: boolean
};



const BackgroundOpacity = ({ style, onPress, absolute }: BackgroundOpacityProps) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        style: {
            backgroundColor: themeColor[theme].seegnal_default_opacity,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        },
    })

    return (
        <TouchableOpacity activeOpacity={1} style={[styles.style, style, { position: absolute ? 'absolute' : 'relative' }]} onPress={onPress}>
            <Animated.View style={style} />
        </TouchableOpacity>
    );
};

BackgroundOpacity.defaultProps = {
    onPress: () => { }
}

export default BackgroundOpacity
