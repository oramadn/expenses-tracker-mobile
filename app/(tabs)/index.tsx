import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Text } from 'react-native';
import ProfileIcon from '../../assets/images/icon.png'
import { textStyles } from '@/src/styles/text_styles';
import { theme } from '@/src/styles/theme';
import FilterButtons from '@/src/components/buttons/FilterButtons';
import BudgetCard from '@/src/components/BudgetCard';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Goals from '@/src/components/Goals';
import SpendingOverview from '@/src/components/SpendingOverview';


export default function HomeScreen() {
  const textStyle = textStyles();

  const goals = [
    { id: '1', title: 'New Car' },
    { id: '2', title: 'Trip to The far far east of the world' },
    { id: '3', title: 'Charity' },
  ];

  const transactionsData = [
    {
      id: '1',
      icon: 'silverware-variant',
      title: 'Noodles',
      subtitle: '24 hours ago',
      amount: '-1.12 JOD',
      percentage: '1%',
      time: '24 hours ago',
    },
    {
      id: '2',
      icon: 'car',
      title: 'Car',
      subtitle: '31 mins ago',
      amount: '-0.75 JOD',
      percentage: '1%',
      time: '31 mins ago',
    },
    {
      id: '3',
      icon: 'car',
      title: 'Car',
      subtitle: '31 mins ago',
      amount: '-0.75 JOD',
      percentage: '1%',
      time: '31 mins ago',
    }
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.profileSection}>
        <Image style={styles.profilePicture} source={ProfileIcon} />
        <View style={styles.textContainer}>
          <Text style={textStyle.body}>Spend wisely,</Text>
          <Text style={[textStyle.header, { fontSize: 22 }]}>Omar</Text>
        </View>
      </View>

      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContent}
          showsHorizontalScrollIndicator={false}
        >
          <FilterButtons />
        </ScrollView>
      </View>
      <View style={styles.budgetSection}>
        <BudgetCard
          icon={<MaterialCommunityIcons name="hand-coin-outline" size={20} style={{ marginRight: 8 }} />}
          title="Total Spent"
          value="-1500.00 JOD"
          backgroundColor={theme.colors.background.default}
        />
        <BudgetCard
          icon={<Ionicons name="wallet-outline" size={20} style={{ marginRight: 8, marginTop: 2 }} />}
          title="Total Left"
          value="500.00 JOD"
          backgroundColor={theme.colors.background.default}
        />
      </View>
      <Goals
        goals={goals}
        onSeeAllPress={() => console.log('Navigate to Goals')}
      />
      <SpendingOverview onSeeAllPress={() => console.log('Navigate to Spending')} transactions={transactionsData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background.muted
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
    borderColor: theme.colors.primary.base,
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
  budgetSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 15
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  }
});
