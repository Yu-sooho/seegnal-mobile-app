
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GraphTabParamList } from '../../../../navigation';
import { themeColor } from '../../../../resources';
import createRootStore from '../../../../stores';
import { sizeConverter } from '../../../../utils';
import { CustomSafeAreaView } from '../../../atoms';
import { StatisticsColorBar, StatisticsGraph, StatisticsPhysiology } from '../../../organisms/graph';

type Props = NativeStackScreenProps<GraphTabParamList, 'PhysiologyGraphScreen'>;


const stores = createRootStore()

const PhysiologyGraphScreen = ({ navigation, route }: Props) => {

const theme = stores.appStateStore.selectedTheme.get()

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: sizeConverter(16),
    },
    graphView: {

    },
    scrollContainer: {
      paddingBottom: sizeConverter(24) + sizeConverter(16)
    },
    linearGradient: {
      height: sizeConverter(24),
      width: sizeConverter(360),
      position: 'absolute'
    },
    linearView: {
      height: sizeConverter(24),
      width: sizeConverter(360),
    }
  })

  return (
    <CustomSafeAreaView edges={{ top: false, bottom: false }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <StatisticsPhysiology title1={'평균 생리 기간'} title2={'평균 생리 주기'} />
        </View>
        <View style={{ marginTop: sizeConverter(22) }}>
          <StatisticsGraph title={'지난 생리 기간'} />
        </View>
        <View style={styles.container}>
          <StatisticsColorBar
            title={'지난 생리 기록'}
            subTitle={`N월 N일 - N월 N일`}
            percent1={60}
            percent2={40}
            color1={themeColor[theme].seegnal_secondary_1}
            color2={themeColor[theme].seegnal_secondary_2}
            contentContainerStyle={{ marginTop: sizeConverter(24) }}
            text1={`${0}번`}
            text2={`${0}번`}
          />
        </View>
      </ScrollView>
      {/* <LinearGradient colors={[`${themeColor[theme].seegnal_light_gray1}`, `${themeColor[theme].seegnal_light_gray1}00`]} style={styles.linearGradient}>
        <View style={styles.linearView} />
      </LinearGradient> */}
    </CustomSafeAreaView>
  );
};

export default PhysiologyGraphScreen
