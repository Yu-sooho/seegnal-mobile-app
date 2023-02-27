
import { useAtom } from 'jotai'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { images, themeColor, themeFonts } from '../../resources'
import { selectedTheme } from '../../stores'
import { sizeConverter } from '../../utils'
import { FloatingNextButton } from '../molecules'



type Props = {
    onPressSendSeegnal: () => void
}
const HistoryEmptyView = ({ onPressSendSeegnal }: Props) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: sizeConverter(139),
            flex: 1,
        },
        imageStyle: {
            width: sizeConverter(120),
            height: sizeConverter(97),
        },
        textStyle: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_dark_gray,
            textAlign: 'center',
            marginTop: sizeConverter(16)
        }
    })

    return (
        <View style={styles.container}>
            <FastImage style={styles.imageStyle} source={images.img_seegnal_noseegnal} />
            <Text style={styles.textStyle}>{`주고 받은 씨그날이 없어요.\n오늘의 씨그날을 보내볼까요?`}</Text>
            <FloatingNextButton onPress={onPressSendSeegnal} bottomInset={sizeConverter(24)} text={'오늘의 씨그날 보내기'} />
        </View>
    )
}

export default HistoryEmptyView