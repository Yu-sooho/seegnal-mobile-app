import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LoginStackParamList } from '../../../navigation'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomSafeAreaView } from '../../atoms'
import { CustomHeader, FloatingNextButton } from '../../molecules'

type Props = NativeStackScreenProps<LoginStackParamList, 'RegistCalendarScreen'>

const stores = createRootStore()

const RegistCalendarScreen = ({ navigation, route }: Props) => {

    const theme = stores.appStateStore.selectedTheme.get()

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
    })

    const onPressNext = () => {
        navigation.navigate('RegistAverageScreen')
    }

    return (
        <CustomSafeAreaView>
            <CustomHeader />
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{`최근 생리 기간을 알려주세요`}</Text>
                <Text style={styles.contentText}>{`알려주신 정보로 생리 주기를 예측할게요`}</Text>
            </View>
            <FloatingNextButton onPress={onPressNext} text={'다음'} />
        </CustomSafeAreaView>
    )
}

export default observer(RegistCalendarScreen)