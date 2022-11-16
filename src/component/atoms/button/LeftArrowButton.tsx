
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { sizeConverter } from '../../../utils';
import { Icon24ArrowLeft } from '../../icons';

type LeftArrowStyle = {
    buttonStyle?: object,
    imageStyle?: object,
    onPress?: () => {}
}

const LeftArrowButton = ({ buttonStyle, imageStyle, onPress }: LeftArrowStyle) => {
    const navigation = useNavigation()
    const arrowStyles = StyleSheet.create({
        button: {
            width: sizeConverter(24),
            height: sizeConverter(24),
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: sizeConverter(2)
        },
        image: {
            width: sizeConverter(24),
            height: sizeConverter(24)
        }
    })

    const onPressBack = () =>{
        if(onPress) onPress()
        navigation.goBack()
    }

    return (
        <TouchableOpacity onPress={onPressBack} style={{ ...arrowStyles.button, ...buttonStyle }}>
            <Icon24ArrowLeft imageStyle={{ ...arrowStyles.image, ...imageStyle }} />
        </TouchableOpacity>
    )
}

LeftArrowButton.defaultProps = {
    buttonStyle: {},
    imageStyle: {},
    onPress: () => {}
}

export default LeftArrowButton