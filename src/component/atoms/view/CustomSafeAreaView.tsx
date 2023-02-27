
import { useAtom } from 'jotai';

import React, { PropsWithChildren } from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { themeColor } from '../../../resources';
import { selectedTheme } from '../../../stores';



const CustomSafeAreaView: React.FC<
  PropsWithChildren<{
    containerStyle?: StyleProp<ViewStyle>,
    disabled?: boolean,
    style?: StyleProp<ViewStyle>,
    edges?: {
      top?: boolean,
      bottom?: boolean
    }
  }>
> = ({ children, containerStyle, disabled, style, edges }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets()
  const [theme] = useAtom(selectedTheme)

  const styles = StyleSheet.create({
    containerStyle: {
      backgroundColor: themeColor[theme].seegnal_light_gray1,
      flex: 1,
    },
    buttonView: {
      flex: 1,
    },
    style: {
      paddingTop: edges?.top ? insets.top : 0,
      paddingBottom: edges?.bottom ? insets.bottom : 0,
      flex: 1,
    }
  })

  const onPress = () => {
    Keyboard.dismiss()
  }

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress} style={styles.buttonView}>
        <View style={[styles.style, style]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};


CustomSafeAreaView.defaultProps = {
  disabled: true,
  edges: {
    top: true,
    bottom: true
  }
}


export default CustomSafeAreaView
