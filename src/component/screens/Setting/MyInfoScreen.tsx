import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Platform } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { images, themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomSafeAreaView, HeaderActiveButton, ImageButton, TitleText } from '../../atoms'
import { CustomHeader, CustomInfoInput } from '../../molecules'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

const store = createRootStore()

const MyInfoScreen = () => {

    const theme = store.appStateStore.selectedTheme.get()

    const [isActive, setIsActive] = useState(false)
    const [name, setName] = useState('')
    const [account, setAccount] = useState('')
    const [userImage, setUserImage] = useState('')

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

    const onPressImageChange = async () => {
        checkPermission()
    }

    const checkPermission = async () => {
        const permissionMedia = Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        const result = await check(permissionMedia)
        switch (result) {
            case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                break;
            case RESULTS.DENIED:
                console.log('The permission has not been requested / is denied but requestable');
                break;
            case RESULTS.LIMITED:
                openImagePicker()
                break;
            case RESULTS.GRANTED:
                openImagePicker()
                break;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                break;
        }
    }

    const openImagePicker = async () => {
        ImagePicker.openPicker({
            cropping: true,
            cropperCircleOverlay: true
        }).then(image => {
            if (image?.path)
                setUserImage(image.path)
        }).catch((error) => {
            console.log(error)
        });
    }

    const onChangeName = (value: string) => {
        setName(value)
    }

    const onChangeAccount = (value: string) => {
        setAccount(value)
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
            marginTop: sizeConverter(16)
        },
        inputView: {
            paddingHorizontal: sizeConverter(16)
        }
    })

    return (
        <CustomSafeAreaView>
            <CustomHeader style={{ paddingRight: 0 }} centerContent={Header} rightContent={HeaderRightContent} />
            <View>
                <ImageButton
                    onPress={onPressImageChange}
                    image={userImage ? { uri: userImage } : images.icon_profile_default}
                    style={styles.imageView}
                    text='프로필 사진 바꾸기'
                    textStyle={styles.textStyle}
                    imageStyle={{
                        borderRadius: sizeConverter(40)
                    }}
                />
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