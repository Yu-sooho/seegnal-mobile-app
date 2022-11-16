
import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { themeColor, themeFonts } from '../../../resources';
import createRootStore from '../../../stores';

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

const MadalHeaderText: React.FC<
    PropsWithChildren<{
        style?: object,
        text: string,
    }>
> = ({ style, text }) => {
    return (
        <Text style={style}>
            {text}
        </Text>
    );
};

MadalHeaderText.defaultProps = {
    style: {
        color: themeColor[theme].seegnal_dark_gray,
        ...themeFonts.santokki_bold_20
    }
}

export default MadalHeaderText
