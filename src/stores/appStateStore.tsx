/**
* 스토어 생성
* 
* @author Yu-sooho
*/
import { action, makeAutoObservable } from 'mobx';
import { observable, runInAction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makePersistable, PersistStoreMap } from 'mobx-persist-store';

const createStore = () => {
    //스토어 이름

    const appStateStore = makeAutoObservable({
        //로딩
        isMounted: observable.box(false),
        setIsMounted:(value:boolean) => runInAction(()=>appStateStore.isMounted.set(value)),

        //테마
        selectedTheme: observable.box(0),
        persistSelectedTheme: observable.box(0),

        setTheme: (type: number) => runInAction(() => appStateStore.selectedTheme.set(type)),
        setPersistSelectedTheme: (type: number) => action(() => appStateStore.persistSelectedTheme.set(type)),

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

    // 퍼시스트 변수 정의
    makePersistable(appStateStore, { name: 'appStateStore', properties: ['persistSelectedTheme'], storage: AsyncStorage }).then(
        action((persistStore) => {
            persistStore.getPersistedStore().then((value:any)=>{
                // console.log(`[appStateStore] makePersistable`, persistStore);
                console.log(`[appStateStore] makePersistable` , value)
            })
        })
    );


    // 퍼시스트 불러올 때
    // stores.appStateStore.setIsTest( value)
    // console.log(stores.appStateStore.isTest2,stores.appStateStore.isTest,'FUFU2')
    // Array.from(PersistStoreMap.values()).map((persistStore) => persistStore.getPersistedStore().then((value:any)=>{
    //   console.log(value,'FUUF')
    // }));

    Array.from(PersistStoreMap.values()).map((persistStore) => persistStore.getPersistedStore().then((value:any)=>{
        if(value?.persistSelectedTheme){
            appStateStore.selectedTheme.set(value?.persistSelectedTheme)
        }
            appStateStore.isMounted.set(true)
        console.log(`[appStateStore] loadPersistable` , value)
    }));

    return appStateStore;
};

const appStateStore = createStore();
export default appStateStore;