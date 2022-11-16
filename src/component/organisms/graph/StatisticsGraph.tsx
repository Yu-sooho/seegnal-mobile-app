import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { themeColor } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { ColorBar, ColorBarVertical, TitleText } from '../../atoms'
import ColorBarView from '../../molecules/graph/ColorBarView'

type Props = {
    title?: string,
    contentContainerStyle?: StyleProp<ViewStyle>
}


const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const temp = () => {
    const data = []
    for (let i = 0; i < 12; i++) {
        data.push({
            month: i + 1,
            tempData: Math.floor(Math.random() * (50 - 0))
        })
    }
    return data
}

const StatisticsGraph = ({ title, contentContainerStyle, }: Props) => {
    const isFocused = useIsFocused();

    const dummy = temp()

    console.log(dummy, 'FUFU')

    const styles = StyleSheet.create({
        container: {

        },
        contentView: {
            minHeight: sizeConverter(198),
            minWidth: sizeConverter(328),
            borderRadius: sizeConverter(12),
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            marginTop: sizeConverter(16)
        }
    })

    const RenderHorizontalValue = () => {
    }

    const RenderVerticalValue = () => {

    }

    const RenderColorBar = () => {

    }

    return (
        <View style={[styles.container, contentContainerStyle]}>
            <TitleText text={title} />
            <View style={styles.contentView}>
                {/* <ColorBarView action  percent={60} color={themeColor[theme].seegnal_secondary_1} /> */}
                <ColorBarVertical action={isFocused} color={themeColor[theme].seegnal_apple_login} maxHeight={sizeConverter(360)} percent={100} />
            </View>
        </View>
    )
}

export default StatisticsGraph