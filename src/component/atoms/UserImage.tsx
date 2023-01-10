import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { images, themeColor, themeFonts } from '../../resources'
import createRootStore from '../../stores'
import { sizeConverter } from '../../utils'
import { Icon16ArrowRight, Icon24ArrowRight } from '../icons'

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

type Props = {
    isText?: boolean,
    isEmail?: boolean,
    rightArrow?: boolean,
    textStyle?: StyleProp<TextStyle>,
    emailTextStyle?: StyleProp<TextStyle>,
    user?: object,
    size: number,
}

const UserImage = ({ isText, isEmail, size, textStyle, emailTextStyle, rightArrow, user }: Props) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            height: size,
        },
        imageStyle: {
            width: size,
            height: size,
            backgroundColor: themeColor[theme].seegnal_light_gray1,
            borderRadius: sizeConverter(12),
            marginRight: sizeConverter(8)
        },
        textStyle: {
            ...themeFonts.notosans_bold_14,
            color: themeColor[theme].seegnal_dark_gray,
        },
        titleView: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        arrowView: {
            justifyContent: 'center',
            paddingBottom: sizeConverter(6),
            marginLeft: sizeConverter(4)

        },
        rightArrow: {
            width: sizeConverter(16),
            height: sizeConverter(16),
            tintColor: themeColor[theme].seegnal_light_gray1,
        }
    })
    return (
        <TouchableOpacity style={styles.container}>
            <FastImage source={images.icon_profile_default} style={styles.imageStyle} />
            <View style={{ height: size, justifyContent: 'center' }}>
                {
                    isText && (
                        <View style={styles.titleView}>
                            <Text style={[styles.textStyle, textStyle]}>닉네임</Text>
                            {
                                rightArrow &&
                                <View style={styles.arrowView}>
                                    <Icon16ArrowRight imageStyle={styles.rightArrow} />
                                </View>
                            }
                        </View>)

                }
                {
                    isEmail &&
                    <Text style={[styles.textStyle, emailTextStyle]}>{'seegnal@kakao.net'}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

UserImage.defaultProps = {
    isText: true,
    size: sizeConverter(24)
}

export default UserImage