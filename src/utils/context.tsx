/**
* Context 생성
* Context를 활용하면 props를 보내지 않고 하위 트리에 값을 전달할 수 있음 
*
* @author Yu-sooho
*/

import { useLocalObservable } from 'mobx-react-lite';
import React, { createContext } from 'react';

import createRootStore from '../stores/index';

const store = useLocalObservable(createRootStore);

//context생성
export const storesContext = createContext(store)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // Provider를 이용해 하위 트리에 value값 보냄
  // 아무리 깊숙히 있어도, 모든 컴포넌트가 이 값을 읽을 수 있음
  return <storesContext.Provider value={store}>{children}</storesContext.Provider>;
};