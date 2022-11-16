import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { themeColor } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { ColorBarVertical, TitleText } from '../../atoms'

type Props = {
    item: object
}


const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const GraphView = ({ item }: Props) => {
    const isFocused = useIsFocused();

    const styles = StyleSheet.create({
        container: {

        },
        contentView: {
            minHeight: sizeConverter(198),
            minWidth: sizeConverter(328),
            borderRadius: sizeConverter(12),
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
        }
    })

    const RenderHorizontalValue = () => {

    }

    const RenderVerticalValue = () => {

    }

    const RenderColorBar = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <ColorBarVertical action={isFocused} color={themeColor[theme].seegnal_apple_login} maxHeight={sizeConverter(360)} percent={100} />
            </View>
        </View>
    )
}

export default GraphView