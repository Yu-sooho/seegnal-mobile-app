
import React from 'react';
import FastImage from 'react-native-fast-image';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon24GoogleLoginProps = {
    imageStyle?: object
};

const Icon24GoogleLogin = ({ imageStyle }: Icon24GoogleLoginProps) => {
    return (
        <FastImage style={imageStyle} source={images.icon_24_google_login} />
    );
};

Icon24GoogleLogin.defaultProps = {
    imageStyle: {
        width: sizeConverter(24),
        height: sizeConverter(24)
    }
}


export default Icon24GoogleLogin
