
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { sizeConverter } from '../../../utils';
import { Icon24ArrowRight } from '../../icons';

type RightArrowStyle = {
    buttonStyle?: object,
    imageStyle?: object,
    onPress?: () => void
}

const RightArrowButton = ({ buttonStyle, imageStyle, onPress }: RightArrowStyle) => {
    const arrowStyles = StyleSheet.create({
        button: {
            width: sizeConverter(24),
            height: sizeConverter(24),
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: sizeConverter(2)
        },
        image: {
            width: sizeConverter(16),
            height: sizeConverter(16)
        }
    })
    return (
        <TouchableOpacity onPress={onPress} style={{ ...arrowStyles.button, ...buttonStyle }}>
            <Icon24ArrowRight imageStyle={{ ...arrowStyles.image, ...imageStyle }} />
        </TouchableOpacity>
    )
}

RightArrowButton.defaultProps = {
    buttonStyle: {},
    imageStyle: {},
    onPress: () => { console.log('1231231') }
}

export default RightArrowButton