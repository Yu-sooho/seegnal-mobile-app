
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizeConverter } from '../../../utils';
import { ImageButtonList } from '../../organisms';
import createRootStore from '../../../stores';
import { BackgroundOpacity, ModalContent, ModalHeaderButton } from '../../atoms';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { RootStackParamList } from '../../../navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { ModalHeader } from '../../molecules';
import { EMOTION_TYPE, themeColor, themeFonts } from '../../../resources';
import { Icon24ArrowLeft } from '../../icons';


const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()
const modalSize = sizeConverter(252)

type Props = StackScreenProps<RootStackParamList, 'ImageButtonModalScreen'>

const ImageButtonModalScreen = ({ navigation, route }: Props) => {

    const styles = StyleSheet.create({
        loginButtonViewStyle: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'transparent'
        },
        titleText: {
            ...themeFonts.santokki_bold_20,
            color: themeColor[theme].seegnal_dark_gray
        }
    });

    const { dataList, onPressItem } = route.params

    useEffect(() => {
        startAnim()
    }, [])

    const onPressBack = (anim: boolean) => {
        if (anim) {
            endAnim()
        }
        navigation.pop()
        return true
    }

    const startAnim = () => {
        opacityOffset.value = 1
        translateYOffset.value = 0
    }

    const endAnim = () => {
        translateYOffset.value = modalSize / 2
        opacityOffset.value = 0
    }

    const translateYOffset = useSharedValue(modalSize / 2);
    const opacityOffset = useSharedValue(0);

    const transformAnimatedStyles = useAnimatedStyle(() => {
        return {
            position: 'absolute',
            bottom: 0,
            transform: [
                {
                    translateY: withTiming(translateYOffset.value, {
                        duration: 300,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    })
                },
            ],
        };
    });

    const opacityAnimatedStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacityOffset.value)
        };
    });

    const CenterContent = () => {
        return (
            <View>
                <Text style={styles.titleText}>{'기분'}</Text>
            </View>
        )
    }

    const LeftContent = () => {
        return (
            <ModalHeaderButton
                onPress={
                    () => {
                        onPressBack?.(true)
                    }}
            >
                <Icon24ArrowLeft />
            </ModalHeaderButton>
        )
    }

    return (
        <View style={styles.loginButtonViewStyle}>
            <ModalContent style={opacityAnimatedStyles}>
                <BackgroundOpacity onPress={() => { onPressBack(true) }} />
            </ModalContent>
            <ModalContent style={[transformAnimatedStyles, opacityAnimatedStyles]}>
                <ModalHeader leftContent={LeftContent} centerContent={CenterContent} />
                <ImageButtonList
                    onPressItem={
                        (item: EMOTION_TYPE) => {
                            onPressItem(item)
                            onPressBack?.(true)
                            return true
                        }}
                    dataList={dataList}
                />
            </ModalContent>
        </View>
    );
};

export default ImageButtonModalScreen;
