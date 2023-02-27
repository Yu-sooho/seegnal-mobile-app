import { useAtom } from 'jotai'

import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { DAYS, themeColor, themeFonts } from '../../resources'
import { selectedTheme } from '../../stores'
import { sizeConverter } from '../../utils'
import { DateButton } from '../atoms'

type SquareCalendarProps = {
  dateList?: Array<Object>
  activeDateList?: Array<Object>
}

const paddingSize = sizeConverter(16)
const buttonSize = (Dimensions.get('window').width - paddingSize * 2) / 7
const calendarHeight = sizeConverter(270)

const SquareCalendar = ({ dateList }: SquareCalendarProps) => {
  const [theme] = useAtom(selectedTheme)

  const styles = StyleSheet.create({
    container: {
      width: sizeConverter(360),
      paddingHorizontal: paddingSize,
    },
    dateButtonStyle: {
      width: buttonSize,
      alignItems: 'center',
      justifyContent: 'center',
      height: calendarHeight / 7,
    },
    dateTextStyle: {
      color: themeColor[theme].seegnal_dark_gray,
      ...themeFonts.notosans_medium_12,
    },
    dateNumberTextStyle: {
      color: themeColor[theme].seegnal_dark_gray,
      ...themeFonts.notosans_medium_14,
    },
  })

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {DAYS.map((item: any, index: number) => {
          return (
            <View
              style={{ width: buttonSize, alignItems: 'center' }}
              key={`${index}-keys`}
            >
              <DateButton
                disabled
                textStyle={styles.dateTextStyle}
                text={item['id'] || item}
              />
            </View>
          )
        })}
      </View>
      {dateList?.map((item: any, index: number) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: sizeConverter(360),
            }}
            key={`${index}-keys`}
          >
            {item?.map((item: any, index: number) => {
              return (
                <View key={`${index}-keys`}>
                  <DateButton
                    textStyle={{
                      ...styles.dateNumberTextStyle,
                      color:
                        item['month'] === 'cur'
                          ? themeColor[theme].seegnal_dark_gray
                          : themeColor[theme].seegnal_gray,
                    }}
                    buttonStyle={styles.dateButtonStyle}
                    text={item['day']}
                  />
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

export default SquareCalendar
