import React from 'react'
import { StyleProp, Text, TextStyle, ViewStyle, TouchableOpacity } from 'react-native'
type DateButtonProps = {
    text: string,
    textStyle?: StyleProp<TextStyle>
    onPress?: () => {},
    buttonStyle?: StyleProp<ViewStyle>,
    disabled?: boolean
}

const DateButton = ({ text, textStyle, onPress, buttonStyle, disabled }: DateButtonProps) => {
    return (
        <TouchableOpacity disabled={disabled} style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

DateButton.defaultProps = {
    text: 'text',
    disabled: false
}

export default DateButton