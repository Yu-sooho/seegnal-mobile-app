
import React from 'react';
import FastImage from 'react-native-fast-image';
import { images } from '../../../resources';
import { sizeConverter } from '../../../utils';

type Icon48ActiveHistoryProps = {
    imageStyle?: object
};

const Icon48ActiveHistory = ({ imageStyle }: Icon48ActiveHistoryProps) => {
    return (
        <FastImage style={imageStyle} source={images.icon_40_default_history} />
    );
};

Icon48ActiveHistory.defaultProps = {
    imageStyle:{
        width:sizeConverter(40),
        height:sizeConverter(40),
    }
}


export default Icon48ActiveHistory
