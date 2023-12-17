import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useLayoutEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import signinImage from '../assets/signin-image.jpg';

const SignIn = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ImageBackground
      source={signinImage}
      style={{ resizeMode: 'cover' }}
      className="flex-1 relative"
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
        className="flex-1 justify-end"
      >
        <View className="absolute bottom-0 flex items-center justify-center w-full bg-white p-5 space-y-8 rounded-t-3xl">
          <Text className="text-2xl">Signin to your account</Text>
          <View className="space-y-5 w-full mb-20">
            <TextInput
              keyboardType="email-address"
              className="border border-teal-500 w-full p-2 rounded"
              placeholder="Email"
              autoCorrect
            />
            <View className="w-full relative">
              <TextInput
                keyboardType="default"
                className="border border-teal-500 w-full p-2 rounded"
                placeholder="Password"
                secureTextEntry={!passwordVisible}
              />
              <Text
                className="absolute right-2 top-2"
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <Ionicons name="eye-outline" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-off-outline" size={24} color="black" />
                )}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center justify-center space-x-2">
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text>Remember me</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-teal-500 text-xl">Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="w-full bg-teal-500 p-3 rounded-lg">
              <Text className="text-white text-xl text-center">Sign In</Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-center gap-x-2 mt-3">
              <Text className="text-xl">Don't have an account ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text className="text-teal-500 text-xl">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default SignIn;
