/**
* 스토어 생성
* 
* @author Yu-sooho
*/

import { addMonths, getMonth } from 'date-fns';
import { observable, runInAction } from 'mobx';
import { useEffect } from 'react';
import { getDateData } from '../utils/time';

const createStore = () => {
    //스토어 이름
    const calendarStore = {
        //테마
        dateList: observable.box([{}]),
        setDateList: () => runInAction(() => {
            for (var i = 0; i < 12; i++) {
                const curDate = new Date()
                const curMonth = getMonth(curDate)
                const nextMonth = addMonths(curDate, i)
                const temp = getDateData(nextMonth)
                calendarStore.dateList.set([...calendarStore.dateList.get(), temp])
                console.log(calendarStore.dateList.get().slice(),'FUFU')
            }
        }),
    };
    return calendarStore;
};

const calendarStore = createStore();
export default calendarStore;