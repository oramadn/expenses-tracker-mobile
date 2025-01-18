import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function BudgetOverview() {
  return (
    <>
      <View className='flex-row justify-between items-center max-h-6.25 mt-6 h-[100px]'>
        <View className='flex-col'>
          <Text className='text-white'><Text className='font-bold'>Total</Text> Budget</Text>
          <Text className='text-white text-xl font-bold mt-2'>JOD 1,500
            <Text className="text-sm">.00</Text>
          </Text>
        </View>
        <View>
          {/* Chart */}
        </View>
      </View>
      <View className="flex-row items-center w-full mt-3">
        <TextInput
          className="flex-4 bg-secondary text-white h-12 px-4 rounded-2xl"
          placeholder="Enter expense"
          placeholderTextColor="#A0A0A0"
          style={{ width: '85%' }}
          keyboardType="numeric"
        />
        <TouchableOpacity className="flex-1 bg-secondary justify-center items-center rounded-full ml-2 h-12">
          <Text className="text-primary text-xl">+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}