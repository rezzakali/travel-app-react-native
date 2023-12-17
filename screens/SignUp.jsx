import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useLayoutEffect } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import signupImage from '../assets/signup-image.jpg';

const SignUp = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ImageBackground
      source={signupImage}
      style={{ resizeMode: 'cover' }}
      className="flex-1 relative"
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
        className="flex-1 justify-end"
      >
        <View className="absolute bottom-0 flex items-center justify-center w-full bg-white p-5 space-y-8 rounded-t-3xl">
          <Text className="text-2xl">Create your account</Text>
          <View className="space-y-5 w-full mb-8">
            <TextInput
              autoCorrect
              keyboardType="default"
              className="border border-teal-500 w-full p-2 rounded"
              placeholder="Name"
            />
            <TextInput
              keyboardType="email-address"
              autoCorrect
              className="border border-teal-500 w-full p-2 rounded"
              placeholder="Email"
            />
            <TextInput
              className="border border-teal-500 w-full p-2 rounded"
              placeholder="Password"
              secureTextEntry
            />
            <TextInput
              className="border border-teal-500 w-full p-2 rounded"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <TouchableOpacity className="w-full bg-teal-500 p-3 rounded-lg">
              <Text className="text-white text-xl text-center">Sign Up</Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-center gap-x-2 mt-3">
              <Text className="text-xl">Already have an account ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text className="text-teal-500 text-xl">Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text className="text-teal-500 text-xl">Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default SignUp;
