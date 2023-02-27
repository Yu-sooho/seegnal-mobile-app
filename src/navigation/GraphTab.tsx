import React from 'react'
import { GraphTabParamList, RootStackParamList } from '.'
import { PhysiologyGraphScreen, SeegnalGraphScreen } from '../component'
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { themeColor, themeFonts } from '../resources'
import { sizeConverter } from '../utils'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
    createMaterialTopTabNavigator,
    MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs'
import { CustomSafeAreaView } from '../component/atoms'
import { CustomHeader } from '../component/molecules'
import { selectedTheme } from '../stores'
import { useAtom } from 'jotai'

const GraphTab = createMaterialTopTabNavigator<GraphTabParamList>()

const GraphTabNav = () => {
    return (
        <GraphTab.Navigator
            screenOptions={{ swipeEnabled: false }}
            tabBar={CustomTabBar}
        >
            <GraphTab.Screen
                options={{ tabBarLabel: '생리' }}
                name={'PhysiologyGraphScreen'}
                component={PhysiologyGraphScreen}
            />
            <GraphTab.Screen
                options={{ tabBarLabel: '씨그날' }}
                name={'SeegnalGraphScreen'}
                component={SeegnalGraphScreen}
            />
        </GraphTab.Navigator>
    )
}

type Props = NativeStackScreenProps<RootStackParamList>

const GraphTabNavigator = ({ navigation, route }: Props) => {
    const [theme] = useAtom(selectedTheme)

    const styles = StyleSheet.create({
        titleText: {
            ...themeFonts.santokki_bold_24,
            color: themeColor[theme].seegnal_dark_gray,
        },
    })

    const leftContent = () => {
        return <Text style={styles.titleText}>통계</Text>
    }
    return (
        <CustomSafeAreaView
            edges={{ top: true, bottom: false }}
            style={{ flex: 1 }}
        >
            <CustomHeader leftContent={leftContent} />
            <View style={{ marginTop: sizeConverter(16), flex: 1 }}>
                <GraphTabNav />
            </View>
        </CustomSafeAreaView>
    )
}

const CustomTabBar = ({
    state,
    descriptors,
    navigation,
    position,
}: MaterialTopTabBarProps) => {
    const [theme] = useAtom(selectedTheme)

    const inputRange = state.routes.map((_, i) => i)
    const transformX = position.interpolate({
        inputRange,
        outputRange: inputRange.map(
            (i) => i * sizeConverter(164) + sizeConverter(2),
        ),
    })

    const styles = StyleSheet.create({
        container: {
            width: sizeConverter(360),
            height: sizeConverter(32),
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarView: {
            height: sizeConverter(32),
            width: sizeConverter(328),
            borderRadius: sizeConverter(15),
            alignItems: 'center',
            backgroundColor: themeColor[theme].seegnal_lwhite_gray,
            flexDirection: 'row',
        },
        tabBarButton: {
            height: sizeConverter(28),
            width: sizeConverter(160),
            borderRadius: sizeConverter(15),
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarBase: {
            height: sizeConverter(28),
            width: sizeConverter(160),
            borderRadius: sizeConverter(15),
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeColor[theme].seegnal_main,
            position: 'absolute',
        },
        tabBarText: {
            ...themeFonts.notosans_bold_14,
            textAlign: 'center',
        },
    })
    return (
        <View style={styles.container}>
            <View style={styles.tabBarView}>
                <Animated.View
                    style={[
                        styles.tabBarBase,
                        {
                            transform: [
                                {
                                    translateX: transformX,
                                },
                            ],
                        },
                    ]}
                />
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key]
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name

                    const isFocused = state.index === index

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(`${route?.name}`)
                        }
                    }

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        })
                    }

                    const inputRange = state.routes.map((_, i) => i)

                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
                    })

                    const opacityR = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((i) => (i === index ? 0 : 1)),
                    })

                    return (
                        <TouchableOpacity
                            key={`${label}-keys`}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabBarButton}
                        >
                            <Animated.Text
                                style={[
                                    styles.tabBarText,
                                    { opacity, color: themeColor[theme].seegnal_lwhite_gray },
                                ]}
                            >
                                {`${label}`}
                            </Animated.Text>
                            <Animated.Text
                                style={[
                                    styles.tabBarText,
                                    {
                                        opacity: opacityR,
                                        position: 'absolute',
                                        color: themeColor[theme].seegnal_gray,
                                    },
                                ]}
                            >
                                {`${label}`}
                            </Animated.Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default GraphTabNavigator
