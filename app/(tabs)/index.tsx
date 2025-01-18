import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '@/components/HomeHeader';
import BudgetOverview from '@/components/BudgetOverview';
import UpcomingExpenses from '@/components/UpcomingExpenses';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-background pt-4 pt-4 pl-6 pr-6'>
      <HomeHeader />
      <BudgetOverview />
      <UpcomingExpenses />
    </SafeAreaView>
  );
}