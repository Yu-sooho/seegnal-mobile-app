
import React from 'react';
import FastImage from 'react-native-fast-image';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon24KakaoLoginProps = {
    imageStyle?: object
};

const Icon24KakaoLogin = ({ imageStyle }: Icon24KakaoLoginProps) => {
    return (
        <FastImage style={imageStyle} source={images.icon_24_kakao_login} />
    );
};

Icon24KakaoLogin.defaultProps = {
    imageStyle: {
        width: sizeConverter(24),
        height: sizeConverter(24)
    }
}


export default Icon24KakaoLogin
