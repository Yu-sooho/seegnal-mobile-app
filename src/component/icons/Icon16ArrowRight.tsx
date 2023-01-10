
import React from 'react';
import FastImage from 'react-native-fast-image';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon16ArrowRightProps = {
    imageStyle?: object
};

const Icon16ArrowRight = ({ imageStyle }: Icon16ArrowRightProps) => {
    return (
        <FastImage style={imageStyle} source={images.icon_16_arrow_right} />
    );
};

Icon16ArrowRight.defaultProps = {
    imageStyle:{
        width:sizeConverter(16),
        height:sizeConverter(16)
    }
}


export default Icon16ArrowRight
