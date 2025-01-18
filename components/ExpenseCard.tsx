import { View, Text } from 'react-native';
import { getCategoryIcon, Category} from '../constants/categoryIcons';
import { colors } from '@/theme/colors';
import { Feather } from '@expo/vector-icons';

interface ExpenseCardProps {
  expenseName: string;
  expenseAmount: string;
  category: Category;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expenseName, expenseAmount, category }) => {
  const Icon = getCategoryIcon(category);

  return (
    <View className="flex-col w-[150px] h-[150px] bg-secondary mt-2 mr-2 justify-center items-center rounded-xl relative">
      <Feather name="more-horizontal" size={26} color="white" style={{ position: 'absolute', top: 4, right: 8 }} />
      <View style={{
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 30,
        padding: 10,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      }}>
        {Icon}
      </View>
      <Text className="text-white text-xs font-bold mt-2">{expenseName}</Text>
      <Text className="text-white font-bold text-lg mt-2">
        {expenseAmount}
        <Text className="text-sm">.00</Text>
      </Text>
    </View>
  );
};

export default ExpenseCard;