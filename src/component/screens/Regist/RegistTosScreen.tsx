import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { LoginStackParamList } from '../../../navigation'
import { AGREELIST, images, themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomSafeAreaView, RightArrowButton } from '../../atoms'
import { FloatingNextButton, RadioTextButton } from '../../molecules'

type Props = NativeStackScreenProps<LoginStackParamList, 'RegistTosScreen'>;

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const RegistTosScreen = ({ navigation, route }: Props) => {

    const styles = StyleSheet.create({
        imageView: {
            marginTop: sizeConverter(120),
            marginBottom: sizeConverter(130),
            justifyContent:'center',
            alignItems:'center'
        },
        imageStyle: {
            width: sizeConverter(120),
            height: sizeConverter(70),
        },
        radioView: {
            width: '100%',
        },
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray,
            marginTop: sizeConverter(15)
        },
        contentText: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_gray,
            marginTop: sizeConverter(8)
        }
    })

    const [agreeService, setAgreeService] = useState(false)
    const [agreePersnal, setAgreePersnal] = useState(false)
    const [agreeSensitive, setAgreeSensitive] = useState(false)
    const [agreeMaketing, setAgreeMaketing] = useState(false)

    const onPressRadio = (type: string) => {
        switch (type) {
            case AGREELIST['SERVICE']:
                if (agreeService) {
                    setAgreeService(false)
                    break;
                }
                setAgreeService(true)
                break;
            case AGREELIST['PERSNAL']:
                if (agreePersnal) {
                    setAgreePersnal(false)
                    break;
                }
                setAgreePersnal(true)
                break;
            case AGREELIST['SENSTIVE']:
                if (agreeSensitive) {
                    setAgreeSensitive(false)
                    break;
                }
                setAgreeSensitive(true)
                break;
            case AGREELIST['MAKETING']:
                if (agreeMaketing) {
                    setAgreeMaketing(false)
                    break;
                }
                setAgreeMaketing(true)
                break;
            default:
                setAgreeService(true)
                setAgreePersnal(true)
                setAgreeSensitive(true)
                setAgreeMaketing(true)
                break;
        }
    }

    const onPressDetail = async (type: string) => {
        navigation.navigate('RegistTosDetailScreen', { type })
    }

    const onPressNext = async (type: string) => {
        if (agreeService && agreePersnal && agreeSensitive)
            navigation.navigate('RegistGenderScreen')
    }

    return (
        <CustomSafeAreaView>
            <View style={{ paddingLeft: sizeConverter(16), paddingRight: sizeConverter(24) }}>
                <View style={styles.imageView}>
                    <FastImage source={images.img_seegnal_hi} style={styles.imageStyle} />
                    <Text style={styles.titleText}>{`????????????!`}</Text>
                    <Text style={styles.contentText}>{`????????? ????????? ?????? ?????? ????????? ????????????`}</Text>
                </View>
                <View style={styles.radioView}>
                    <RadioTextButton
                        onPress={
                            () => {
                                onPressRadio('all')
                                return true
                            }
                        }
                        isActive={agreeService && agreePersnal && agreeSensitive && agreeMaketing}
                        text={'?????? ??????'}
                        containerStyle={{
                            marginBottom: sizeConverter(31)
                        }}
                        textStyle={{
                            ...themeFonts.notosans_bold_14,
                        }}
                    />
                    <RadioTextButton
                        onPress={
                            () => {
                                onPressRadio(AGREELIST['SERVICE'])
                                return true
                            }
                        }
                        isActive={agreeService}
                        text={'????????? ?????? ?????? ?????? (??????)'}
                        rightContent={() => { return <RightArrowButton onPress={() => onPressDetail(AGREELIST['SERVICE'])} /> }}
                        containerStyle={{
                            marginBottom: sizeConverter(13)
                        }}
                    />
                    <RadioTextButton
                        onPress={
                            () => {
                                onPressRadio(AGREELIST['PERSNAL'])
                                return true
                            }
                        }
                        isActive={agreePersnal}
                        text={'???????????? ?????? ??? ?????? ?????? (??????)'}
                        rightContent={() => { return <RightArrowButton onPress={() => onPressDetail(AGREELIST['PERSNAL'])} /> }}
                        containerStyle={{
                            marginBottom: sizeConverter(13)
                        }}
                    />
                    <RadioTextButton
                        onPress={
                            () => {
                                onPressRadio(AGREELIST['SENSTIVE'])
                                return true
                            }
                        }
                        isActive={agreeSensitive}
                        text={'?????? ?????? ?????? ?????? (??????)'}
                        rightContent={() => { return <RightArrowButton onPress={() => onPressDetail(AGREELIST['SENSTIVE'])} /> }}
                        containerStyle={{
                            marginBottom: sizeConverter(13)
                        }}
                    />
                    <RadioTextButton
                        onPress={
                            () => {
                                onPressRadio(AGREELIST['MAKETING'])
                                return true
                            }
                        }
                        isActive={agreeMaketing}
                        text={'????????? ?????? ?????? ?????? (??????)'}
                        subText={'????????? ????????? ????????? ????????? ??? ?????????'}
                        containerStyle={{
                            marginBottom: sizeConverter(13)
                        }}
                    />
                </View>
            </View>
            <FloatingNextButton onPress={onPressNext} text={'??????'} disabled={!agreePersnal || !agreeSensitive || !agreeService} />
        </CustomSafeAreaView>
    )
}

export default RegistTosScreen