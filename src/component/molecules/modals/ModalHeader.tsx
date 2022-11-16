
import React, { ReactNode } from 'react';
import { Dimensions, View } from 'react-native';
import { themeColor } from '../../../resources';
import createRootStore from '../../../stores';
import { sizeConverter } from '../../../utils';
import { ModalHeaderButton, ModalHeaderText } from '../../atoms';
import { Icon24ArrowLeft } from '../../icons';

type ModalHeaderProps = {
    style?: object,
    leftContent?: () => ReactNode,
    centerContent?: () => ReactNode,
    rightContent?: () => ReactNode,
};

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const ModalHeader = ({ style, leftContent, centerContent, rightContent }: ModalHeaderProps) => {
    return (
        <View style={style}>
            <View>{leftContent?.()}</View>
            <View>{centerContent?.()}</View>
            <View>{rightContent?.()}</View>
        </View>
    );
};

ModalHeader.defaultProps = {
    style: {
        width: Dimensions.get('window').width,
        height: sizeConverter(56),
        backgroundColor: themeColor[theme].seegnal_lwhite_gray,
        borderTopLeftRadius: sizeConverter(20),
        borderTopRightRadius: sizeConverter(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContent: () => {
        return (
            <ModalHeaderButton>
                <Icon24ArrowLeft />
            </ModalHeaderButton>
        )
    },
    centerContent: () => {
        return (
            <ModalHeaderText text={'로그인'} />
        )
    },
    rightContent: () => {
        return (
            <ModalHeaderButton />
        )
    },

}

export default ModalHeader
