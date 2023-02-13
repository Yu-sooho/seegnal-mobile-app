import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { EMOTION_TYPE, images, themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'
import { ImageButton } from '../atoms'

type Props = {
    title?: string,
    text?: string,
    item?: EMOTION_TYPE,
    onPress?: () => void,
    disabled: boolean,
    count: number
}

const stores = createRootStore()

const SendImageButton = ({
    title,
    text,
    item,
    onPress,
    disabled,
    count
}: Props) => {

    const theme = stores.appStateStore.selectedTheme.get()

    const styles = StyleSheet.create({
        container: {
            width: sizeConverter(156),
            height: sizeConverter(176),
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            borderRadius: sizeConverter(12),
            paddingVertical: sizeConverter(16)
        },
        titleText: {
            ...themeFonts.santokki_bold_20,
            color: themeColor[theme].seegnal_dark_gray,
        },
        activeText: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_dark_gray
        },
        defaultText: {
            ...themeFonts.notosans_medium_14,
            color: themeColor[theme].seegnal_gray
        }
    })

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
            {
                title && (
                    <Text style={styles.titleText}>{title}</Text>
                )
            }
            <ImageButton disabled item={item} image={images.img_emotion_soso} />
            {
                count && (
                    <Text style={styles.titleText}>{`${count}번`}</Text>
                )
            }
            {!item?.keyword &&
                <Text style={styles.defaultText}>{text}</Text>
            }
        </TouchableOpacity>
    )
}

SendImageButton.defaultProps = {
    item: null,
    disabled: false,
    count: null
}

export default observer(SendImageButton)