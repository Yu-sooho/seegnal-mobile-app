import React from 'react'
import FastImage from 'react-native-fast-image'
import { images } from '../../../resources'
import { sizeConverter } from '../../../utils'

type Icon48ActiveSettingProps = {
  imageStyle?: object
}

const Icon48ActiveSetting = ({ imageStyle }: Icon48ActiveSettingProps) => {
  return <FastImage style={imageStyle} source={images.icon_48_active_setting} />
}

Icon48ActiveSetting.defaultProps = {
  imageStyle: {
    width: sizeConverter(48),
    height: sizeConverter(48),
  },
}

export default Icon48ActiveSetting
