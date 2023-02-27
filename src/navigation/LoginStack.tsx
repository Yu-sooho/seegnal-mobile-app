/**
 * 스토어 변경하는 hooks 생성
 *
 * @author Yu-sooho
 */

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'
import {
  BoardingScreen,
  RegistTosScreen,
  RegistTosDetailScreen,
  RegistGenderScreen,
  RegistCalendarScreen,
  RegistAverageScreen,
  RegistInviteScreen,
} from '../component'
import { LoginStackParamList } from '.'

const LoginStack = createStackNavigator<LoginStackParamList>()

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <LoginStack.Screen
        name="BoardingScreen"
        options={{ headerShown: false, gestureEnabled: false }}
        component={BoardingScreen}
      />
      <LoginStack.Screen
        name="RegistTosScreen"
        options={{ headerShown: false, gestureEnabled: false }}
        component={RegistTosScreen}
      />
      <LoginStack.Screen
        name="RegistTosDetailScreen"
        options={{ headerShown: false }}
        component={RegistTosDetailScreen}
      />
      <LoginStack.Screen
        name="RegistGenderScreen"
        options={{ headerShown: false, gestureEnabled: false }}
        component={RegistGenderScreen}
      />
      <LoginStack.Screen
        name="RegistCalendarScreen"
        options={{ headerShown: false }}
        component={RegistCalendarScreen}
      />
      <LoginStack.Screen
        name="RegistAverageScreen"
        options={{ headerShown: false }}
        component={RegistAverageScreen}
      />
      <LoginStack.Screen
        name="RegistInviteScreen"
        options={{ headerShown: false }}
        component={RegistInviteScreen}
      />
    </LoginStack.Navigator>
  )
}

export default LoginStackNavigator
