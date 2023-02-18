import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { images, themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomSafeAreaView, HeaderActiveButton, ImageButton, TitleText } from '../../atoms'
import { CustomHeader, CustomInfoInput } from '../../molecules'

const store = createRootStore()

const MyInfoScreen = () => {

    const theme = store.appStateStore.selectedTheme.get()

    const [isActive, setIsActive] = useState(false)
    const [name, setName] = useState('')
    const [account, setAccount] = useState('')

    const Header = () => {
        return (
            <TitleText text='내 정보' textStyle={{ ...themeFonts.notosans_bold_16 }} />
        )
    }

    const HeaderRightContent = () => {
        return (
            <HeaderActiveButton onPress={() => {
                if (isActive) {
                    setIsActive(false)
                    return
                }
                setIsActive(true)
            }} isActive={isActive} text={'완료'} />
        )
    }

    const styles = StyleSheet.create({
        imageView: {
            width: sizeConverter(360),
            height: sizeConverter(150),
            justifyContent: 'center',
        },
        textStyle: {
            ...themeFonts.notosans_bold_14,
            color: themeColor[theme].seegnal_dark_gray,
            lineHeight: sizeConverter(16),
            letterSpacing: -sizeConverter(0.04),
            marginTop:sizeConverter(16)
        },
        inputView: {
            paddingHorizontal: sizeConverter(16)
        }
    })

    const onChangeName = (value: string) => {
        setName(value)
    }

    const onChangeAccount = (value: string) => {
        setAccount(value)
    }

    return (
        <CustomSafeAreaView>
            <CustomHeader style={{ paddingRight: 0 }} centerContent={Header} rightContent={HeaderRightContent} />
            <View>
                <ImageButton image={images.icon_profile_default} style={styles.imageView} text='프로필 사진 바꾸기' textStyle={styles.textStyle} />
            </View>
            <View style={styles.inputView}>
                <CustomInfoInput
                    onChangeText={onChangeName}
                    value={name}
                    title='닉네임'
                    placeholder='seegnal'
                    
                />
                <CustomInfoInput
                    onChangeText={onChangeAccount}
                    value={account}
                    containerStyle={{ marginTop: sizeConverter(16) }}
                    title='로그인 계정'
                    discription='카카오에서 가입했어요!'
                    placeholder='seegnal@kakao.com'
                />
            </View>
        </CustomSafeAreaView>
    )
}

export default observer(MyInfoScreen)