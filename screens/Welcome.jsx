import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useLayoutEffect } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import welcomeImage from '../assets/welcome-image.jpg';

const Welcome = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ImageBackground
      source={welcomeImage}
      style={{ resizeMode: 'cover' }}
      className="flex-1 relative"
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
        className="flex-1 justify-end"
      >
        <View className="p-5 absolute bottom-16 flex items-center justify-center w-full space-y-3">
          <Text className="text-center text-green-950 text-4xl font-extrabold">
            The simplest way
            {'\n'} to find your paradise
          </Text>
          <Text className="text-center text-gray-500 text-2xl">
            Travel around the
            {'\n'}world and enjoy your holidays
          </Text>
          <View className="w-full">
            <TouchableOpacity className="bg-teal-500 mt-8 p-3 rounded-lg">
              <Text className="text-center text-white text-2xl">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center gap-x-2 mt-3">
            <Text className="text-xl font-semibold">
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text className="text-teal-500 text-xl font-semibold">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Welcome;
