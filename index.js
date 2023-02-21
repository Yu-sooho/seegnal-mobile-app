/**
* isTest 는 애니메이션이나 레이아웃 테스트를 위해 만들어놓음
* 
* @author Yu-sooho
*/

import React, { useEffect } from 'react'
import { AppRegistry } from 'react-native';
import App from './src/app'
import { name as appName } from './app.json';
import { StoreProvider } from './src/utils/context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import messaging from '@react-native-firebase/messaging';

const isTest = 0

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});


const Seegnal = () => {

    useEffect(()=>{
        getToken()
    },[])

    const getToken = async () =>{
        const result = await messaging().getToken()
        console.log(result,'FUFU')
    }
    
  
    return (
        <StoreProvider>
            <SafeAreaProvider>
                {isTest ? <Test /> : <App />}
            </SafeAreaProvider>
        </StoreProvider>
    )
}

AppRegistry.registerComponent(appName, () => Seegnal);
