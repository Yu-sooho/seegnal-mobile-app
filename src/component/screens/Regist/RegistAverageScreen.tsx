import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtom } from 'jotai'

import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginStackParamList } from '../../../navigation'
import { themeColor, themeFonts } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { onlyNum, sizeConverter } from '../../../utils'
import { CustomSafeAreaView } from '../../atoms'
import { CustomHeader, CustomInfoInput, FloatingNextButton } from '../../molecules'

type Props = NativeStackScreenProps<LoginStackParamList, 'RegistAverageScreen'>

const RegistAverageScreen = ({ navigation, route }: Props) => {

    const [theme] = useAtom(selectedTheme)

    const [period, setPeriod] = useState('')
    const [cycle, setCycle] = useState('')

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
    })

    const onPressNext = () => {
        navigation.navigate('RegistInviteScreen')
    }

    const onChangeTextPeriod = (text: string) => {
        setPeriod(onlyNum(text))
    }

    const onChangeTextCycle = (text: string) => {

        setCycle(onlyNum(text))
    }

    return (
        <CustomSafeAreaView disabled={false}>
            <CustomHeader />
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{`평균 생리 정보를 알려주세요`}</Text>
                <Text style={styles.contentText}>{`알려주신 정보로 생리 주기를 예측할게요`}</Text>
            </View>
            <View style={styles.textInputView}>
                <CustomInfoInput
                    keyboardType={'number-pad'}
                    value={period}
                    title={'생리 기간'}
                    onChangeText={onChangeTextPeriod}
                />
                <CustomInfoInput
                    keyboardType={'number-pad'}
                    value={cycle}
                    title={'생리 주기'}
                    onChangeText={onChangeTextCycle}
                    titleStyle={{ marginTop: sizeConverter(23) }}
                />
            </View>
            <FloatingNextButton onPress={onPressNext} text={'다음'} disabled={period?.length === 0 || cycle?.length === 0} />
        </CustomSafeAreaView>
    )
}

export default RegistAverageScreen