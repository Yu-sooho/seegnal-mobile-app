/**
* 스토어 변경하는 hooks 생성
* 
* @author Yu-sooho
*/

import { useObserver } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { storesContext } from '../utils/context';

export const useStoreData = <Selection, ContextData, Store>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error("No store");
  }
  const store = storeSelector(value);

  // return useObserver(() => {
    return dataSelector(store);
  // });
};

export default <Selection, Store>(dataSelector: (store: Store) => Selection) => { return useStoreData(storesContext, (contextData: any) => contextData, dataSelector) }