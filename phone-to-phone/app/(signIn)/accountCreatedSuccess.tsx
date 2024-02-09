import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Input from '@/components/Input'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useState } from 'react'
import PhoneInputWithFlags from '@/components/PhoneInputWithFlag'
import PasswordField from '@/components/PasswordField'
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles'
import { router, Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'



interface InputFieldProps {
  label: string;
  placeholder?: string;
  initialValue?: string;
  onChangeText: (text: string) => void;
}

const login: React.FC<InputFieldProps> = ({ label, placeholder, initialValue, onChangeText }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newText: any) => {
    setValue(newText);
    onChangeText(newText); // Pass the updated value to the parent component
  };

   
  return (
    <SafeAreaView style={styles.container} className="flex-1 items-center justify-center">
      {/* Margin top */}

      <View style={styles.headingContainer} className=' flex-1 items-center justify-center'> 
          <Text className='font-bold text-3xl text-slate-700 text-center mb-2'> Account Created </Text>
          <Text className='font-regular text-md text-slate-600 text-center'>Your account has been created successfully.
Press continue to continue using the app</Text>
        </View>

        <View style={{height: hp(35)}} className='flex- w-full items-center justify-center'>
            <Image source={require('@/assets/images/success.png')} style={{height: hp(50), width: wp(50), resizeMode: 'contain'}} />
        </View>

        <View className='flex-1 items-center justify-center'>
            <TouchableOpacity style = {defaultStyles.buttonContainer} onPress={() => router.push('/(signIn)/Signup')}>
                <Text className='text-white p-5 font-medium rounded-full text-center bg-blue-600'>Log In</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}

export default login


const styles = StyleSheet.create({
  container: {

    height: hp(100)
    
  },
  headingContainer: {
    height: hp(9),
    paddingHorizontal:50,
    marginTop: 30
  },

})