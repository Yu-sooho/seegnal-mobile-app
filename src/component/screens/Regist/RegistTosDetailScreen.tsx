import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { LoginStackParamList } from '../../../navigation'
import { themeColor, themeFonts } from '../../../resources'
import createRootStore from '../../../stores'
import { sizeConverter } from '../../../utils'
import { CustomSafeAreaView } from '../../atoms'
import { CustomHeader } from '../../molecules'

type Props = NativeStackScreenProps<LoginStackParamList, 'RegistTosDetailScreen'>


const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const RegistTosDetailScreen = ({ navigation, route }: Props) => {
    const { type } = route?.params
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: sizeConverter(16),
            paddingTop: sizeConverter(16),
            minHeight: Dimensions.get('window').height
        },
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray
        },
        contentText: {
            ...themeFonts.notosans_regular_14,
            color: themeColor[theme].seegnal_dark_gray
        }
    })

    return (
        <CustomSafeAreaView>
            <CustomHeader />
            <ScrollView style={styles.container}>
                <Text style={styles.titleText}>Title</Text>
                <View style={{ marginTop: sizeConverter(16) }}>
                    <Text style={styles.contentText}>{type}</Text>
                </View>
            </ScrollView>
        </CustomSafeAreaView>
    )
}

export default RegistTosDetailScreen