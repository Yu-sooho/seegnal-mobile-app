import { StyleSheet, Platform } from 'react-native'
import { sizeConverter } from '../utils'

export const themeFonts = StyleSheet.create({
  //산토끼
  santokki_bold_12: {
    fontFamily: 'HSSantokki',
    fontSize: sizeConverter(12),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },
  santokki_bold_18: {
    fontFamily: 'HSSantokki',
    fontSize: sizeConverter(18),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },
  santokki_bold_20: {
    fontFamily: 'HSSantokki',
    fontSize: sizeConverter(20),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },
  santokki_bold_24: {
    fontFamily: 'HSSantokki',
    fontSize: sizeConverter(24),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },
  //노토 산스 레귤러
  notosans_regular_14: {
    fontFamily: 'NotoSansCJKkr-Regular',
    fontSize: sizeConverter(14),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },

  //노토 산스 미디움
  notosans_medium_12: {
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: sizeConverter(12),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },
  notosans_medium_14: {
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: sizeConverter(14),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },
  notosans_medium_16: {
    fontFamily: 'NotoSansCJKkr-Medium',
    fontSize: sizeConverter(16),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },

  //노토 산스 볼드
  notosans_bold_14: {
    fontFamily: 'NotoSansCJKkr-Bold',
    fontSize: sizeConverter(14),
    letterSpacing: -sizeConverter(0.04),
    includeFontPadding: false,
  },
  notosans_bold_16: {
    fontFamily: 'NotoSansCJKkr-Bold',
    fontSize: sizeConverter(16),
    letterSpacing: sizeConverter(0),
    includeFontPadding: false,
  },
})
