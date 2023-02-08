
import React, { ReactNode } from 'react';
import { Dimensions, View } from 'react-native';
import { themeColor } from '../../resources';
import createRootStore from '../../stores';
import { sizeConverter } from '../../utils';
import { CustomButton, LeftArrowButton } from '../atoms';
import { Icon24ArrowLeft } from '../icons';

type CustomHeaderProps = {
    style?: object,
    leftContent?: () => ReactNode,
    centerContent?: () => ReactNode,
    rightContent?: () => ReactNode,
};

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const CustomHeader = ({ style, leftContent, centerContent, rightContent }: CustomHeaderProps) => {
    return (
        <View style={style}>
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
