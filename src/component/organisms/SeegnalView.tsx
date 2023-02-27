import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageButton } from '../atoms'
import { images } from '../../resources/images'
import { sizeConverter } from '../../utils'
import { themeColor, themeFonts } from '../../resources'
import { CommentInput, UserHeader } from '../molecules'

import { useAtom } from 'jotai'
import { selectedTheme } from '../../stores'

const SeegnalView = () => {
  const [theme] = useAtom(selectedTheme)

  const styles = StyleSheet.create({
    container: {
      width: sizeConverter(328),
      marginLeft: sizeConverter(16),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      borderRadius: sizeConverter(12),
    },
    headerView: {
      paddingHorizontal: sizeConverter(16),
      paddingTop: sizeConverter(16),
    },
    emotionView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: sizeConverter(35),
      marginTop: sizeConverter(32),
      paddingBottom: sizeConverter(16),
    },
    emotionImage: {
      width: sizeConverter(56),
      height: sizeConverter(56),
    },
    emotionText: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_dark_gray,
      marginTop: sizeConverter(4),
    },
    conmmentView: {
      paddingLeft: sizeConverter(16),
      paddingRight: sizeConverter(14),
      paddingBottom: sizeConverter(16),
    },
  })

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <UserHeader />
      </View>
      <View style={styles.emotionView}>
        <ImageButton
          disabled
          style={{ width: sizeConverter(56) }}
          imageStyle={styles.emotionImage}
          item={{
            image: images.img_emotion_love,
            keyword: '사랑해요',
          }}
          textStyle={styles.emotionText}
        />
        <ImageButton
          disabled
          style={{ width: sizeConverter(56) }}
          imageStyle={styles.emotionImage}
          item={{
            image: images.img_emotion_love,
            keyword: '사랑해요',
          }}
          textStyle={styles.emotionText}
        />
        <ImageButton
          disabled
          style={{ width: sizeConverter(56) }}
          imageStyle={styles.emotionImage}
          item={{
            image: images.img_emotion_love,
            keyword: '사랑해요',
          }}
          textStyle={styles.emotionText}
        />
      </View>
      <View style={styles.conmmentView}>
        <CommentInput />
      </View>
    </View>
  )
}

export default SeegnalView
