import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'
import { CustomRadio } from '../atoms'
import { Icon24ArrowRight } from '../icons'

type RadioTextButtonProps = {
    containerStyle?: object,
    style?: object,
    imageStyle?: object,
    unActiveStyle?: object,
    onPress?: () => {},
    disabled?: boolean,
    isActive?: boolean,
    text: string,
    subText?: string,
    textStyle?: object,
    subTextStyle?: object,
    textViewStyle?: object,
    rightContent?: Function
}

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const RadioTextButton = ({ containerStyle, style, imageStyle, unActiveStyle, onPress, disabled, isActive, text, subText, textStyle, subTextStyle, rightContent, textViewStyle }: RadioTextButtonProps) => {

    const styles = StyleSheet.create({
        rightButton:{
            justifyContent:'space-between',
            flexDirection:'row',
            width:'100%',
            marginBottom:subText ? sizeConverter(20) : 0,
        },
        containerStyle:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
            width:'100%'
        }
    })

    return (
        <View style={{...styles.containerStyle,...containerStyle}}>
            <CustomRadio textStyle={textStyle} textViewStyle={textViewStyle} subText={subText} subTextStyle={subTextStyle} text={text} style={style} imageStyle={imageStyle} unActiveStyle={unActiveStyle} onPress={onPress} disabled={disabled} isActive={isActive} />
            <TouchableOpacity style={styles.rightButton}>
                <View>
                    {rightContent &&
                        rightContent()
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

RadioTextButton.defaultProps = {
    onPress: () => { },
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width:'100%'
    },
    style: {
        width: sizeConverter(24),
        heght: sizeConverter(24),
        justifyContent: 'center',
        alignItems: 'center'
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
    isActive: false
}


export default RadioTextButton