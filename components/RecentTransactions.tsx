import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors } from "@/theme/colors";
import RecentTransactionCard from "./RecentTransactionCard";

export default function RecentTransactions() {
  const cardsData = [
    { expenseName: 'Gas', expenseAmount: '415', category: 'gas' as const, expenseDate: 'Yesterday' },
    { expenseName: 'Groceries', expenseAmount: '220', category: 'groceries' as const, expenseDate: '2 days ago' },
    { expenseName: 'Internet Bill', expenseAmount: '150', category: 'internet' as const, expenseDate: '23 Oct' },
    { expenseName: 'Internet Bill', expenseAmount: '150', category: 'internet' as const, expenseDate: '23 Oct' },
  ];

  return (
    <SafeAreaView className='flex-1 mt-3'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-white text-lg font-bold'>Recent Transactions</Text>
        <TouchableOpacity>
          <Text className='text-gray-400'>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        className='mt-2 flex-1' 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          paddingBottom: 64,
          gap: 12,
          backgroundColor: colors.secondary,
          borderRadius: 20,
        }}
      >
        {cardsData.length === 0 ? (
          <Text className="text-white text-xs font-bold text-center">
            🎉 No upcoming expenses
          </Text>
        ) : (
          cardsData.map((expense, index) => (
            <RecentTransactionCard
              key={index}
              expenseName={expense.expenseName}
              expenseAmount={expense.expenseAmount}
              expenseDate={expense.expenseDate}
              category={expense.category}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}