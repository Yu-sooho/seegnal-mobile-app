import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { sizeConverter } from '../../utils'
import { CustomButton } from '../atoms'
import { Icon32Plus } from '../icons'

type FloatingPlusButtonProps = {
  onPress?: (...args: any[]) => any
  text: string
  containerStyle?: object
  style?: object
  textStyle?: object
  disabled?: boolean
  bottomInset?: number
}

const FloatingPlusButton = ({
  onPress,
  style,
  containerStyle,
  disabled,
  bottomInset,
}: FloatingPlusButtonProps) => {
  const styles = StyleSheet.create({
    buttonViewStyle: {
      alignItems: 'flex-end',
      left: sizeConverter(288),
      bottom: bottomInset,
      width: sizeConverter(56),
      position: 'absolute',
    },
    buttonStyle: {
      width: sizeConverter(56),
      height: sizeConverter(56),
      borderRadius: sizeConverter(50),
    },
  })

  return (
    <View style={{ ...styles.buttonViewStyle, ...containerStyle }}>
      <CustomButton
        buttonStyle={styles.buttonStyle}
        onPress={onPress}
        buttonImage={<Icon32Plus />}
        disabled={disabled}
      />
    </View>
  )
}

FloatingPlusButton.defaultProps = {
  onPress: () => {},
  text: '다음',
  disabled: false,
  bottomInset: sizeConverter(24),
}

export default FloatingPlusButton
