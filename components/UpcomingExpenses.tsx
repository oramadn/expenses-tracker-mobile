import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import UpcomingExpenseCard from './UpcomingExpenseCard';

export default function UpcomingExpenses() {
  const cardsData = [
    { expenseName: 'Gas', expenseAmount: '415', category: 'gas' as const, expenseDate: 'Tomorrow' },
    { expenseName: 'Groceries', expenseAmount: '220', category: 'groceries' as const, expenseDate: 'On Wednesday' },
    { expenseName: 'Internet Bill', expenseAmount: '150', category: 'internet' as const, expenseDate: '21 Oct' },
  ];

  return (
    <View className='flex mt-3'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-white text-lg font-bold'>Upcoming Expenses</Text>
        <TouchableOpacity>
          <Text className='text-gray-400'>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {cardsData.length === 0 ? (
          <View
            key="placeholder"
            className="w-[150px] h-[150px] bg-secondary mt-2 mr-2 justify-center items-center rounded-xl"
          >
            <Text className="text-white text-xs font-bold text-center">
              🎉 No upcoming expenses
            </Text>
          </View>
        ) : (
          cardsData.map((expense, index) => (
            <UpcomingExpenseCard
              key={index}
              expenseName={expense.expenseName}
              expenseAmount={expense.expenseAmount}
              expenseDate = {expense.expenseDate}
              category={expense.category}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}