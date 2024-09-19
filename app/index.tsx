import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

export default function Index() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  })

  return (
    <View className='bg-background h-full w-full flex flex-col items-center'>
      <Image
        source={require('../assets/images/logo.png')}
        className='mt-[138px]'
      />

      <Text className='text-green font-bold text-5xl mt-2'>
        DietAI
      </Text>
      <Text className='text-white w-[240px] text-center mt-1'>
        Sua dieta personalizada
        com inteligência artificial! 
      </Text>

      <Pressable className='bg-blue mt-4 rounded-md'>
        <Text className='text-white py-3 px-32'>Gerar dieta</Text>
      </Pressable>
    </View>
  )
}