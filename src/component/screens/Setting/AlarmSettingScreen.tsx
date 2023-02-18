
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../navigation';
import { themeColor, themeFonts } from '../../../resources';
import createRootStore from '../../../stores';
import { sizeConverter } from '../../../utils';
import { CustomSafeAreaView, RightArrowButton, TitleText } from '../../atoms';
import { CustomHeader, SendImageButton } from '../../molecules';

type Props = NativeStackScreenProps<RootStackParamList, 'AlarmSettingScreen'>;

type AlramType = {

}

const store = createRootStore()

const AlarmSettingScreen = ({ navigation, route }: Props) => {

    const theme = store.appStateStore.selectedTheme.get()

    const Header = () => {
        return (
            <TitleText text='알림' textStyle={{ ...themeFonts.notosans_bold_16 }} />
        )
    }

    const RightContent = ({ isActive }: { isActive: boolean }) => {
        const styles = StyleSheet.create({
            imageStyle: {
                width: sizeConverter(32),
                height: sizeConverter(32),
                backgroundColor: themeColor[theme].seegnal_white
            },
            textStyle: {
                ...themeFonts.notosans_medium_12,
                color:themeColor[theme].seegnal_dark_gray,
                height:sizeConverter(16)
            },
            container:{
                alignItems:'center',
                justifyContent:'center'
            }
        })
        return (
            <View style={styles.container}>
                <View style={styles.imageStyle} />
                <Text style={styles.textStyle}>{isActive ? 'on' : 'off'}</Text>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.itemContainer}>
                <View>
                    <Text style={styles.titleText}>{item?.title}</Text>
                    <Text style={styles.discriptionText}>{item?.discription}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <RightContent isActive={true} />
                </View>
            </TouchableOpacity>
        )
    }

    const styles = StyleSheet.create({
        itemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: sizeConverter(56),
            paddingLeft: sizeConverter(24),
            paddingRight: sizeConverter(16),
        },
        rightContainer:{
            alignItems:'center',
            justifyContent:'center'
        },
        titleText:{
            ...themeFonts.notosans_bold_14,
            color:themeColor[theme].seegnal_dark_gray,
            lineHeight:sizeConverter(16),
            letterSpacing:-sizeConverter(0.04)
        },
        discriptionText:{
            ...themeFonts.notosans_medium_12,
            color:themeColor[theme].seegnal_gray,
            lineHeight:sizeConverter(16),
            letterSpacing:-sizeConverter(0.04)
        }
    })

    return (
        <CustomSafeAreaView>
            <CustomHeader centerContent={Header} />
            <FlatList renderItem={renderItem} data={dummy} />
        </CustomSafeAreaView>
    )
}

const dummy = [
    {
        title: '생리 예정일',
        discription: '생리 예정일 7일 전, 2일 전, 하루 전에 알려드려요',
        isActive: true
    },
    {
        title: '생리 시작-종료',
        discription: '생리 시작일, 생리 종료일에 알려드려요',
        isActive: false
    }
]

export default observer(AlarmSettingScreen)
