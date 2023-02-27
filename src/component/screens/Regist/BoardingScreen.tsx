
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { themeColor, themeFonts } from '../../../resources';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { sizeConverter } from '../../../utils';
import { OnBoardImageView } from '../../organisms';
import { LoginStackParamList, RootStackParamList } from '../../../navigation';
import { CustomButton, CustomSafeAreaView } from '../../atoms';
import { CompositeScreenProps } from '@react-navigation/native';

import { selectedTheme } from '../../../stores';
import { useAtom } from 'jotai';

type Props = CompositeScreenProps<
  NativeStackScreenProps<LoginStackParamList, 'BoardingScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;



const dummyData = [
  { imageUri: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a', text: '아 하기 싫다', title: '생각없는 아무1', id: 1 },
  { imageUri: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e669f5287469802eca457586a25a096fd31', text: '듣고 있는 척', title: '생각없는 아무2', id: 2 },
  { imageUri: 'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d', text: '다 귀찮아', title: '생각없는 아무3', id: 3 }]

const BoardingScreen = ({ navigation, route }: Props) => {

  const [theme] = useAtom(selectedTheme)


  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-between',
    },
    onBoardImage: {
      width: sizeConverter(280),
      height: sizeConverter(280),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColor[theme].seegnal_light_gray1
    },
    loginButtonViewStyle: {
      marginBottom: sizeConverter(24)
    },
    loginButton: {
      width: sizeConverter(328),
      height: sizeConverter(48),
      borderRadius: sizeConverter(12),
      borderColor: themeColor[theme].seegnal_main,
      backgroundColor: themeColor[theme].seegnal_main,
    },
    loginButtonText: {
      color: themeColor[theme].seegnal_white,
      ...themeFonts.notosans_bold_16
    }
  });


  const onPressLogin = () => {
    navigation.navigate('LoginModalScreen')
    return true
  }

  return (
    <CustomSafeAreaView style={styles.container}>
      <View style={{ width: sizeConverter(280), paddingTop: sizeConverter(64) }}>
        <OnBoardImageView data={dummyData} />
      </View>
      <View style={styles.loginButtonViewStyle}>
        <CustomButton onPress={onPressLogin} buttonStyle={styles.loginButton} textStyle={styles.loginButtonText} text={'로그인'} />
      </View>
    </CustomSafeAreaView>
  );
};

export default BoardingScreen
