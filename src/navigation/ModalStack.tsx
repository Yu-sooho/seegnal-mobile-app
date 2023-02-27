/**
 * 모달 모음 스택
 *
 * @author Yu-sooho
 */

import React from 'react'
import {
  CustomModalScreen,
  ImageButtonModalScreen,
  LoginModalScreen,
  AdvertisementScreen,
} from '../component'

const forFade = ({ current }: { current: any }) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

const ModalStackNavigator = (ModalStack: any) => {
  return (
    <ModalStack.Group
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: forFade,
        presentation: 'transparentModal',
      }}
    >
      <ModalStack.Screen
        name="LoginModalScreen"
        options={{ headerShown: false }}
        component={LoginModalScreen}
      />
      <ModalStack.Screen
        name="CustomModalScreen"
        options={{ headerShown: false }}
        component={CustomModalScreen}
      />
      <ModalStack.Screen
        name="ImageButtonModalScreen"
        options={{ headerShown: false }}
        component={ImageButtonModalScreen}
      />
      <ModalStack.Screen
        name="AdvertisementScreen"
        options={{ headerShown: false }}
        component={AdvertisementScreen}
      />
    </ModalStack.Group>
  )
}

export default ModalStackNavigator
