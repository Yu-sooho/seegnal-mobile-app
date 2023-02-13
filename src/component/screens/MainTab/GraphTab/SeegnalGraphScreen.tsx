
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { GraphTabParamList } from '../../../../navigation';
import { sizeConverter } from '../../../../utils';
import { CustomSafeAreaView } from '../../../atoms';
import { StatisticsSeegnal, StatisticsEroticism } from '../../../organisms';
import LinearGradient from 'react-native-linear-gradient';
import { themeColor } from '../../../../resources';
import createRootStore from '../../../../stores';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatisticsColorBar } from '../../../organisms/graph';
import { Icon16NonSafe, Icon16Safe } from '../../../icons';

type Props = NativeStackScreenProps<GraphTabParamList, 'SeegnalGraphScreen'>;

const stores = createRootStore()

const SeegnalGraphScreen = ({ navigation, route }: Props) => {

  const theme = stores.appStateStore.selectedTheme.get()

  const insets = useSafeAreaInsets()

  const [condition, setCondition] = useState(Object)
  const [emotion, setEmotion] = useState(Object)

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: sizeConverter(16),
    },
    scrollContainer: {
      marginTop: sizeConverter(16),
      paddingBottom: sizeConverter(24) + sizeConverter(16)
    },
    contentView: {
      marginTop: sizeConverter(16),
      flexDirection: 'row',
      justifyContent: 'space-between'
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

  const radTemp = Math.floor(Math.random() * 100);

  return (
    <CustomSafeAreaView style={styles.container} edges={{ top: false, bottom: false }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <StatisticsSeegnal />
        <StatisticsColorBar
          title={'성관계'}
          subTitle={`총 ${0}번`}
          textImage1={<Icon16Safe imageStyle={{ marginRight: sizeConverter(4) }} />}
          textImage2={<Icon16NonSafe imageStyle={{ marginRight: sizeConverter(4) }} />}
          percent1={radTemp}
          percent2={100 - radTemp}
          color1={themeColor[theme].seegnal_secondary_1}
          color2={themeColor[theme].seegnal_secondary_2}
          contentContainerStyle={{ marginTop: sizeConverter(24) }}
          text1={`${0}번`}
          text2={`${0}번`}
        />
        <StatisticsEroticism />
      </ScrollView>
      {/* <LinearGradient colors={[`${themeColor[theme].seegnal_light_gray1}`, `${themeColor[theme].seegnal_light_gray1}00`]} style={styles.linearGradient}>
        <View style={styles.linearView} />
      </LinearGradient> */}
    </CustomSafeAreaView>
  );
};

export default SeegnalGraphScreen
