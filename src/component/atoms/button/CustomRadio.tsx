import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import Icon16CheckBox from '../../icons/Icon16CheckBox'

type CustomRadioProps = {
    style?: object,
    imageStyle?: object,
    unActiveStyle?: object,
    onPress: () => {},
    disabled?: boolean,
    isActive?: boolean,
    text?: string
    subText?: string,
    textStyle?: object,
    subTextStyle?: object,
    textViewStyle?: object
}

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const CustomRadio = ({ style, imageStyle, onPress, disabled, isActive, unActiveStyle, text, subText, subTextStyle, textStyle, textViewStyle }: CustomRadioProps) => {

    const [active, setActive] = useState(isActive)

    useEffect(() => {
        setActive(isActive)
    }, [isActive, disabled])

    const UnActiveItem = () => {
        return (
            <View style={unActiveStyle} />
        )
    }

    const styles = StyleSheet.create({
        style: {
            width: sizeConverter(24),
            heght: subText? sizeConverter(44) : sizeConverter(24),
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: subText ? sizeConverter(20) : 0
        },
        imageStyle: {
            width: sizeConverter(19.2),
            height: sizeConverter(19.2),
            borderWidth: sizeConverter(2),
            borderRadius: sizeConverter(19.2),
            borderColor: themeColor[theme].seegnal_main,
            tintColor: themeColor[theme].seegnal_main,
        },
        unActiveStyle: {
            width: sizeConverter(19.2),
            height: sizeConverter(19.2),
            borderColor: themeColor[theme].seegnal_gray,
            borderWidth: sizeConverter(2),
            borderRadius: sizeConverter(19.2)
        },
        textStyle: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_dark_gray,
        },
        textViewStyle: {
            marginLeft: sizeConverter(12),
            height: subText? sizeConverter(44):sizeConverter(24),
            justifyContent: 'flex-start',
        },
        subTextStyle:{
            ...themeFonts.notosans_medium_12,
            color: themeColor[theme].seegnal_deep_gray,
            height: sizeConverter(24),
        }
    })

    return (
        <TouchableOpacity
            onPress={() => {
                if (disabled) return
                onPress()
            }}
            style={{ flexDirection: 'row', alignItems: 'center' }}
        >
            <View style={{...styles.style,...style}}>
                {active ?
                    <Icon16CheckBox imageStyle={imageStyle} />
                    :
                    <UnActiveItem />
                }
            </View>
            <View style={{ ...styles.textViewStyle, ...textViewStyle }}>
                <Text style={{ ...styles.textStyle, ...textStyle }}>
                    {text}
                </Text>
                {subText &&
                    <Text style={{ ...styles.subTextStyle, ...subTextStyle}}>{subText}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

CustomRadio.defaultProps = {
    onPress: () => { },
    style: {
        width: sizeConverter(24),
        heght: sizeConverter(24),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imageStyle: {
        width: sizeConverter(19.2),
        height: sizeConverter(19.2),
        borderWidth: sizeConverter(2),
        borderRadius: sizeConverter(19.2),
        borderColor: themeColor[theme].seegnal_main,
        tintColor: themeColor[theme].seegnal_main,
    },
    unActiveStyle: {
        width: sizeConverter(19.2),
        height: sizeConverter(19.2),
        borderColor: themeColor[theme].seegnal_gray,
        borderWidth: sizeConverter(2),
        borderRadius: sizeConverter(19.2)
    },
    disabled: false,
    isActive: false,
}

export default CustomRadio