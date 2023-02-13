
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { RootStackParamList } from '../../../navigation';
import createRootStore from '../../../stores';
import { CustomSafeAreaView } from '../../atoms';

type Props = NativeStackScreenProps<RootStackParamList, 'AlarmSettingScreen'>;

const AlarmSettingScreen = ({ navigation, route }: Props) => {

    return (
        <CustomSafeAreaView>
            <Text>123</Text>
        </CustomSafeAreaView>
    )
}

export default AlarmSettingScreen
