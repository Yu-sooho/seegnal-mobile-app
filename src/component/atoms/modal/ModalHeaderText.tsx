
import { useAtom } from 'jotai';

import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { themeColor, themeFonts } from '../../../resources';
import { selectedTheme } from '../../../stores';



const MadalHeaderText: React.FC<
    PropsWithChildren<{
        style?: StyleProp<TextStyle>,
        text: string,
    }>
> = ({ style, text }) => {

    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        textStyle: {
            color: themeColor[theme].seegnal_dark_gray,
            ...themeFonts.santokki_bold_20
        }
    })
    return (
        <Text style={[styles.textStyle, style]}>
            {text}
        </Text>
    );
};

export default MadalHeaderText
