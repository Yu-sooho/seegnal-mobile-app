
import { observer } from 'mobx-react-lite';
import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { themeColor, themeFonts } from '../../../resources';
import createRootStore from '../../../stores';

const stores = createRootStore()

const MadalHeaderText: React.FC<
    PropsWithChildren<{
        style?: StyleProp<TextStyle>,
        text: string,
    }>
> = ({ style, text }) => {

    const theme = stores.appStateStore.selectedTheme.get()

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

export default observer(MadalHeaderText)
