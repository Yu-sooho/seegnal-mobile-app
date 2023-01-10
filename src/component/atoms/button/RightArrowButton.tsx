
import React from 'react';
import { ImageStyle, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { sizeConverter } from '../../../utils';
import { Icon24ArrowRight } from '../../icons';

type RightArrowStyle = {
    buttonStyle?: StyleProp<ViewStyle>,
    imageStyle?: StyleProp<ImageStyle>,
    textStyle?: StyleProp<TextStyle>,
    onPress?: () => void,
    text?: string,
}

const RightArrowButton = ({ buttonStyle, imageStyle, text, textStyle, onPress }: RightArrowStyle) => {
    const arrowStyles = StyleSheet.create({
        button: {
            width: !!text? '100%' : sizeConverter(24),
            height: !!text? sizeConverter(48) : sizeConverter(24),
            justifyContent: !!text? 'space-between' : 'center',
            alignItems: 'center',
            paddingBottom: sizeConverter(2),
            flexDirection: 'row'
        },
        image: {
            width: sizeConverter(16),
            height: sizeConverter(16)
        },
    })
    return (
        <TouchableOpacity onPress={onPress} style={[arrowStyles.button, buttonStyle]}>
            {
                text &&
                <Text style={[textStyle]}>
                    {text}
                </Text>
            }
            <Icon24ArrowRight imageStyle={[arrowStyles.image, imageStyle]} />
        </TouchableOpacity>
    )
}

RightArrowButton.defaultProps = {
    buttonStyle: {},
    imageStyle: {},
    onPress: () => { console.log('1231231') }
}

export default RightArrowButton