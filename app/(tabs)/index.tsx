import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/theme/colors';
import HomeHeader from '@/components/HomeHeader';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-background p-4'>
      <HomeHeader/>
    </SafeAreaView>
  );
}