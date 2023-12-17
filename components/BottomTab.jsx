import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const BottomTab = () => {
  const items = [
    {
      title: 'Home',
      value: 'home',
      icon: {
        inactive: <Ionicons name="home-outline" size={20} color="black" />,
        active: <FontAwesome name="home" size={20} color="teal" />,
      },
    },
    {
      title: 'Messages',
      value: 'messages',
      icon: {
        inactive: <Feather name="message-square" size={20} color="black" />,
        active: (
          <MaterialCommunityIcons name="message" size={20} color="teal" />
        ),
      },
    },
    {
      title: 'Notifications',
      value: 'notifications',
      icon: {
        inactive: (
          <Ionicons name="notifications-outline" size={20} color="black" />
        ),
        active: <Ionicons name="notifications" size={20} color="teal" />,
      },
    },
    {
      title: 'Settings',
      value: 'settings',
      icon: {
        inactive: (
          <MaterialCommunityIcons name="cog-outline" size={20} color="black" />
        ),
        active: <FontAwesome name="cog" size={20} color="teal" />,
      },
    },
  ];
  const [activeTab, setActiveTab] = useState('home');

  const handleSetTab = (value) => {
    setActiveTab(value);
  };

  return (
    <View className="flex-row items-center justify-evenly mx-2 shadow shadow-gray-500/50 rounded-xl mb-0">
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="p-2"
          onPress={() => handleSetTab(item.value)}
        >
          <View className="flex-col items-center my-2">
            <Text className={`${activeTab === item.value && 'text-teal-500'}`}>
              {activeTab === item.value ? item.icon.active : item.icon.inactive}
            </Text>
            <Text
              className={`${
                item.value === activeTab && 'text-teal-500 font-semibold'
              }`}
            >
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTab;
