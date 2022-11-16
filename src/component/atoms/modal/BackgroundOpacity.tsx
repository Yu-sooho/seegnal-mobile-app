
import React from 'react';
import { Animated, Dimensions, TouchableOpacity } from 'react-native';
import { themeColor } from '../../../resources';
import createRootStore from '../../../stores';

type BackgroundOpacityProps = {
    style?: object,
    onPress?: () => void,
    absolute?: boolean
};

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const BackgroundOpacity = ({ style, onPress, absolute }: BackgroundOpacityProps) => {
    return (
        <TouchableOpacity activeOpacity={1} style={[style, { position: absolute ? 'absolute' : 'relative' }]} onPress={onPress}>
            <Animated.View style={style} />
        </TouchableOpacity>
    );
};

BackgroundOpacity.defaultProps = {
    style: {
        backgroundColor: themeColor[theme].seegnal_default_opacity,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    onPress: () => { }
}

export default BackgroundOpacity
