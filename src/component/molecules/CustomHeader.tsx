
import React, { ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import createRootStore from '../../stores';
import { sizeConverter } from '../../utils';
import { LeftArrowButton } from '../atoms';

type CustomHeaderProps = {
    style?: object,
    leftContent?: () => ReactNode,
    centerContent?: () => ReactNode,
    rightContent?: () => ReactNode,
};

const CustomHeader = ({ style, leftContent, centerContent, rightContent }: CustomHeaderProps) => {

    const styles = StyleSheet.create({
        container:{
            width: Dimensions.get('window').width,
            height: sizeConverter(56),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: sizeConverter(16)
        }
    })
    return (
        <View style={[styles.container,style]}>
            <View style={{ }}>{leftContent?.()}</View>
            <View>{centerContent?.()}</View>
            <View style={{}}>{rightContent?.()}</View>
        </View>
    );
};

CustomHeader.defaultProps = {
    style: {
        width: Dimensions.get('window').width,
        height: sizeConverter(56),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: sizeConverter(16)
    },
    leftContent: () => {
        return (
            <LeftArrowButton />
        )
    },
    centerContent: () => {
        return (
            <View />
        )
    },
    rightContent: () => {
        return (
            <View style={{width:sizeConverter(24)}} />
        )
    },

}

export default CustomHeader
