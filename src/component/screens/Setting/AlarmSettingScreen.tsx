
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParamList } from '../../../navigation';
import { images, themeColor, themeFonts } from '../../../resources';
import createRootStore from '../../../stores';
import { sizeConverter } from '../../../utils';
import { CustomButton, CustomSafeAreaView, ImageButton, RightArrowButton, TitleText, UserImage } from '../../atoms';

type Props = NativeStackScreenProps<RootStackParamList, 'AlarmSettingScreen'>;

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const AlarmSettingScreen = ({ navigation, route }: Props) => {

    return(
        <View>
            <Text>123</Text>
        </View>
    )
}

export default AlarmSettingScreen
