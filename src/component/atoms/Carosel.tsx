import React from 'react'
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { themeColor } from '../../resources'
import { sizeConverter } from '../../utils'
import { useAtom } from 'jotai'
import { selectedTheme } from '../../stores'

type CaroselProps = {
  animatedValue: Animated.Value
  data: Array<any>
  sliderWidth: number
  caroselStyle?: StyleProp<ViewStyle>
  caroselActiveStyle?: StyleProp<ViewStyle>
}

const Carosel = ({
  animatedValue,
  data,
  sliderWidth,
  caroselStyle,
  caroselActiveStyle,
}: CaroselProps) => {
  const [theme] = useAtom(selectedTheme)

  const animArray: any[] = []

  data.forEach((element, index) => {
    if (index === 0) {
      animArray.push(
        animatedValue.interpolate({
          inputRange: [0, sliderWidth],
          outputRange: [1, 0.5],
          extrapolate: 'clamp',
        }),
      )
    } else if (index + 1 === data.length) {
      animArray.push(
        animatedValue.interpolate({
          inputRange: [
            (index - 2) * sliderWidth,
            (index - 1) * sliderWidth,
            index * sliderWidth,
          ],
          outputRange: [0.5, 0.5, 1],
          extrapolate: 'clamp',
        }),
      )
    } else {
      data
      animArray.push(
        animatedValue.interpolate({
          inputRange: [
            (index - 1) * sliderWidth,
            index * sliderWidth,
            (index + 1) * sliderWidth,
          ],
          outputRange: [0.5, 1, 0.5],
          extrapolate: 'clamp',
        }),
      )
    }
  })

  const styles = StyleSheet.create({
    caroselView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    caroselStyle: {
      width: sizeConverter(8),
      height: sizeConverter(8),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      marginHorizontal: sizeConverter(10),
      borderRadius: sizeConverter(4),
    },
    caroselActiveStyle: {
      width: sizeConverter(16),
      height: sizeConverter(8),
      backgroundColor: themeColor[theme].seegnal_gray,
      marginHorizontal: sizeConverter(10),
      borderRadius: sizeConverter(4),
    },
  })

  return (
    <View style={styles.caroselView}>
      {data.map((element, index) => {
        const opacity = animArray[index].interpolate({
          inputRange: [0.5, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
        const opacityR = opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        })
        return (
          <View style={{ alignItems: 'center' }} key={`${index}_keys`}>
            <Animated.View
              style={[
                {
                  opacity: opacityR,
                },
                styles.caroselStyle,
                caroselStyle,
              ]}
            />
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  marginHorizontal: 0,
                  backgroundColor: themeColor[theme].seegnal_main,
                  opacity: opacity,
                  transform: [{ scaleX: animArray[index] }],
                },
                styles.caroselActiveStyle,
                caroselActiveStyle,
              ]}
            />
          </View>
        )
      })}
    </View>
  )
}

Carosel.defaultProps = {
  animatedValue: new Animated.Value(0),
  data: [],
  sliderWidth: sizeConverter(280),
}

export default Carosel
