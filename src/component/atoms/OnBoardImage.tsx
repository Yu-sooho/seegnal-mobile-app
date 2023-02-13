
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { themeColor } from '../../resources';
import { sizeConverter } from '../../utils';
import createRootStore from '../../stores';
import FastImage from 'react-native-fast-image';
import { observer } from 'mobx-react-lite';

type OnBoardImageProps = {
    imageUri: string
};

const stores = createRootStore()

const OnBoardImage = ({ imageUri }: OnBoardImageProps) => {
    
    const theme = stores.appStateStore.selectedTheme.get()

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


export default observer(OnBoardImage)
