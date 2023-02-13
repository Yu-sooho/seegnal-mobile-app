import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'
import { ProgressBar } from '../atoms'

type EroticismBarProps = {
    width?: number,
    height?: number,
    initValue?: number,
    onChangeValue: (value: number) => void
}

const store = createRootStore()

const EroticismBar = ({
    width,
    height,
    onChangeValue,
    initValue
}: EroticismBarProps) => {

    const theme = store.appStateStore.selectedTheme.get()

    const styles = StyleSheet.create({
        container: {
            width: sizeConverter(328),
            height: sizeConverter(100),
            borderRadius: sizeConverter(12),
            padding: sizeConverter(16),
            justifyContent: 'space-between',
            backgroundColor: themeColor[theme].seegnal_lwhite_gray
        },
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray,
        },
    })

    const [eroticism, setEroticism] = useState(initValue || 0)

    const onChange = (value: number) => {
        setEroticism(Math.round(value))
        if (onChangeValue) onChangeValue(value)
        return value
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{`성욕 ${eroticism}%`}</Text>
            <View style={{ height: sizeConverter(32) }}>
                <ProgressBar initValue={initValue} width={width} height={height} onChangeValue={onChange} />
            </View>
        </View>
    )
}

export default observer(EroticismBar)