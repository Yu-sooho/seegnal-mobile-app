import React from 'react'
import FastImage from 'react-native-fast-image'
import { images } from '../../../resources'
import { sizeConverter } from '../../../utils'

type Icon48ActiveGraphProps = {
  imageStyle?: object
}

const Icon48ActiveGraph = ({ imageStyle }: Icon48ActiveGraphProps) => {
  return <FastImage style={imageStyle} source={images.icon_40_default_graph} />
}

Icon48ActiveGraph.defaultProps = {
  imageStyle: {
    width: sizeConverter(40),
    height: sizeConverter(40),
  },
}

export default Icon48ActiveGraph
