import { useAtom } from 'jotai'

import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { STATUS_BUTTONS_TYPE, themeColor } from '../../resources'
import { selectedTheme } from '../../stores'
import { sizeConverter } from '../../utils'
import { StatusButton } from '../atoms'

type Props = {
  absolute: boolean
  onPressBack?: () => void
  bottomInset?: number
  buttonList?: Array<Object>
  isVisible?: boolean
  onPress?: (item?: STATUS_BUTTONS_TYPE) => void
}

const HomeFloatingButtonView = ({
  absolute,
  onPressBack,
  bottomInset,
  buttonList,
  isVisible,
  onPress,
}: Props) => {
  const [theme] = useAtom(selectedTheme)

  const fade = useSharedValue(0)

  const [showViews, setShowViews] = useState(false)

  const fadeStyle = useAnimatedStyle(() => ({
    opacity: withTiming(fade.value, {
      duration: 300,
    }),
  }))

  useEffect(() => {
    if (isVisible) {
      startAnim()
    } else {
      closeAnim()
    }
  }, [isVisible])

  const startAnim = () => {
    fade.value = 1
    setShowViews(true)
  }

  const closeAnim = () => {
    setShowViews(false)
    fade.value = 0
  }

  const styles = StyleSheet.create({
    container: {
      position: absolute ? 'absolute' : 'relative',
      height: '100%',
    },
    buttonView: {
      width: Dimensions.get('window').width,
      height: '100%',
      backgroundColor: themeColor[theme].seegnal_default_opacity,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    itemContainer: {
      bottom: bottomInset,
      marginBottom: sizeConverter(12),
      paddingRight: sizeConverter(16),
    },
  })

  return (
    <Animated.View
      pointerEvents={isVisible ? 'auto' : 'none'}
      style={[styles.container, fadeStyle]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressBack}
        style={styles.buttonView}
      >
        {buttonList?.map((element: any, index: number) => {
          const transform = useSharedValue(0)
          const transformAnimatedStyles = useAnimatedStyle(() => {
            return {
              position: 'absolute',
              transform: [
                {
                  translateY: withTiming(transform.value, {
                    duration: 300,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                  }),
                },
              ],
            }
          })

          if (showViews) {
            transform.value =
              (-sizeConverter(32) - sizeConverter(12)) * (index + 1)
          } else {
            transform.value = 0
          }

          return (
            <StatusItem
              transformAnimatedStyles={transformAnimatedStyles}
              key={`${element?.id}-${index}`}
              item={element}
              containerStyle={styles.itemContainer}
              onPress={onPress}
            />
          )
        })}
      </TouchableOpacity>
    </Animated.View>
  )
}

type StatusItemProps = {
  item?: STATUS_BUTTONS_TYPE
  transformAnimatedStyles: any
  containerStyle?: StyleProp<ViewStyle>
  onPress?: (item?: STATUS_BUTTONS_TYPE) => void
}

const StatusItem = ({
  item,
  transformAnimatedStyles,
  containerStyle,
  onPress,
}: StatusItemProps) => {
  return (
    <Animated.View style={[transformAnimatedStyles, containerStyle]}>
      <StatusButton onPress={onPress} item={item} />
    </Animated.View>
  )
}

HomeFloatingButtonView.defaultProps = {
  isVisible: false,
  bottomInset: 0,
}

export default HomeFloatingButtonView
