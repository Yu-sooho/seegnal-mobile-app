import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { sizeConverter } from '../../../utils'
import { TitleText } from '../../atoms'
import { GraphView } from '../../molecules'

type Props = {
  title?: string
}

type GraphItem = {
  item: {
    date: number
    month: number
  }
  index: number
}

const temp = () => {
  const data = []
  for (let i = 0; i < 12; i++) {
    const t = {
      month: i + 1,
      date: Math.floor(Math.random() * (50 - 0)),
    }
    data.push(t)
  }
  return data
}

const dummy = temp()

const StatisticsGraph = ({ title }: Props) => {
  const isFocused = useIsFocused()

  const styles = StyleSheet.create({
    textViewStyle: {
      paddingHorizontal: sizeConverter(16),
    },
    listStyle: {
      marginTop: sizeConverter(16),
    },
  })

  const RenderGraphItem = ({
    item,
    index,
  }: {
    item: object
    index: number
  }) => {
    return (
      <View
        style={{
          width: sizeConverter(360),
          paddingHorizontal: sizeConverter(16),
        }}
      >
        <GraphView item={item} />
      </View>
    )
  }

  const temp2 = [0, 1, 2, 3, 4, 5]

  return (
    <View>
      <TitleText viewStyle={styles.textViewStyle} text={title} />
      <FlatList
        initialScrollIndex={temp2?.length - 1}
        style={styles.listStyle}
        horizontal
        data={temp2}
        renderItem={RenderGraphItem}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default StatisticsGraph
