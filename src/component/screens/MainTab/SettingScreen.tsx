
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { MainTabParamList, RootStackParamList } from '../../../navigation';
import { images, themeColor, themeFonts } from '../../../resources';
import createRootStore from '../../../stores';
import { sizeConverter } from '../../../utils';
import { CustomButton, CustomSafeAreaView, ImageButton, RightArrowButton, TitleText, UserImage } from '../../atoms';

type Props = CompositeScreenProps<
  NativeStackScreenProps<MainTabParamList, 'SettingScreen'>,
  NativeStackScreenProps<RootStackParamList>
>

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const SettingScreen = ({ navigation, route }: Props) => {

  const styles = StyleSheet.create({
    headerStyle: {
      height: sizeConverter(56),
      justifyContent: 'center',
      paddingHorizontal: sizeConverter(16)
    },
    contentContainer: {
      paddingHorizontal: sizeConverter(16)
    },
    userNameStyle: {
      ...themeFonts.notosans_bold_16,
      color: themeColor[theme].seegnal_dark_gray,
      marginBottom: sizeConverter(4),
      lineHeight: sizeConverter(20),
    },
    userEmailStyle: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_dark_gray,
      lineHeight: sizeConverter(20),
    },
    viewDivide: {
      marginTop: sizeConverter(24)
    },
    imageButtonView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: sizeConverter(24)
    },
    imageButtonStyle: {
      width: sizeConverter(156),
      height: sizeConverter(130),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      borderRadius: sizeConverter(12)
    },
    buttonImageStyle: {
      width: sizeConverter(80),
      height: sizeConverter(80),
    },
    buttonTextStyle: {
      ...themeFonts.santokki_bold_20,
      lineHeight: sizeConverter(24),
      letterSpacing: -sizeConverter(0.06),
      marginTop: 0
    },
    paymentButtonStyle: {
      width: sizeConverter(328),
      backgroundColor: themeColor[theme].seegnal_lwhite_gray,
      borderRadius: sizeConverter(15),
      padding: sizeConverter(0)
    },
    paymentButtonTextViewStyle: {
      height: sizeConverter(40),
      justifyContent: 'center',
    },
    paymentButtonImageViewStyle: {
      height: sizeConverter(100),
      justifyContent: 'center'
    },
    paymentButtonTextStyle: {
      ...themeFonts.notosans_bold_14,
      color: themeColor[theme].seegnal_dark_gray,
      letterSpacing: -sizeConverter(0.04),
      marginTop: 0
    },
    paymentImageStyle: {
      width: sizeConverter(328),
    },
    infoTextStyle: {
      ...themeFonts.notosans_bold_16,
      color: themeColor[theme].seegnal_dark_gray,
      letterSpacing: -sizeConverter(0.05),
      marginLeft: sizeConverter(6)
    }
  })

  return (
    <CustomSafeAreaView>
      <TitleText viewStyle={styles.headerStyle} text={'설정'} />
      <ScrollView style={styles.contentContainer}>
        <ImageButton
          text={'지금 바로 유료버전 결제하기 👉'}
          textStyle={styles.paymentButtonTextStyle}
          style={styles.paymentButtonStyle}
          imageStyle={styles.paymentImageStyle}
          textViewStyle={styles.paymentButtonTextViewStyle}
          imageViewStyle={styles.paymentButtonImageViewStyle}
        // image={images.img_seegnal_theme} 
        />
        <View style={styles.viewDivide}>
          <UserImage
            isEmail
            rightArrow
            size={sizeConverter(64)}
            textStyle={styles.userNameStyle}
            emailTextStyle={styles.userEmailStyle}
          />
        </View>
        <View style={styles.viewDivide}>
          <CustomButton text={'씨그날메이트 초대하기'} />
        </View>
        <View style={styles.imageButtonView}>
          <ImageButton
            onPress={() => {
              navigation.navigate('ThemeSettingScreen')
            }}
            text={'테마'}
            textStyle={styles.buttonTextStyle}
            style={styles.imageButtonStyle}
            imageStyle={styles.buttonImageStyle}
            image={images.img_seegnal_theme} />
          <ImageButton
            onPress={() => {
              navigation.navigate('AlarmSettingScreen')
            }}
            text={'알림'}
            textStyle={styles.buttonTextStyle}
            style={styles.imageButtonStyle}
            imageStyle={styles.buttonImageStyle}
            image={images.img_seegnal_alram} />
        </View>
        <View style={styles.viewDivide}>
          <RightArrowButton
            onPress={() => {
              navigation.navigate('AppInfoScreen')
            }}
            text={'앱 정보'}
            textStyle={styles.infoTextStyle}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default SettingScreen
