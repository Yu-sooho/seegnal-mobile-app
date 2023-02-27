import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainStackNavigator from './navigation/MainStack'
import { currentRoute } from './stores'

const App = () => {
  const navigationRef = useNavigationContainerRef()
  const { getCurrentRoute } = navigationRef

  const [routeName, setRouteName] = useAtom(currentRoute)

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setRouteName(`${getCurrentRoute()?.['name']}`)
        console.log(`[SH] [app] [screenName] firstScreenName: ${getCurrentRoute()?.['name']}`)
      }}
      onStateChange={async () => {
        const previousRouteName = routeName
        const currentRouteName = getCurrentRoute()?.['name']

        if (previousRouteName !== currentRouteName) {
          console.log(`[SH] [app] [screenName] previousRouteName: ${previousRouteName} currentRouteName: ${currentRouteName}`)
        }

        setRouteName(`${currentRouteName}`)
      }}
    >
      <MainStackNavigator />
    </NavigationContainer>
  )
}

export default App
