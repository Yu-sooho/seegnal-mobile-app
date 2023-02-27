import React, { Ref, useRef } from 'react'
import { ListRenderItem, View, Animated } from 'react-native'
import { sizeConverter } from '../../utils'
import { OnBoardImage } from '../atoms'

type ImageListProps = {
  renderItem: ListRenderItem<any>
  data: Array<object>
  ref?: Ref<any>
  sliderWidth?: number
  itemWidth?: number
  containerStyle?: object
  listStyle?: object
  listContainerStyle: object
  animatedValue?: Animated.Value
}

type onBoardImageItemProps = {
  imageUri: string
  id: number
}

type renderItemType = {
  item: onBoardImageItemProps
  index: number
}

const defaultRenderItem = ({ item, index }: renderItemType) => {
  return <OnBoardImage imageUri={item?.imageUri} />
}

const ImageList = ({
  renderItem,
  data,
  ref,
  sliderWidth,
  itemWidth,
  animatedValue,
  containerStyle,
  listStyle,
  listContainerStyle,
}: ImageListProps) => {
  const caroselAnimatedValue = useRef(new Animated.Value(0))

  return (
    <View style={{ ...containerStyle }}>
      <Animated.FlatList
        bounces={false}
        style={{ ...listStyle }}
        contentContainerStyle={{ ...listContainerStyle }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        horizontal
        ref={ref}
        keyExtractor={(item: any, index: number) =>
          `${item?.id}}${index}_onboard`
        }
        renderItem={renderItem}
        data={data}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animatedValue || caroselAnimatedValue.current,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
      />
    </View>
  )
}

ImageList.defaultProps = {
  renderItem: defaultRenderItem,
  data: [{}],
  ref: undefined,
  sliderWidth: sizeConverter(280),
  itemWidth: sizeConverter(280),
  containerStyle: {},
  listStyle: {},
  listContainerStyle: {},
}

export default ImageList
