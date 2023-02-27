import { useIsFocused } from '@react-navigation/native'
import { useAtom } from 'jotai'

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { themeColor } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'
import { ColorBarVertical } from '../../atoms'

type Props = {
  item: object
}

const GraphView = ({ item }: Props) => {
  const [theme] = useAtom(selectedTheme)

  const isFocused = useIsFocused()

  const styles = StyleSheet.create({
    container: {},
    contentView: {
      minHeight: sizeConverter(198),
      minWidth: sizeConverter(328),
      borderRadius: sizeConverter(12),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
    },
  })

  const RenderHorizontalValue = () => {}

  const RenderVerticalValue = () => {}

  const RenderColorBar = () => {}

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <ColorBarVertical
          action={isFocused}
          color={themeColor[theme].seegnal_apple_login}
          maxHeight={sizeConverter(360)}
          percent={100}
        />
      </View>
    </View>
  )
}

export default GraphView
