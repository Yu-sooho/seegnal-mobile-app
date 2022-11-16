import { Dimensions } from 'react-native'

export const sizeConverter = (inputSize:number) => {
  return (Dimensions.get('window').width * inputSize) / 360
}

//숫자만 남기는 정규식
export const onlyNum = (text: string) => {
    const regex = /[^0-9]/g;
    return text.replace(regex, "");
}