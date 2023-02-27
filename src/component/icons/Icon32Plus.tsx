import React from 'react'
import { Image } from 'react-native'
import { images } from '../../resources'
import { sizeConverter } from '../../utils'

type Icon32PlusProps = {
  imageStyle?: object
}

const Icon32Plus = ({ imageStyle }: Icon32PlusProps) => {
  return <Image style={imageStyle} source={images.icon_32_plus} />
}

Icon32Plus.defaultProps = {
  imageStyle: {
    width: sizeConverter(32),
    height: sizeConverter(32),
  },
}

export default Icon32Plus
