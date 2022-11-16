
import React, { ReactNode } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { themeColor, themeFonts } from '../../../resources';
import createRootStore from '../../../stores';
import { sizeConverter } from '../../../utils';

type CustomButtonProps = {
    onPress?: (...args: any[]) => any,

    buttonStyle?: StyleProp<ViewStyle>,
    defaultButtonStyle?: StyleProp<ViewStyle>,
    disabledButtonStyle?: StyleProp<ViewStyle>,

    textStyle?: StyleProp<TextStyle>,
    defaultTextStyle?: StyleProp<TextStyle>,
    disabledTextStyle?: StyleProp<TextStyle>,

    text: string
    disabled?: boolean

    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    buttonImage?: ReactNode
};

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const CustomButton = ({
    onPress,
    buttonStyle,
    defaultButtonStyle,
    disabledButtonStyle,
    textStyle,
    defaultTextStyle,
    disabledTextStyle,
    text,
    disabled,
    leftIcon,
    rightIcon,
    buttonImage,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            style={
                buttonStyle ?
                    [styles.buttonStyle, buttonStyle] :
                    (disabled ?
                        [styles.disabledButton, disabledButtonStyle] :
                        [styles.defaultButton, defaultButtonStyle]
                    )
            }
            onPress={onPress}
        >
            <View style={styles.containerStyle}>
                {leftIcon &&
                    <View style={{ marginLeft: sizeConverter(16) }}>
                        {leftIcon}
                    </View>
                }
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {buttonImage ?
                        <View >
                            {buttonImage}
                        </View>
                        :
                        <Text style={
                            textStyle ?
                                [styles.textStyle, textStyle] :
                                (disabled ?
                                    [styles.disabledText, disabledTextStyle] :
                                    [styles.defaultText, defaultTextStyle]
                                )
                        }
                        >
                            {text}
                        </Text>
                    }
                </View>
                {rightIcon &&
                    <View style={{ marginRight: sizeConverter(16) }}>
                        {rightIcon}
                    </View>
                }
            </View>
        </TouchableOpacity>
    );
};

CustomButton.defaultProps = {
    onPress: () => { },
    buttonStyle: null,
    text: '로그인',
    disabled: false
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: sizeConverter(1),
        width: sizeConverter(328),
        height: sizeConverter(48),
        borderRadius: sizeConverter(12),
        borderColor: themeColor[theme].seegnal_main,
        backgroundColor: themeColor[theme].seegnal_main,
    },
    defaultButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: sizeConverter(1),
        width: sizeConverter(328),
        height: sizeConverter(48),
        borderRadius: sizeConverter(12),
        borderColor: themeColor[theme].seegnal_main,
        backgroundColor: themeColor[theme].seegnal_main,
    },
    disabledButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: sizeConverter(1),
        width: sizeConverter(328),
        height: sizeConverter(48),
        borderRadius: sizeConverter(12),
        borderColor: themeColor[theme].seegnal_light_gray2,
        backgroundColor: themeColor[theme].seegnal_light_gray2
    },

    textStyle: {
        ...themeFonts.notosans_bold_16,
        color: themeColor[theme].seegnal_white
    },
    defaultText: {
        ...themeFonts.notosans_bold_16,
        color: themeColor[theme].seegnal_white,
    },
    disabledText: {
        ...themeFonts.notosans_bold_16,
        color: themeColor[theme].seegnal_gray,
    }
})

export default CustomButton
