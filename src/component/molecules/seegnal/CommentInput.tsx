import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomTextInput, UserImage } from '../../atoms'

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const CommentInput = () => {

    const styles = StyleSheet.create({
        container:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
        textViewStyle:{
            width:sizeConverter(264),
            height:sizeConverter(24),
            backgroundColor:themeColor[theme].seegnal_light_gray1,
            borderRadius:sizeConverter(20),
            paddingLeft:sizeConverter(12),
            paddingRight:sizeConverter(12),
        },
        textStyle:{
            width:sizeConverter(264),
            ...themeFonts.notosans_medium_12,
            paddingLeft:sizeConverter(12),
            color:themeColor[theme].seegnal_dark_gray,
        }
    })

    return (
        <View style={styles.container}>
            <UserImage isText={false} />
            <CustomTextInput placeholder={'상대방 씨그날에 코멘트를 남겨보세요!'} viewStyle={styles.textViewStyle}  textStyle={styles.textStyle} />
        </View>
    )
}

export default CommentInput