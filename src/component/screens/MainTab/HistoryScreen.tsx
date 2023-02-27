
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { MainTabParamList, RootStackParamList } from '../../../navigation';
import { sizeConverter } from '../../../utils';
import { CustomSafeAreaView, TitleText } from '../../atoms';
import { SeegnalView } from '../../organisms';
// import { PersistStoreMap } from 'mobx-persist-store';


type Props = CompositeScreenProps<
  NativeStackScreenProps<MainTabParamList, 'HistoryScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;
// type Props = NativeStackScreenProps<MainTabParamList, 'HistoryScreen'>;


const HistoryScreen = ({ navigation, route }: Props) => {

  // const onPress = (value: number) => {
  //   Array.from(PersistStoreMap.values()).map((persistStore) => persistStore.getPersistedStore().then((value: any) => {
  //     console.log(value, 'FUUF')
  //   }));
  // }

  const styles = StyleSheet.create({
    headerStyle: {
      height: sizeConverter(56),
      justifyContent: 'center',
      paddingHorizontal: sizeConverter(16)
    }
  })

  const onPressSendSeegnal = () => {
    navigation.push('SendSeegnalScreen')
  }

  return (
    <CustomSafeAreaView disabled={false} edges={{ top: true, bottom: false }} >
      <TitleText viewStyle={styles.headerStyle} text={'모아보기'} />
      {/* <HistoryEmptyView onPressSendSeegnal={onPressSendSeegnal} /> */}
      <SeegnalView /> 
    </CustomSafeAreaView>
  );
};


export default HistoryScreen
