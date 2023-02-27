import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtom } from 'jotai'

import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation'
import { CONDITION, EMOTION, EMOTION_TYPE, themeColor, themeFonts } from '../../resources'
import { selectedTheme } from '../../stores'
import { sizeConverter } from '../../utils'
import { CustomSafeAreaView } from '../atoms'
import { CustomHeader, FloatingNextButton, SendImageButton } from '../molecules'
import EroticismBar from '../molecules/EroticismBar'

type Props = NativeStackScreenProps<RootStackParamList, 'SendSeegnalScreen'>


const SendSeegnalScreen = ({ navigation, route }: Props) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        titleView: {
            paddingHorizontal: sizeConverter(23)
        },
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray,
            marginTop: sizeConverter(15)
        },
        contentView: {
            alignItems: 'center',
            marginTop: sizeConverter(24)
        },
        contentText: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_gray,
            marginTop: sizeConverter(8)
        },
        imageView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: sizeConverter(16),
            marginTop: sizeConverter(16)
        }
    })

    const [condition,setCondition] = useState(Object)
    const [emotion,setEmotion] = useState(Object)
    const eroticismValue = useRef(50)

    const onPressEmotionItem = (item:EMOTION_TYPE) => {
        setEmotion(item)
        return true
    }
    
    const onPressConditionItem = (item:EMOTION_TYPE) => {
        setCondition(item)
        return true
    }
    
    const onChangeValue = (value: number) => {
        eroticismValue.current = value
    }

    const onPressEmotion = () => {
        navigation.push('ImageButtonModalScreen',{
            dataList:EMOTION,
            onPressItem: onPressEmotionItem
        })
    }

    const onPressCondition = () => {
        navigation.push('ImageButtonModalScreen',{
            dataList:CONDITION,
            onPressItem: onPressConditionItem
        })
    }

    return (
        <CustomSafeAreaView>
            <CustomHeader />
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{`찌릿 찌릿 -\n오늘의 씨그날은 어때요?`}</Text>
            </View>
            <View style={styles.contentView}>
                <EroticismBar initValue={eroticismValue.current} onChangeValue={onChangeValue} />
            </View>
            <View style={styles.imageView}>
                <SendImageButton item={emotion} onPress={onPressEmotion} title={'기분'} text={'보낼 감정 선택'} />
                <SendImageButton item={condition} onPress={onPressCondition} title={'몸상태'} text={'보낼 증상 선택'} />
            </View>
            <FloatingNextButton text={'씨그날 보내기'} disabled={!condition?.id || !emotion?.id} />
        </CustomSafeAreaView>
    )
}

export default SendSeegnalScreen