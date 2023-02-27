import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtom } from 'jotai'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../../../navigation'
import { themeColor, themeFonts, themeType } from '../../../resources'
import { selectedTheme } from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomSafeAreaView, TitleText } from '../../atoms'
import { CustomHeader, ThemeListItem } from '../../molecules'

type Props = NativeStackScreenProps<RootStackParamList, 'ThemeSettingScreen'>

const ThemeSettingScreen = ({ navigation, route }: Props) => {
    const [theme, setTheme] = useAtom(selectedTheme)

    const onPressItem = async ({ item }: { item: themeType }) => {
        setTheme(item.id)
        // stores.appStateStore.setIsMounted(false)
        // stores.appStateStore.setTheme(item.id)
        // // stores.appStateStore.persistSelectedTheme = item?.id
        // stores.appStateStore.setIsMounted(true)
    }

    const Header = () => {
        return (
            <TitleText text="테마" textStyle={{ ...themeFonts.notosans_bold_16 }} />
        )
    }

    const renderItem = ({ item, index }) => {
        return <ThemeListItem item={item} index={index} onPress={onPressItem} />
    }

    const ItemSeparatorComponent = () => {
        return <View style={{ height: sizeConverter(16) }} />
    }
    const styles = StyleSheet.create({
        contentContainer: {
            paddingHorizontal: sizeConverter(16),
            marginTop: sizeConverter(16),
        },
        color: {
            backgroundColor: themeColor[theme].seegnal_apple_login,
        },
    })

    return (
        <CustomSafeAreaView>
            <CustomHeader centerContent={Header} />
            <View style={styles.contentContainer}>
                <FlatList
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    data={dummy}
                    renderItem={renderItem}
                />
            </View>
        </CustomSafeAreaView>
    )
}

const dummy = [
    {
        id: 0,
        imageUrl: 'www.naver.com',
        title: 'Title',
        description: 'body',
        isSubscribe: true,
    },
    {
        id: 1,
        imageUrl: 'www.naver.com',
        title: 'Title',
        description: 'body',
        isSubscribe: true,
    },
    {
        id: 2,
        imageUrl: 'www.naver.com',
        title: 'Title',
        description: 'body',
        isSubscribe: true,
    },
]

export default ThemeSettingScreen
