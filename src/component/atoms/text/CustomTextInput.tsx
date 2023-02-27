
import { useAtom } from 'jotai';

import React from 'react';
import { KeyboardType, StyleProp, StyleSheet, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { themeColor, themeFonts } from '../../../resources';
import { selectedTheme } from '../../../stores';
import { sizeConverter } from '../../../utils';

type CustomTextInputProps = {
    value?: string,
    textStyle?: StyleProp<TextStyle>,
    viewStyle?: StyleProp<ViewStyle>,
    onChangeText?: (...args: any[]) => any,
    keyboardType?: KeyboardType,
    placeholder?: string
};



const CustomTextInput = ({ value, textStyle, viewStyle, keyboardType, placeholder, onChangeText }: CustomTextInputProps) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        viewStyle: {
            backgroundColor: themeColor[theme].seegnal_white,
            width: sizeConverter(328),
            height: sizeConverter(32),
            borderRadius: sizeConverter(8),
            alignItems: 'center',
            justifyContent: 'center'
        },
        textStyle: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_dark_gray,
            width: sizeConverter(304),
            height: sizeConverter(32),
            paddingTop: 0,
            paddingBottom: 0,
            includeFontPadding: false
        }
    })

    return (
        <View style={[styles.viewStyle, viewStyle]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={themeColor[theme].seegnal_gray}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                style={[styles.textStyle, textStyle]}
            />
        </View>
    );
};

CustomTextInput.defaultProps = {
    keyboardType: 'default',
    placeholder: ''
}


export default CustomTextInput
