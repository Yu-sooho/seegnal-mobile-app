import { observer } from 'mobx-react-lite'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'
import { EMOTION_TYPE, themeColor } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { ImageButton } from '../../atoms'

type ImageButtonListProps = {
    dataList: Array<EMOTION_TYPE>,
    onPressItem: (item: EMOTION_TYPE) => {}
}

const stores = createRootStore()


const ImageButtonList = ({ dataList, onPressItem }: ImageButtonListProps) => {

const theme = stores.appStateStore.selectedTheme.get()


    const insets = initialWindowMetrics?.insets

    const styles = StyleSheet.create({
        container: {
            width: sizeConverter(360),
            height: sizeConverter(398),
            backgroundColor: themeColor[theme].seegnal_lwhite_gray
        },
        contentContainer: {
            paddingHorizontal: sizeConverter(12),
            paddingTop: sizeConverter(16),
            paddingBottom: (insets?.bottom ? insets?.bottom : 0) + sizeConverter(16)
        },
        itemStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const renderItem = ({ item, index }: { item: EMOTION_TYPE, index: number }) => {
        return (
            <View style={styles.itemStyle}>
                <ImageButton
                    item={item}
                    onPress={() => { onPressItem(item) }}
                />
            </View>
        )
    }

    const ItemSeparatorComponent = () => {
        return (
            <View style={{ height: sizeConverter(16) }} />
        )
    }

    return (
        <View>
            <FlatList
                style={styles.container}
                ItemSeparatorComponent={ItemSeparatorComponent}
                contentContainerStyle={styles.contentContainer}
                numColumns={3}
                renderItem={renderItem}
                data={dataList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default observer(ImageButtonList)