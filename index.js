/**
* isTest 는 애니메이션이나 레이아웃 테스트를 위해 만들어놓음
* 
* @author Yu-sooho
*/

import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/app'
import { name as appName } from './app.json';
import { StoreProvider } from './src/utils/context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const isTest = 0

const Seegnal = () => {
    return (
        <StoreProvider>
            <SafeAreaProvider>
                {isTest ? <Test /> : <App />}
            </SafeAreaProvider>
        </StoreProvider>
    )
}

AppRegistry.registerComponent(appName, () => Seegnal);
