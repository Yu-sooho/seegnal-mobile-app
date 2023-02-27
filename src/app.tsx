import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainStackNavigator from './navigation/MainStack'

const App = () => {
  const navigationRef = useNavigationContainerRef()
  const { getCurrentRoute } = navigationRef

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer
      ref={navigationRef}
      // onReady={() => {
      //     stores.appStateStore.setCurrentScreen(`${getCurrentRoute()?.['name']}`)
      //     console.log(`[SH] [app] [screenName] firstScreenName: ${getCurrentRoute()?.['name']}`)
      // }}
      // onStateChange={async () => {
      //     const previousRouteName = stores.appStateStore.currentScreen.get()
      //     const currentRouteName = getCurrentRoute()?.['name']

      //     if (previousRouteName !== currentRouteName) {
      //         console.log(`[SH] [app] [screenName] previousRouteName: ${previousRouteName} currentRouteName: ${currentRouteName}`)
      //     }

      //     stores.appStateStore.setCurrentScreen(`${currentRouteName}`)
      // }}
    >
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export default App
