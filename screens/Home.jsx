import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import GlobalStyle from '../GlobalStyle';
import cardImage from '../assets/card-image.jpg';
import profileImage from '../assets/profile-image.png';
import BottomTab from '../components/BottomTab';
import Card from '../components/Card';
import ScrollMenu from '../components/ScrollMenu';
import SearchTextInput from '../components/SearchTextInput';
import SpecialCard from '../components/SpecialCard';
import SpecialRow from '../components/SpecialRow';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyle.androidSafeArea}>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView>
        <View className="m-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-full">
                <Image
                  source={profileImage}
                  className="w-full h-full object-cover rounded-full"
                />
              </View>
              <View>
                <Text className="font-bold text-xl">Rezzak</Text>
                <Text className="text-lg font-base">
                  Where do you want to go?
                </Text>
              </View>
            </View>
            <Text>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </Text>
          </View>
          <SearchTextInput />
          <ScrollMenu />
          <ScrollView horizontal>
            {Array.from({ length: 8 }, (_, index) => (
              <Card
                key={index}
                image={cardImage}
                title={'Nusa Penida'}
                location={'Goa, India'}
              />
            ))}
          </ScrollView>
          <SpecialRow />

          <ScrollView horizontal>
            {Array.from({ length: 8 }, (_, index) => (
              <SpecialCard
                key={index}
                image={cardImage}
                title={'Nusa Penida'}
                location={'Goa, India'}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
};

export default Home;
