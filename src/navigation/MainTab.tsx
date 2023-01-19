import React, { useState } from 'react';
import { MainTabParamList, RootStackParamList } from '.';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { HomeScreen, HistoryScreen, SettingScreen } from '../component';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HomeFloatingButtonView } from '../component/organisms';
import { FloatingPlusButton } from '../component/molecules';
import { STATUS_BUTTONS, STATUS_BUTTONS_TYPE, TAB_BAR_LABEL, themeColor, themeFonts } from '../resources';
import { sizeConverter } from '../utils';
import createRootStore from '../stores';
import { observer, Observer } from 'mobx-react';
import { runInAction } from 'mobx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import GraphTabNavigator from './GraphTab';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Icon40DefaultGraph, Icon40DefaultHistory, Icon40DefaultHome, Icon40DefaultSetting, Icon48ActiveGraph, Icon48ActiveHistory, Icon48ActiveHome, Icon48ActiveSetting } from '../component/icons';

const MainTab = createBottomTabNavigator<MainTabParamList>();

const stores = createRootStore()
const theme = stores.appStateStore.selectedTheme.get()

type Props = NativeStackScreenProps<RootStackParamList>

type MainTabProps = {
    hideFloatingButton: () => void,
    showFloatingButton: () => void,
    NativeStack:NativeStackScreenProps<RootStackParamList>,
}

type TabBarProps = {
    hideFloatingButton: () => void,
    showFloatingButton: () => void,
    BottomTabBarProps: BottomTabBarProps,
    NativeStack:NativeStackScreenProps<RootStackParamList>,
}

const MainTabNav = ({
    showFloatingButton,
    hideFloatingButton,
    NativeStack
}: MainTabProps) => {
    return (
        <MainTab.Navigator tabBar={(props: BottomTabBarProps) => <CustomTabBar showFloatingButton={showFloatingButton} hideFloatingButton={hideFloatingButton} BottomTabBarProps={props} NativeStack={NativeStack} />} >
            <MainTab.Screen name={'HomeScreen'} options={{ headerShown: false }} component={HomeScreen} />
            <MainTab.Screen name={'HistoryScreen'} options={{ headerShown: false }} component={HistoryScreen} />
            <MainTab.Screen name={'GraphTab'} options={{ headerShown: false }} component={GraphTabNavigator} />
            <MainTab.Screen name={'SettingScreen'} options={{ headerShown: false }} component={SettingScreen} />
        </MainTab.Navigator>
    );
};



const MainTabNavigator = observer(({ navigation, route }: Props) => {

    const insets = useSafeAreaInsets()
    const isHomeAds = stores.appStateStore.isHomeAds.get()

    const onPressStatusItem = async (item?: STATUS_BUTTONS_TYPE) => {
        const statusButtons = STATUS_BUTTONS['MAN'] || STATUS_BUTTONS['WOMAN']
        switch (item?.id) {
            case statusButtons?.[0]?.id:
                navigation.push('SendSeegnalScreen')
                break;

            case statusButtons?.[1]?.id:
                console.log(item.keyword)
                break;

            case statusButtons?.[2]?.id:
                console.log(item.keyword)
                break;

            case statusButtons?.[3]?.id:
                console.log(item.keyword)
                break;

            case statusButtons?.[4]?.id:
                console.log(item.keyword)
                break;

            case statusButtons?.[5]?.id:
                console.log(item.keyword)
                break;

            default:
                break;
        }
    }

    const [isVisiableFloatingView, setIsVisiableFloatingView] = useState(false)

    const onPressFloatingButton = () => {
        if (isVisiableFloatingView) {
            setIsVisiableFloatingView(false)
            return
        }
        setIsVisiableFloatingView(true)
    }

    const buttonBottomInset = (insets?.bottom || 0) + sizeConverter(80) + (isHomeAds ? sizeConverter(46) : 0)
    const ViewBottomInset = buttonBottomInset + sizeConverter(16)

    const fadeValue = useSharedValue(1)
    const floatingButtonStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(fadeValue.value, {
                duration: 200,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
        };
    });

    const hideFloatingButton = () => {
        fadeValue.value = 0
    }

    const showFloatingButton = () => {
        fadeValue.value = 1
    }


    return (
        <View style={{ flex: 1, backgroundColor: themeColor[theme].seegnal_lwhite_gray }}>
            <MainTabNav
                hideFloatingButton={hideFloatingButton}
                showFloatingButton={showFloatingButton}
                NativeStack={{ navigation, route }}
            />
            <HomeFloatingButtonView
                absolute
                onPress={onPressStatusItem}
                isVisible={isVisiableFloatingView}
                buttonList={STATUS_BUTTONS['WOMAN']}
                onPressBack={onPressFloatingButton}
                bottomInset={ViewBottomInset}
            />
            <Animated.View pointerEvents={fadeValue.value > 0 ? 'auto' : 'none'} style={floatingButtonStyle}>
                <FloatingPlusButton
                    bottomInset={buttonBottomInset}
                    onPress={onPressFloatingButton}
                />
            </Animated.View>
        </View>
    )
})

const TabbarImage = ({ label, active }: { label: string, active: boolean }) => {
    switch (label) {
        case TAB_BAR_LABEL['HOME']:
            if (active) return <Icon48ActiveHome />
            return <Icon40DefaultHome />
        case TAB_BAR_LABEL['HISTORY']:
            if (active) return <Icon48ActiveHistory />
            return <Icon40DefaultHistory />
        case TAB_BAR_LABEL['GRAPH']:
            if (active) return <Icon48ActiveGraph />
            return <Icon40DefaultGraph />
        case TAB_BAR_LABEL['SETTING']:
            if (active) return <Icon48ActiveSetting />
            return <Icon40DefaultSetting />
        default:
            return null
    }
}

const CustomTabBar = ({ showFloatingButton, hideFloatingButton, BottomTabBarProps, NativeStack }: TabBarProps) => {

    const { state, descriptors, navigation, insets } = BottomTabBarProps

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: insets.bottom,
        },
        tabButton: {
            height: sizeConverter(56),
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themeColor[theme].seegnal_lwhite_gray
        },
        adsBar: {
            height: sizeConverter(46),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themeColor[theme].seegnal_dark_gray
        }
    })

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            if (route.name === 'HomeScreen') {
                                showFloatingButton()
                            } else {
                                hideFloatingButton()
                            }
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={`${route?.name}-${index}-keys`}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabButton}
                        >
                            <TabbarImage label={`${label}`} active={isFocused} />
                        </TouchableOpacity>
                    );
                })}

            </View>
            <Observer>
                {() => {
                    if (stores.appStateStore.isHomeAds.get())
                        return (
                            <TouchableOpacity onPress={() => {
                                if (stores.appStateStore.isHomeAds.get()) {
                                    runInAction(() => {
                                        NativeStack.navigation.navigate('AdvertisementScreen')
                                    
                                        // stores.appStateStore.isHomeAds.set(false)
                                    })
                                    return
                                }
                                runInAction(() => {
                                    NativeStack.navigation.navigate('AdvertisementScreen')
                                    // stores.appStateStore.isHomeAds.set(true)
                                })
                            }} style={styles.adsBar}>
                                <Text style={{ ...themeFonts.notosans_medium_16, color: themeColor[theme].seegnal_white }}>광고</Text>
                            </TouchableOpacity>
                        )
                    return <View />
                }}
            </Observer>
        </View>
    );
}


export default MainTabNavigator
