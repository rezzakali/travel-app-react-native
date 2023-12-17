import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ScrollMenu = () => {
  const items = [
    {
      title: 'All',
      value: 'all',
    },
    {
      title: 'Popular',
      value: 'popular',
    },
    {
      title: 'Recomended',
      value: 'recomended',
    },
    {
      title: 'Most Viewed',
      value: 'most-viewed',
    },
    { title: 'Hotels', value: 'hotels' },
    { title: 'Flights', value: 'flights' },
    { title: 'Destinations', value: 'destinations' },
    { title: 'Car Rentals', value: 'car-rentals' },
    { title: 'Cruises', value: 'cruises' },
    { title: 'Travel Guides', value: 'travel-guides' },
    { title: 'Adventure Travel', value: 'adventure-travel' },
    { title: 'Beach Vacations', value: 'beach-vacations' },
    { title: 'Backpacking', value: 'backpacking' },
    { title: 'Cultural Tourism', value: 'cultural-tourism' },
  ];
  const [activeTab, setActiveTab] = useState('popular');

  const handleTabPress = (value) => {
    setActiveTab(value);
  };
  return (
    <View>
      <ScrollView horizontal>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`p-2 rounded mx-2 ${
              item.value === activeTab ? 'bg-teal-500' : ''
            }`}
            onPress={() => handleTabPress(item.value)}
          >
            <Text
              className={`text-green-950 font-semibold ${
                item.value === activeTab && 'text-white font-bold'
              }`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollMenu;
