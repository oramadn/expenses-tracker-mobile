import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Text } from 'react-native';
import ProfileIcon from '../../../assets/images/icon.png'
import { textStyles } from '@/src/styles/text_styles';
import { theme } from '@/src/styles/theme';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.profilePicture} source={ProfileIcon} />
      <View style={styles.textContainer}>
        <Text style={textStyles.body}>Spend wisely,</Text>
        <Text style={textStyles.header}>Omar</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 18,
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
});
