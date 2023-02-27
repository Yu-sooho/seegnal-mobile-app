import React from 'react'
import FastImage from 'react-native-fast-image'
import { images } from '../../../resources'
import { sizeConverter } from '../../../utils'

type Icon48ActiveHomeProps = {
  imageStyle?: object
}

const Icon48ActiveHome = ({ imageStyle }: Icon48ActiveHomeProps) => {
  return <FastImage style={imageStyle} source={images.icon_48_active_home} />
}

Icon48ActiveHome.defaultProps = {
  imageStyle: {
    width: sizeConverter(48),
    height: sizeConverter(48),
  },
}

export default Icon48ActiveHome
