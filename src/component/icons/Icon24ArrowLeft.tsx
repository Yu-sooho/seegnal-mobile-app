import React from 'react'
import FastImage from 'react-native-fast-image'
import { images } from '../../resources'
import { sizeConverter } from '../../utils'

type Icon24ArrowLeftProps = {
  imageStyle?: object
}

const Icon24ArrowLeft = ({ imageStyle }: Icon24ArrowLeftProps) => {
  return <FastImage style={imageStyle} source={images.icon_24_arrow_left} />
}

Icon24ArrowLeft.defaultProps = {
  imageStyle: {
    width: sizeConverter(24),
    height: sizeConverter(24),
  },
}

export default Icon24ArrowLeft
