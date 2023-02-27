import React, { PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { sizeConverter } from '../../../utils'

const MadalHeaderButton: React.FC<
  PropsWithChildren<{
    style?: object
    onPress?: () => void
  }>
> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  )
}

MadalHeaderButton.defaultProps = {
  style: {
    width: sizeConverter(56),
    height: sizeConverter(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default MadalHeaderButton
