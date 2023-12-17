import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const SearchTextInput = () => {
  const [value, setValue] = useState('');
  return (
    <View className="my-8 relative">
      <Text className="absolute left-2 top-[14px]">
        <SimpleLineIcons name="magnifier" size={18} color="black" />
      </Text>
      <TextInput
        value={value}
        onChangeText={(value) => setValue(value)}
        placeholder="Search"
        keyboardType="default"
        className="p-2 pl-8 pr-10 rounded border border-teal-500"
      />
      <Text
        className="absolute right-2 top-[10px]"
        onPress={() => setValue('')}
      >
        {value && <Ionicons name="close-outline" size={24} color="black" />}
      </Text>
    </View>
  );
};

export default SearchTextInput;
