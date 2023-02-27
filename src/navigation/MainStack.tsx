import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { RootStackParamList } from '.';
import { SendSeegnalScreen } from '../component/screens';
import { isLogin } from '../stores';
import LoginStackNavigator from './LoginStack';
import MainTabNavigator from './MainTab';
import ModalStackNavigator from './ModalStack';
import SettingStackNavigator from './SettingStack';

const MainStack = createStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>

            {
                isLogin ?
                    <MainStack.Screen name="MainTab" options={{ headerShown: false, gestureEnabled: false }} component={MainTabNavigator} />
                    :
                    <MainStack.Screen name="LoginStack" options={{ headerShown: false, gestureEnabled: false }} component={LoginStackNavigator} />
            }
            <MainStack.Screen name="SendSeegnalScreen" options={{ headerShown: false, gestureEnabled: false }} component={SendSeegnalScreen} />
            {ModalStackNavigator(MainStack)}
            {SettingStackNavigator(MainStack)}
        </MainStack.Navigator>
    );
}

export default MainStackNavigator;
