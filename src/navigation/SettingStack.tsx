/**
* 스토어 변경하는 hooks 생성
* 
* @author Yu-sooho
*/

import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import {
    AlarmSettingScreen,
    AppInfoScreen,
    ThemeSettingScreen,
    MyInfoScreen
} from '../component';

const SettingStackNavigator = (SettingStack: any) => {
    return (
        <SettingStack.Group
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }} >
            <SettingStack.Screen name="ThemeSettingScreen" options={{ headerShown: false, gestureEnabled: false }} component={ThemeSettingScreen} />
            <SettingStack.Screen name="AppInfoScreen" options={{ headerShown: false, gestureEnabled: false }} component={AppInfoScreen} />
            <SettingStack.Screen name="AlarmSettingScreen" options={{ headerShown: false, gestureEnabled: false }} component={AlarmSettingScreen} />
            <SettingStack.Screen name="MyInfoScreen" options={{ headerShown: false, gestureEnabled: false }} component={MyInfoScreen} />
        </SettingStack.Group>
    );
};

export default SettingStackNavigator;
