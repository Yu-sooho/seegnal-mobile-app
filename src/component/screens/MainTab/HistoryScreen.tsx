
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { MainTabParamList, RootStackParamList } from '../../../navigation';
import createRootStore from '../../../stores';
import { sizeConverter } from '../../../utils';
import { CustomSafeAreaView, TitleText } from '../../atoms';
import { FloatingNextButton } from '../../molecules';
import { SeegnalView } from '../../organisms';
import { HistoryEmptyView } from '../../templates';
// import { PersistStoreMap } from 'mobx-persist-store';


type Props = CompositeScreenProps<
  NativeStackScreenProps<MainTabParamList, 'HistoryScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;
// type Props = NativeStackScreenProps<MainTabParamList, 'HistoryScreen'>;

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

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
