
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Observer } from 'mobx-react-lite';
import React from 'react';
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { RootStackParamList } from '../../../navigation';
import { images, themeColor, themeFonts, themeType } from '../../../resources';
import createRootStore from '../../../stores';
import { sizeConverter } from '../../../utils';
import { CustomButton, CustomSafeAreaView, ImageButton, RightArrowButton, TitleText, UserImage } from '../../atoms';
import { CustomHeader, ThemeListItem } from '../../molecules';

type Props = NativeStackScreenProps<RootStackParamList, 'ThemeSettingScreen'>;

const stores = createRootStore()

const ThemeSettingScreen = ({ navigation, route }: Props) => {

    const styles = StyleSheet.create({
        contentContainer: {
            paddingHorizontal: sizeConverter(16),
            marginTop: sizeConverter(16)
        },
    })

    const onPressItem = async ({ item }: {
        item: themeType
    }) => {
        stores.appStateStore.setIsMounted(false)
        stores.appStateStore.setTheme(item.id)
        // stores.appStateStore.persistSelectedTheme = item?.id
        stores.appStateStore.setIsMounted(true)
    }

    const Header = () => {
        return (
            <TitleText text='테마' textStyle={{ ...themeFonts.notosans_bold_16 }} />
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <ThemeListItem item={item} index={index} onPress={onPressItem} />
        )
    }

    const ItemSeparatorComponent = () => {
        return (
            <View style={{ height: sizeConverter(16) }} />
        )
    }

    return (
        <CustomSafeAreaView>
            <CustomHeader centerContent={Header} />
            <View style={styles.contentContainer}>
                <FlatList ItemSeparatorComponent={ItemSeparatorComponent} data={dummy} renderItem={renderItem} />
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
        isActive: false,
        isSubscribe: false
    },
    {
        id: 1,
        imageUrl: 'www.naver.com',
        title: 'Title',
        description: 'body',
        isActive: true,
        isSubscribe: false
    },
    {
        id: 2,
        imageUrl: 'www.naver.com',
        title: 'Title',
        description: 'body',
        isActive: false,
        isSubscribe: true
    }
]

export default ThemeSettingScreen
