import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { RootStackParamList } from '.';
import { SendSeegnalScreen } from '../component/screens';
import createRootStore from '../stores';
import LoginStackNavigator from './LoginStack';
import MainTabNavigator from './MainTab';
import ModalStackNavigator from './ModalStack';
import SettingStackNavigator from './SettingStack';

const MainStack = createStackNavigator<RootStackParamList>();

const store = createRootStore()

const MainStackNavigator = observer(() => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}>

            {
                store.authStore.isLogin.get() ?
                    <MainStack.Screen name="MainTab" options={{ headerShown: false, gestureEnabled: false }} component={MainTabNavigator} />
                    :
                    <MainStack.Screen name="LoginStack" options={{ headerShown: false, gestureEnabled: false }} component={LoginStackNavigator} />
            }
            <MainStack.Screen name="SendSeegnalScreen" options={{ headerShown: false, gestureEnabled: false }} component={SendSeegnalScreen} />
            {ModalStackNavigator(MainStack)}
            {SettingStackNavigator(MainStack)}
        </MainStack.Navigator>
    );
});

export default MainStackNavigator;
