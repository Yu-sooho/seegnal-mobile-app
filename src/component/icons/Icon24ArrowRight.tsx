import React from 'react'
import FastImage from 'react-native-fast-image'
import { images } from '../../resources'
import { sizeConverter } from '../../utils'

type Icon24ArrowRightProps = {
  imageStyle?: object
}

const Icon24ArrowRight = ({ imageStyle }: Icon24ArrowRightProps) => {
  return <FastImage style={imageStyle} source={images.icon_24_arrow_right} />
}

Icon24ArrowRight.defaultProps = {
  imageStyle: {
    width: sizeConverter(24),
    height: sizeConverter(24),
  },
}

export default Icon24ArrowRight
