
import React from 'react';
import FastImage from 'react-native-fast-image';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon24AppleLoginProps = {
    imageStyle?: object
};

const Icon24AppleLogin = ({ imageStyle }: Icon24AppleLoginProps) => {
    return (
        <FastImage style={imageStyle} source={images.icon_24_apple_login} />
    );
};

Icon24AppleLogin.defaultProps = {
    imageStyle: {
        width: sizeConverter(24),
        height: sizeConverter(24)
    }
}


export default Icon24AppleLogin
