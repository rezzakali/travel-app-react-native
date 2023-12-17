import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const SpecialRow = () => {
  return (
    <View className="flex-row items-center justify-between my-3">
      <Text className="text-green-950 font-semibold text-lg">
        Special for you
      </Text>
      <View className="flex-row items-center justify-between">
        <Text className="text-teal-500 text-md font-semibold">Explorer</Text>
        <Text className="text-green-950">
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </Text>
      </View>
    </View>
  );
};

export default SpecialRow;
