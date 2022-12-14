import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image';
import Share from 'react-native-share';
import { LoginStackParamList, RootStackParamList } from '../../../navigation'
import { images, themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomSafeAreaView } from '../../atoms'
import { CustomHeader, FloatingNextButton } from '../../molecules'

type Props = CompositeScreenProps<
    NativeStackScreenProps<LoginStackParamList, 'RegistInviteScreen'>,
    NativeStackScreenProps<RootStackParamList>
>;

const store = createRootStore()
const theme = store.appStateStore.selectedTheme.get()

const RegistInviteScreen = ({ navigation, route }: Props) => {

    const isLoading = useRef(false)

    const styles = StyleSheet.create({
        titleView: {
            marginTop: sizeConverter(22),
            paddingHorizontal: sizeConverter(16)
        },
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray
        },
        contentText: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_dark_gray,
            marginTop: sizeConverter(8)
        },
        textInputView: {
            paddingHorizontal: sizeConverter(16),
            marginTop: sizeConverter(30)
        },
        inviteView: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: sizeConverter(60)
        },
        inviteImage: {
            width: sizeConverter(160),
            height: sizeConverter(98),
        },
        inviteButton: {
            width: sizeConverter(200),
            height: sizeConverter(43),
            borderRadius: sizeConverter(24),
            position: 'absolute',
            bottom: 0
        },
        buttonText: {
            marginTop: sizeConverter(24),
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
        }
    })

    const onPressShare = async () => {
        if (isLoading.current) return
        isLoading.current = true
        try {
            const options = {
                message: '????????? ?????? ?????????',
                url: 'www.naver.com'
            }
            const shareResponse = await Share.open(options);
            console.log(shareResponse)
            isLoading.current = false
        } catch (e) {
            console.log('[SH] RegistInviteScreen onPressShare error', e)
            isLoading.current = false
        }
    };

    const onPressNext = async () => {
        navigation.navigate('MainTab', { screen: 'HomeScreen' })
    }

    return (
        <CustomSafeAreaView>
            <CustomHeader />
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{`???????????? ????????????`}</Text>
                <Text style={styles.contentText}>{`?????? ????????? ????????????\n???????????? ?????? ????????? ????????? ?????????`}</Text>
            </View>
            <TouchableOpacity onPress={onPressShare} style={styles.inviteView}>
                <FastImage resizeMode={'contain'} source={images.img_seegnal_invite} style={styles.inviteImage} />
                <Text style={[styles.titleText, styles.buttonText]}>{`????????? ?????????`}</Text>
            </TouchableOpacity>
            <View style={{ marginTop: sizeConverter(20) }}>
                <Text style={[styles.contentText, { textAlign: 'center', color: themeColor[theme].seegnal_gray }]}>
                    {`???????????? ????????? ????????? ????????????????????? ????????????.\n`}
                    <Text style={[styles.contentText, { textAlign: 'center', color: themeColor[theme].seegnal_gray }]}>
                        <Text style={[styles.contentText, { textAlign: 'center' }]}>{`???! ????????? ??????????????? `}</Text>
                        {`????????? ??????????????? ????`}
                    </Text>
                </Text>
            </View>
            <FloatingNextButton onPress={onPressNext} text={'????????? ????????????'} />
        </CustomSafeAreaView>
    )
}

export default RegistInviteScreen