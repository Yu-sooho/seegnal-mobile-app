
import React from 'react';
import { Image } from 'react-native';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon16CheckBoxProps = {
    imageStyle?: object
};

const Icon16CheckBox = ({ imageStyle }: Icon16CheckBoxProps) => {
    return (
        <Image style={imageStyle} source={images.icon_16_check} />
    );
};

Icon16CheckBox.defaultProps = {
    imageStyle:{
        width:sizeConverter(1),
        height:sizeConverter(16),
    }
}


export default Icon16CheckBox
