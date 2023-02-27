/**
* 스토어 생성
* 
* @author Yu-sooho
*/

import { observable, runInAction } from 'mobx';
import { useEffect } from 'react';
import appStateStore from './AppStateStore';

const createStore = () => {
    //스토어 이름
    const authStore = {
        isLogin: observable.box(true),
        setLogin: (value: boolean) => runInAction(() => {
            authStore.isLogin.set(value)
        })    //변수 변경하는 함수
    };
    
    return authStore;
};

const authStore = createStore();
export default authStore;