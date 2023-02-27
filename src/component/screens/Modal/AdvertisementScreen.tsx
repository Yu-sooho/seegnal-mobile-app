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
import { selectedTheme } from '../../../stores';
import { sizeConverter } from '../../../utils';
import { BackgroundOpacity, CustomButton } from '../../atoms';

type Props = StackScreenProps<RootStackParamList, 'AdvertisementScreen'>

const AdvertisementScreen = ({ navigation, route }: Props) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        },
        contentView: {
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            minHeight: sizeConverter(160),
            minWidth: sizeConverter(280),
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
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        adViewStyle: {
            width: sizeConverter(280),
            height: sizeConverter(418),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeColor[theme].seegnal_gray,
            borderTopLeftRadius: sizeConverter(8),
            borderTopRightRadius: sizeConverter(8)
        },
        adTextStyle: {
            ...themeFonts.notosans_medium_16,
            color: themeColor[theme].seegnal_lwhite_gray,
        },
        activeButton: {
            height: sizeConverter(40),
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            borderWidth: 0,
            width: sizeConverter(139.5),
            borderRadius: 0,
            borderBottomLeftRadius: sizeConverter(8)
        },
        closeButton: {
            height: sizeConverter(40),
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            borderWidth: 0,
            width: sizeConverter(139.5),
            borderRadius: 0,
            borderBottomRightRadius: sizeConverter(8)
        },
        divideItem: {
            height: sizeConverter(16),
            width: sizeConverter(1),
            backgroundColor: themeColor[theme].seegnal_light_gray1
        }
    })

    const onPressBack = () => {
        navigation.pop()
    }

    const onPressConfirm = () => {
        navigation.pop()
    }

    return (
        <View style={styles.container}>
            <BackgroundOpacity absolute onPress={onPressBack} />
            <View style={styles.contentView}>
                <View style={styles.adViewStyle}>
                    <Text style={styles.adTextStyle}>{`광고`}</Text>
                </View>
                <View style={{ justifyContent: 'space-between' }}>
                    <View style={styles.buttonView}>
                        <CustomButton
                            onPress={onPressConfirm}
                            text={'오늘 하루 그만보기'}
                            textStyle={{
                                color: themeColor[theme].seegnal_gray,
                                ...themeFonts.notosans_medium_12
                            }}
                            buttonStyle={styles.activeButton}
                        />
                        <View style={styles.divideItem} />
                        <CustomButton
                            onPress={onPressBack}
                            text={'닫기'}
                            textStyle={{
                                color: themeColor[theme].seegnal_dark_gray,
                                ...themeFonts.notosans_medium_12
                            }}
                            buttonStyle={styles.closeButton}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AdvertisementScreen