import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Text } from 'react-native';
import ProfileIcon from '../../../assets/images/icon.png'
import { textStyles } from '@/src/styles/text_styles';
import { theme } from '@/src/styles/theme';
import FilterButtons from '@/src/components/buttons/FilterButtons';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.profileSection}>
        <Image style={styles.profilePicture} source={ProfileIcon} />
        <View style={styles.textContainer}>
          <Text style={textStyles.body}>Spend wisely,</Text>
          <Text style={textStyles.header}>Omar</Text>
        </View>
      </View>

      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContent}
          showsHorizontalScrollIndicator={false}
        >
        <FilterButtons/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 24
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  textContainer: {
    marginLeft: 17,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 14
  },
});
