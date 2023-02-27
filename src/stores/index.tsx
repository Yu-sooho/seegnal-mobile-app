/**
* 스토어 반환
* 
* @author Yu-sooho
*/

//생성한 스토어 참조
import AsyncStorage from '@react-native-async-storage/async-storage';
import { action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import appStateStore from './AppStateStore'
import authStore from './AuthStore';
import calendarStore from './CalendarStore'

//생성한 스토어를 반환
const createRootStore = () => {
  
  return {
    appStateStore,
    authStore,
    calendarStore,
  };
};


//반환한 createRootStore로 생성한 모든 스토어 한번에 관리 가능
export default createRootStore;