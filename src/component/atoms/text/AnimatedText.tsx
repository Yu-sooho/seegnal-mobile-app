
import React from 'react';
import { Animated } from 'react-native';
import { themeFonts } from '../../../resources';

type AnimatedTextProps = {
    text: string,
    textStyle?: object
};

const AnimatedText = ({ text, textStyle }: AnimatedTextProps) => {
    return (
        <Animated.Text style={{ ...textStyle }}>{text}</Animated.Text>
    );
};

AnimatedText.defaultProps = {
    text: 'defaultText',
    textStyle: {
        ...themeFonts.notosans_medium_14
    }
}


export default AnimatedText
