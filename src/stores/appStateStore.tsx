/**
* 스토어 생성
* 
* @author Yu-sooho
*/
import { makeAutoObservable } from 'mobx';
import { observable, runInAction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makePersistable } from 'mobx-persist-store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const createStore = () => {
    //스토어 이름

    const appStateStore = makeAutoObservable({
        //테마
        selectedTheme: observable.box(0),
        setTheme: (type: number) => runInAction(() => appStateStore.selectedTheme.set(type)),

        //스크린
        currentScreen: observable.box(''),
        setCurrentScreen: (screen: string) => runInAction(() => appStateStore.currentScreen.set(screen)),
        
        //광고 변수
        isHomeAds: observable.box(true),
        setIsHomeAds: (value: boolean) => runInAction(() => appStateStore.isHomeAds.set(value)),

        // // persist 변수 생성
        // insetsBottom: observable.box(0),
        // insetsTop: observable.box(0),
        // setInsets: (top:number,bottom:number) => runInAction(()=>{
        //     console.log(top,bottom,'store','FUFU')
        //     appStateStore.insetsTop.set(top)
        //     appStateStore.insetsBottom.set(bottom)
        // })
    });

    // // 퍼시스트 변수 정의
    // makePersistable(appStateStore, { name: 'appStateStore', properties: ['insetsBottom', 'insetsTop'], storage: AsyncStorage }).then(
    //     action((persistStore) => {
    //         console.log(`[appStateStore] makePersistable`,persistStore);
    //     })
    // );


    // 퍼시스트 불러올 때
    // stores.appStateStore.setIsTest( value)
    // console.log(stores.appStateStore.isTest2,stores.appStateStore.isTest,'FUFU2')
    // Array.from(PersistStoreMap.values()).map((persistStore) => persistStore.getPersistedStore().then((value:any)=>{
    //   console.log(value,'FUUF')
    // }));


    return appStateStore;
};

const appStateStore = createStore();
export default appStateStore;