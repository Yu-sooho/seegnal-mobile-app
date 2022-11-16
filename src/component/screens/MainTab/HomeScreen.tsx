
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MainTabParamList, RootStackParamList } from '../../../navigation';
import { CustomSafeAreaView } from '../../atoms';
import { CustomHeader, FloatingPlusButton, SquareCalendar } from '../../molecules';
import { CustomCalendar, HomeFloatingButtonView } from '../../organisms';
import createRootStore from '../../../stores';
import { STATUS_BUTTONS, STATUS_BUTTONS_TYPE } from '../../../resources';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'HomeScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const HomeScreen = ({ navigation, route }: Props) => {


  useEffect(() => {
  }, [])

  const RenderItem = ({ item, index }: any) => {
    return (
      <View>
        <SquareCalendar dateList={item} />
      </View>
    )
  }


  return (
    <CustomSafeAreaView edges={{ top: true, bottom: false }}>
      <CustomHeader />
      <ScrollView>
        <CustomCalendar />
      </ScrollView>
      {/* <FlatList pagingEnabled horizontal renderItem={RenderItem} data={dateList} /> */}
      {/* <SquareCalendar dateList={preDateList} /> */}
      {/* <SquareCalendar dateList={nextDateList} /> */}
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default HomeScreen
