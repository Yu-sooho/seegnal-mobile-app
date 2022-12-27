
import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon16PlusEndProps = {
    imageStyle?: object
};

const Icon16PlusEnd = ({ imageStyle }: Icon16PlusEndProps) => {
    const styles = StyleSheet.create({
        imageStyle: {
            width: sizeConverter(16),
            height: sizeConverter(16),
        }
    })
    return (
        <FastImage style={[styles.imageStyle, imageStyle]} source={images.icon_16_plus_end} />
    );
};

export default Icon16PlusEnd
