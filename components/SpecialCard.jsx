import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const SpecialCard = ({ image, title, location }) => {
  return (
    <TouchableOpacity>
      <View className="w-[300px] flex-row p-2 border border-gray-100 rounded space-x-3 items-center shadow mx-2">
        <View className="w-32 h-20">
          <Image
            source={image}
            alt="img"
            className="w-full h-full object-cover rounded"
          />
        </View>
        <View>
          <Text className="text-green-950 text-xl font-bold">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <Text>
              <Ionicons name="ios-location" size={20} color="teal" />
            </Text>
            <Text className="text-md">{location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpecialCard;
