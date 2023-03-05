import {
  getMonth,
  startOfMonth,
  getWeeksInMonth,
  startOfWeek,
  addDays,
  format,
  getDate,
  addMonths,
} from 'date-fns'

export const getDateData = (date: Date) => {
  const today = getDate(date) //날짜를 가져온다
  const curMonth = getMonth(date) //오늘날짜를 기준으로 현재달을 구한다
  const monthDays = getMonthDays(date, curMonth) //오늘날짜와 현재달을 갖고 한달의 날짜를 구한다

  return monthDays
}

//한달구하기
export const getMonthDays = (date: Date, curMonth: number) => {
  const monthStart = startOfMonth(date)
  const monthList = []
  const weekLength = getWeeksInMonth(monthStart)

  for (let i = 0; i < weekLength; i++) {
    const count = i * 7
    const weekStartDate = addDays(monthStart, count)
    monthList.push(getWeekDays(weekStartDate, curMonth))
  }
  return monthList
}

//한주 구하기
export const getWeekDays = (date: Date, month: number) => {
  const weekStart = startOfWeek(date, { weekStartOn: 1 }) //기준날짜를 통해 주 시작일 구하기
  const weekLength = 7
  const weekList = []

  for (let i = 0; i < weekLength; i++) {
    const tempDate = addDays(weekStart, i)
    const formatted = getDay(format(tempDate, 'EEE'))

    if (getMonth(tempDate) === month) {
      weekList.push({
        key: getDate(tempDate),
        formatted,
        date: tempDate,
        day: getDate(tempDate),
        month,
        active: false,
      })
    } else if (getMonth(tempDate) < month) {
      weekList.push({
        key: getDate(tempDate),
        formatted,
        date: tempDate,
        day: getDate(tempDate),
        month,
        active: false,
      })
    } else if (getMonth(tempDate) > month) {
      weekList.push({
        key: getDate(tempDate),
        formatted,
        date: tempDate,
        day: getDate(tempDate),
        month,
        active: false,
      })
    }
  }
  return weekList
}

export const getDay = (day: string) => {
  if (day === 'Sun') {
    return '일'
  } else if (day === 'Mon') {
    return '월'
  } else if (day === 'Tue') {
    return '화'
  } else if (day === 'Wed') {
    return '수'
  } else if (day === 'Thu') {
    return '목'
  } else if (day === 'Fri') {
    return '금'
  } else if (day === 'Sat') {
    return '토'
  }
}

//다음달구하기
export const getNextMonth = (startMonth: Date, count: number) => {
  const nextDate = addMonths(startMonth, count)
  const month = getMonth(nextDate)
  const nextMonth = getMonthDays(nextDate, month)

  return nextMonth
}

export const getPreMonth = (startMonth: Date, count: number) => {
  const preDate = addMonths(startMonth, -count)
  const month = getMonth(preDate)
  const preMonth = getMonthDays(preDate, month)

  return preMonth
}
