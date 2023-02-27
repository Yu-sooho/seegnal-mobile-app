import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { sizeConverter } from '../../utils'
import { AnimatedText } from '../atoms'

type ScrollingTextProps = {
  animatedValue: Animated.Value
  data: Array<any>
  sliderWidth: number
  titleStyle?: object
  textStyle?: object
  style?: object
}

const ScrollingText = ({
  animatedValue,
  data,
  sliderWidth,
  titleStyle,
  textStyle,
  style,
}: ScrollingTextProps) => {
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
    textView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    },
  })

  return (
    <View style={styles.textView}>
      {data.map((element, index) => {
        const opacity = animArray[index].interpolate({
          inputRange: [0.5, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
        return (
          <Animated.View
            key={`${index}_keys`}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              opacity: opacity,
            }}
          >
            <AnimatedText textStyle={{ ...titleStyle }} text={element?.title} />
            <AnimatedText textStyle={{ ...textStyle }} text={element?.text} />
          </Animated.View>
        )
      })}
    </View>
  )
}

ScrollingText.defaultProps = {
  animatedValue: new Animated.Value(0),
  data: [],
  sliderWidth: sizeConverter(280),
  titleStyle: {
    width: sizeConverter(280),
    textAlign: 'center',
    marginBottom: sizeConverter(8),
  },
  textStyle: {
    maxWidth: sizeConverter(280),
    textAlign: 'center',
  },
}

export default ScrollingText
