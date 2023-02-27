/**
 * 
 * ex) navigation.push('CustomModalScreen')
 * @param {string} text 
 * @param {string}title 
 * @param {string} okButtonText
 * @param {string} cancelButtonText 
 * @param {function} onPressOk
 * @param {function} onPressCancel
 * 
 */
import { StackScreenProps } from '@react-navigation/stack';
import { useAtom } from 'jotai';

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../../navigation';
import { themeColor, themeFonts } from '../../../resources';
import { defaultStyles } from '../../../resources/styles';
import { selectedTheme } from '../../../stores';
import { sizeConverter } from '../../../utils';
import { BackgroundOpacity, CustomButton } from '../../atoms';

type Props = StackScreenProps<RootStackParamList, 'CustomModalScreen'>

const CustomModalScreen = ({ navigation, route }: Props) => {

    const [theme] = useAtom(selectedTheme)

    const { text, title, okButtonText, cancelButtonText, onPressOk, onPressCancel } = route?.params

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        contentView: {
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            minHeight: sizeConverter(160),
            minWidth: sizeConverter(312),
            borderRadius: sizeConverter(12)
        },
        titleText: {
            ...themeFonts.notosans_bold_16,
            color: themeColor[theme].seegnal_dark_gray
        },
        contentText: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_deep_gray
        },
        buttonView: {
            flexDirection: 'row',
            paddingHorizontal: sizeConverter(16),
            justifyContent: 'space-between'
        }
    })

    const onPressBack = () => {
        if (onPressCancel)
            onPressCancel()
        navigation.pop()
    }

    const onPressConfirm = () => {
        if (onPressOk) onPressOk()
        navigation.pop()
    }

    return (
        <View style={styles.container}>
            <BackgroundOpacity absolute onPress={onPressBack} />
            <View style={styles.contentView}>
                <View style={{ paddingTop: sizeConverter(24), paddingHorizontal: sizeConverter(16) }}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={{ minHeight: sizeConverter(82), justifyContent: 'space-between' }}>
                    <View style={{ paddingHorizontal: sizeConverter(16), marginTop: sizeConverter(16) }}>
                        <Text style={styles.contentText}>{text}</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <CustomButton
                            onPress={onPressBack}
                            text={cancelButtonText}
                            textStyle={{
                                color: themeColor[theme].seegnal_gray,
                                ...themeFonts.notosans_bold_14
                            }}
                            buttonStyle={defaultStyles.defaultButton}
                        />
                        <CustomButton
                            onPress={onPressConfirm}
                            text={okButtonText}
                            textStyle={{
                                color: themeColor[theme].seegnal_white,
                                ...themeFonts.notosans_bold_14
                            }}
                            buttonStyle={defaultStyles.activeButton}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CustomModalScreen