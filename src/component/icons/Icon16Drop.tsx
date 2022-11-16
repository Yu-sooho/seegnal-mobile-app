
import React from 'react';
import FastImage from 'react-native-fast-image';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon16DropProps = {
    imageStyle?: object
};

const Icon16Drop = ({ imageStyle }: Icon16DropProps) => {
    return (
        <FastImage style={imageStyle} source={images.icon_16_drop} />
    );
};

Icon16Drop.defaultProps = {
    imageStyle:{
        width:sizeConverter(16),
        height:sizeConverter(16),
    }
}


export default Icon16Drop
