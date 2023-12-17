import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Card = ({ image, title, location }) => {
  return (
    <TouchableOpacity>
      <View className="w-[250px] shadow rounded mt-7 border border-gray-100 p-2 space-y-3 m-2 relative">
        <View className="w-full h-40">
          <Image
            source={image}
            alt="img"
            className="w-full h-full object-contain rounded"
          />
        </View>
        <Text className="text-green-950 font-bold text-xl">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Text>
            <Ionicons name="ios-location" size={20} color="teal" />
          </Text>
          <Text className="text-lg">{location}</Text>
        </View>
        <View className="absolute top-1 right-4 rounded-full bg-white w-7 h-7 flex items-center justify-center">
          <Text className="p-1">
            <AntDesign name="heart" size={18} color="red" />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
