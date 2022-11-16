
import React, { PropsWithChildren } from 'react';
import Animated from 'react-native-reanimated';

const ModalContent: React.FC<
    PropsWithChildren<{
        style?: object,
        onLayout?: (event:any) => void,
    }>
> = ({ children, style, onLayout }) => {
    return (
        <Animated.View onLayout={onLayout} style={style}>
            {children}
        </Animated.View>
    );
};

ModalContent.defaultProps = {
    style: {
    }
}

export default ModalContent
