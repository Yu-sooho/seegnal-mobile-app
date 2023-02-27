
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { themeColor } from '../../resources';
import { sizeConverter } from '../../utils';
import FastImage from 'react-native-fast-image';

import { selectedTheme } from '../../stores';
import { useAtom } from 'jotai';

type OnBoardImageProps = {
    imageUri: string
};



const OnBoardImage = ({ imageUri }: OnBoardImageProps) => {
    
    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        onBoardImage: {
            width: sizeConverter(280),
            height: sizeConverter(280),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeColor[theme].seegnal_white
        },
        onBoardImageView: {
            width: sizeConverter(280),
            height: sizeConverter(280),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeColor[theme].seegnal_light_gray1
        }
    });

    return (
        <View style={styles.onBoardImageView}>
            <FastImage source={{ uri: imageUri }} style={styles.onBoardImage} />
        </View>
    );
};

OnBoardImage.defaultProps = {
    imageUri: null
}


export default OnBoardImage
