import { NavigatorScreenParams } from '@react-navigation/native'
import { EMOTION_TYPE } from '../resources'

export type LoginStackParamList = {
  //Regist
  BoardingScreen: undefined
  RegistTosScreen: undefined
  RegistTosDetailScreen: { type: string }
  RegistGenderScreen: undefined
  RegistCalendarScreen: undefined
  RegistAverageScreen: undefined
  RegistInviteScreen: undefined
}

export type MainTabParamList = {
  HomeScreen: undefined
  HistoryScreen: undefined
  GraphTab: NavigatorScreenParams<GraphTabParamList>
  SettingScreen: undefined
}

export type GraphTabParamList = {
  PhysiologyGraphScreen: undefined
  SeegnalGraphScreen: undefined
}

export type RootStackParamList = {
  //Main
  LoginStack: NavigatorScreenParams<LoginStackParamList>
  MainTab: NavigatorScreenParams<MainTabParamList>
  SendSeegnalScreen: undefined
  AdvertisementScreen: undefined

  //Setting
  ThemeSettingScreen: undefined
  AlarmSettingScreen: undefined
  AppInfoScreen: undefined
  MyInfoScreen: undefined

  //Modal
  LoginModalScreen: undefined
  ImageButtonModalScreen: {
    dataList: Array<EMOTION_TYPE>
    onPressItem: (item: EMOTION_TYPE) => {}
  }
  CustomModalScreen: {
    title: string
    text: string
    okButtonText?: string
    cancelButtonText?: string
    onPressOk?: () => {}
    onPressCancel?: () => {}
  }
}
