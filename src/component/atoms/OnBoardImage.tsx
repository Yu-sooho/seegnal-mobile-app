
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { themeColor } from '../../resources';
import { sizeConverter } from '../../utils';
import createRootStore from '../../stores';
import FastImage from 'react-native-fast-image';

type OnBoardImageProps = {
    imageUri: string
};

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const OnBoardImage = ({ imageUri }: OnBoardImageProps) => {
    return (
        <View style={styles.onBoardImageView}>
            <FastImage source={{uri:imageUri}}  style={styles.onBoardImage}/>
        </View>
    );
};

OnBoardImage.defaultProps = {
    imageUri: null
}

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

export default OnBoardImage
