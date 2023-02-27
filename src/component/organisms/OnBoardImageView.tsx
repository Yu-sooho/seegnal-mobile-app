
import React, { useRef } from 'react';
import {
    Animated,
    StyleSheet,
    View,
} from 'react-native';
import { themeColor, themeFonts } from '../../resources';
import { sizeConverter } from '../../utils';
import { ImageList, ScrollingText } from '../molecules';
import { Carosel, OnBoardImage } from '../atoms';

import { selectedTheme } from '../../stores';
import { useAtom } from 'jotai';

type OnBoardImageViewProps = {
    data: Array<Object>,
};



type onBoardImageItemProps = {
    imageUri: string,
    id: number
};


type renderItemType = {
    item: onBoardImageItemProps,
    index: number
}

const renderItem = ({ item, index }: renderItemType) => {
    return (
        <OnBoardImage imageUri={item?.imageUri} />
    )
}


const OnBoardImageView = ({ data }: OnBoardImageViewProps) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        containerStyle: {
            alignItems: 'center'
        },
        onBoardImage: {
            width: sizeConverter(280),
            height: sizeConverter(280),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeColor[theme].seegnal_light_gray1,
        },
        onBoardTextView: {
            width:sizeConverter(360),
            minHeight:sizeConverter(112)
        },
        onBoardCaroselView: {
        },
        titleStyle: {
            ...themeFonts.santokki_bold_18,
            color:themeColor[theme].seegnal_dark_gray,
            width: sizeConverter(280),
            textAlign: 'center',
            marginBottom:sizeConverter(8),
        },
        textStyle: {
            ...themeFonts.notosans_medium_14,
            color:themeColor[theme].seegnal_deep_gray,
            maxWidth: sizeConverter(280),
            textAlign: 'center',
        },
    });

    const caroselAnimatedValue = useRef(new Animated.Value(0))
    return (
        <View style={styles.containerStyle}>
            <View style={styles.onBoardImage}>
                <ImageList
                    data={data}
                    renderItem={renderItem}
                    animatedValue={caroselAnimatedValue.current}
                />
            </View>
                <ScrollingText titleStyle={styles.titleStyle} textStyle={styles.textStyle} style={styles.onBoardTextView} data={data} animatedValue={caroselAnimatedValue.current} />
            <View style={styles.onBoardCaroselView}>
                <Carosel
                    data={data}
                    animatedValue={caroselAnimatedValue.current}
                />
            </View>
        </View>
    );
};

OnBoardImageView.defaultProps = {
    data: []
}



export default OnBoardImageView
