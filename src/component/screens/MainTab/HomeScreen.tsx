
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { MainTabParamList, RootStackParamList } from '../../../navigation';
import { CustomSafeAreaView } from '../../atoms';
import { CustomHeader, SquareCalendar } from '../../molecules';
import { CustomCalendar } from '../../organisms';
import { check, PERMISSIONS, RESULTS, checkNotifications, requestNotifications,request } from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import messaging from '@react-native-firebase/messaging';
import storage from '@react-native-firebase/storage';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'HomeScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;


const HomeScreen = ({ navigation, route }: Props) => {


  useEffect(() => {
    // checkNofiPermission()
    // checkPermission()
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

  const checkPermission = async () => {
    const permissionMedia = Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    const result = await check(permissionMedia)
    switch (result) {
        case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
        case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            request(permissionMedia)
            break;
        case RESULTS.LIMITED:
            openImagePicker()
            break;
        case RESULTS.GRANTED:
            openImagePicker()
            break;
        case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
    }
}

const openImagePicker = async () => {
    ImagePicker.openPicker({
        cropping: true,
        cropperCircleOverlay: true
    }).then(image => {
        if (image?.path){
          put(image?.path)
        }
    }).catch((error) => {
        console.log(error)
    });
}

const put = async(file) =>{

  storage().ref('/images/t-shirts/black-t-shirt-sm.png').putFile(file).then((result)=>{
    console.log(result,1)
  }).catch((err)=>{
    console.log(err,2)
  })
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
