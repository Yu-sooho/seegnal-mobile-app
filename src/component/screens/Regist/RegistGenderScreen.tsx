import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { LoginStackParamList } from '../../../navigation'
import { GENDER, themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomButton, CustomSafeAreaView } from '../../atoms'
import { FloatingNextButton } from '../../molecules'

type Props = NativeStackScreenProps<LoginStackParamList, 'RegistGenderScreen'>;

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const RegistGenderScreen = ({ navigation, route }: Props) => {

    const [gender, setGender] = useState('')

    const styles = StyleSheet.create({
        titleView: {
            marginTop: sizeConverter(80),
            paddingHorizontal: sizeConverter(16)
        },
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray
        },
        imageView: {
            marginTop: sizeConverter(32),
            paddingHorizontal: sizeConverter(16)
        },
        imageStyle: {
            width: sizeConverter(328),
            height: sizeConverter(160),
            backgroundColor: themeColor[theme].seegnal_lwhite_gray
        },
        contentText: {
            ...themeFonts.notosans_medium_12,
            color: themeColor[theme].seegnal_dark_gray,
            textAlign: 'center'
        },
        buttonView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: sizeConverter(16),
            marginTop: sizeConverter(16)
        }
    })

    const onPressGenderButton = (gender: string) => {
        setGender(gender)
    }

    const onPressNext = () => {
        if (gender !== GENDER['MAN'] && gender !== GENDER['WOMAN']) return
        navigation.navigate('RegistCalendarScreen')
    }

    return (
        <CustomSafeAreaView>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>????????? ???????????????</Text>
            </View>
            <View style={styles.imageView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.contentText}>{`?????? ?????????\n???????????? ????????????`}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.contentText}>{`?????? ?????????\n??????????????? ???????????????`}</Text>
                    </View>
                </View>
                <View style={{ marginTop: sizeConverter(16) }}>
                    <FastImage style={styles.imageStyle} />
                </View>
            </View>
            <View style={styles.buttonView}>
                <CustomButton
                    disabled={gender !== GENDER['WOMAN']}
                    onPress={() => { onPressGenderButton(GENDER['WOMAN']) }}
                    defaultButtonStyle={{ width: sizeConverter(156), height: sizeConverter(48) }}
                    disabledButtonStyle={{ width: sizeConverter(156), height: sizeConverter(48) }}
                    text={GENDER['WOMAN']}
                />
                <CustomButton
                    disabled={gender !== GENDER['MAN']}
                    onPress={() => { onPressGenderButton(GENDER['MAN']) }}
                    defaultButtonStyle={{ width: sizeConverter(156), height: sizeConverter(48) }}
                    disabledButtonStyle={{ width: sizeConverter(156), height: sizeConverter(48) }}
                    text={GENDER['MAN']}
                />
            </View>
            <FloatingNextButton onPress={onPressNext} text={'??????'} disabled={gender !== GENDER['MAN'] && gender !== GENDER['WOMAN']} />
        </CustomSafeAreaView>
    )
}

export default RegistGenderScreen