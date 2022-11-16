
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MainTabParamList } from '../../../navigation';
import { sizeConverter } from '../../../utils';
import { CustomSafeAreaView, TitleText } from '../../atoms';

type Props = NativeStackScreenProps<MainTabParamList, 'SettingScreen'>;

const SettingScreen = ({ navigation, route }: Props) => {

  const styles = StyleSheet.create({
    headerStyle: {
      height: sizeConverter(56),
      justifyContent: 'center',
      paddingHorizontal: sizeConverter(16)
    }
  })

  return (
    <CustomSafeAreaView>
      <TitleText viewStyle={styles.headerStyle} text={'설정'} />
      <View>
        <Text>메인 스린</Text>
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default SettingScreen
