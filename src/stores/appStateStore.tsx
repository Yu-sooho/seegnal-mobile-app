import AsyncStorage from '@react-native-async-storage/async-storage'
import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

//persistence
const storage = createJSONStorage(() => AsyncStorage)
export const selectedTheme = atomWithStorage('selectedTheme', 0, storage)
export const isHomeAds = atomWithStorage('isHomeAds', 0, storage)
