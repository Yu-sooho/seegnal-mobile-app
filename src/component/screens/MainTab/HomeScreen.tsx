
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  FlatList,
  Platform,
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
import { check, PERMISSIONS, RESULTS, checkNotifications, requestNotifications } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'HomeScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const HomeScreen = ({ navigation, route }: Props) => {


  useEffect(() => {
    checkNofiPermission()
  }, [])

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const checkNofiPermission = async () => {
    const result = await checkNotifications()
    switch (result.status) {
      case RESULTS.UNAVAILABLE:
        requNofiPermission()
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        requNofiPermission()
        console.log('The permission has not been requested / is denied but requestable');
        break;
      case RESULTS.LIMITED:
        requNofiPermission()
        break;
      case RESULTS.GRANTED:
        break;
      case RESULTS.BLOCKED:
        requNofiPermission()
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  }

  const requNofiPermission = async() =>{
    const result = await requestNotifications(['alert', 'sound'])
    console.log(result)
  }

  const RenderItem = ({ item, index }: any) => {
    return (
      <View>
        <SquareCalendar dateList={item} />
      </View>
    )
  }

  // const permissionCheck = async () => {
  //   const permissionMedia = Platform.OS === 'ios' ? PERMISSIONS.IOS. : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
  //   const result = await check(permissionMedia)
  //   switch (result) {
  //     case RESULTS.UNAVAILABLE:
  //       console.log('This feature is not available (on this device / in this context)');
  //       break;
  //     case RESULTS.DENIED:
  //       console.log('The permission has not been requested / is denied but requestable');
  //       break;
  //     case RESULTS.LIMITED:
  //       break;
  //     case RESULTS.GRANTED:
  //       break;
  //     case RESULTS.BLOCKED:
  //       console.log('The permission is denied and not requestable anymore');
  //       break;
  //   }
  // }


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
