import { StyleSheet } from "react-native";
import createRootStore from "../stores";
import { sizeConverter } from "../utils";
import { themeColor } from "./colors";

const store = createRootStore()
const theme = store.appStateStore.selectedTheme.get()

export const defaultStyles = StyleSheet.create({
    defaultButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizeConverter(132),
        height: sizeConverter(32),
        borderRadius: sizeConverter(8),
        borderWidth:0,
        backgroundColor: themeColor[theme].seegnal_light_gray1
    },
    activeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizeConverter(132),
        height: sizeConverter(32),
        borderRadius: sizeConverter(8),
        borderWidth:0,
        backgroundColor: themeColor[theme].seegnal_main,
    }
})