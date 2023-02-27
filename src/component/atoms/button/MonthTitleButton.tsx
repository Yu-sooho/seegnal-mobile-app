import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { sizeConverter } from '../../../utils'
import { Icon16Drop } from '../../icons'
import { TitleText } from '../text'


type Props = {
    month: number,
    onPress?: () => {}
}

const MonthTitleButton = ({ month, onPress }: Props) => {

    const styles = StyleSheet.create({
        container:{
            flexDirection:'row',
            alignItems:'center'
        },
    })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <TitleText text={`${month}월`} textStyle={{marginRight:sizeConverter(4)}} />
            <Icon16Drop />
        </TouchableOpacity>
    )
}

MonthTitleButton.defaultProps = {
    month: 1
}

export default MonthTitleButton