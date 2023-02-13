import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'
import { CustomButton } from '../atoms'

type FloatingNextButtonProps = {
    onPress?: (...args: any[]) => any,
    text: string,
    containerStyle?: StyleProp<ViewStyle>,
    style?: StyleProp<ViewStyle>,
    textStyle?: object,
    disabled?: boolean,
    bottomInset?:number
}

const stores = createRootStore()

const FloatingNextButton = ({
    onPress,
    text,
    style,
    textStyle,
    containerStyle,
    disabled,
    bottomInset
}: FloatingNextButtonProps) => {

    const theme = stores.appStateStore.selectedTheme.get()

    const insets = useSafeAreaInsets()

    const styles = StyleSheet.create({
        loginButtonViewStyle: {
            bottom: bottomInset ? bottomInset : insets.bottom + sizeConverter(24),
            position: 'absolute',
            width: sizeConverter(360),
            alignItems: 'center'
        },
        loginButtonText: {
            color: themeColor[theme].seegnal_white,
            ...themeFonts.notosans_bold_16
        }
    })

    return (
        <View style={[styles.loginButtonViewStyle, containerStyle]}>
            <CustomButton
                buttonStyle={style}
                textStyle={textStyle}
                onPress={onPress}
                text={text}
                disabled={disabled}
            />
        </View>
    )
}

FloatingNextButton.defaultProps = {
    onPress: () => { },
    text: '다음',
    disabled: false
}


export default observer(FloatingNextButton)