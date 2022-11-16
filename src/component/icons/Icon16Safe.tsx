
import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../resources';
import { sizeConverter } from '../../utils';

type Icon16SafeProps = {
    imageStyle?: object
};

const Icon16Safe = ({ imageStyle }: Icon16SafeProps) => {
    const styles = StyleSheet.create({
        imageStyle: {
            width: sizeConverter(16),
            height: sizeConverter(16),
        }
    })
    return (
        <FastImage style={[styles.imageStyle, imageStyle]} source={images.icon_16_safe} />
    );
};

export default Icon16Safe
