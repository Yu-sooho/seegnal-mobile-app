
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAtom } from 'jotai';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { RootStackParamList } from '../../../navigation';
import { themeColor, themeFonts } from '../../../resources';
import { selectedTheme } from '../../../stores';
import { sizeConverter } from '../../../utils';
import { CustomSafeAreaView, RightArrowButton, TitleText } from '../../atoms';
import { CustomHeader } from '../../molecules';

type Props = NativeStackScreenProps<RootStackParamList, 'AppInfoScreen'>;



const AppInfoScreen = ({ navigation, route }: Props) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        contentContainer: {
            paddingHorizontal: sizeConverter(16),
            marginTop: sizeConverter(16)
        },
        infoTextStyle: {
            ...themeFonts.notosans_bold_16,
            color: themeColor[theme].seegnal_dark_gray,
            letterSpacing: -sizeConverter(0.05),
            marginLeft: sizeConverter(6)
        },
        appVersionStyle: {
            ...themeFonts.notosans_bold_14,
            color: themeColor[theme].seegnal_gray,
            letterSpacing: -sizeConverter(0.04)
        }
    })

    const Header = () => {
        return (
            <TitleText text='앱 정보' textStyle={{ ...themeFonts.notosans_bold_16 }} />
        )
    }

    const AppVersion = () => {
        return (
            <Text style={styles.appVersionStyle}>
                ver 1.0.0
            </Text>
        )
    }

    return (
        <CustomSafeAreaView>
            <CustomHeader centerContent={Header} />
            <View style={styles.contentContainer}>
                <RightArrowButton
                    text={'이용약관'}
                    textStyle={styles.infoTextStyle}
                />
                <RightArrowButton
                    text={'개인정보 처리방침'}
                    textStyle={styles.infoTextStyle}
                />
                <RightArrowButton
                    text={'앱 버전'}
                    textStyle={styles.infoTextStyle}
                    rightContent={AppVersion}
                />
            </View>
        </CustomSafeAreaView>
    )
}

export default AppInfoScreen
