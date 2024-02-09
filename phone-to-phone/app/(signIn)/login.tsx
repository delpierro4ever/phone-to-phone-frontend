import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '@/components/Input'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useState } from 'react'

import {  router } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import { SafeAreaView } from 'react-native-safe-area-context'


// Typescript strong types
interface InputFieldProps {
  label: string;
  placeholder?: string;
  initialValue?: string;
  onChangeText: (text: string) => void;
}

const login: React.FC<InputFieldProps> = ({ label, placeholder, initialValue, onChangeText }) => {
    // values for input fields
  const [value, setValue] = useState(initialValue);

  const handleChange = (newText: any) => {
    setValue(newText);
    onChangeText(newText); // Pass the updated value to the parent component
  };

   
  return (
    // Main Container
    <SafeAreaView style={styles.container} className="items-center justify-center">
        
        {/* space to make margin top */}
        <View style={{height: hp(15)}} />

        {/* Content Area for Title and inputs */}
      <View style={styles.content} className='items-center'>
        <View className='w-full mb-10'><Text className='font-bold text-center text-3xl'>Welcome Back!</Text></View>
        <View className='w-full h-full pt-6'>
            <Input label="Enter Phone Number" placeholder="Phone" initialValue = "" onChangeText={handleChange}/>
            <View style={styles.spacer} />
            <Input label="Enter Phone Number" placeholder="Phone" initialValue = "" onChangeText={handleChange}/>
            <TouchableOpacity onPress={()=>console.log("to password forgot")}><Text className='text-slate-400 text-right p-5 text-sm'>Forgot Password?</Text></TouchableOpacity>
        </View>
      </View>

      {/* Footer are carrying the Buttons */}
      <View style={styles.footer}>
        <View style={{ height: 20}} />
            <TouchableOpacity style = {defaultStyles.buttonContainer} onPress={() => router.push('/(signIn)/Signup')}>
                <Text className='text-white p-5 font-medium rounded-full text-center bg-blue-600'>Log In</Text>
            </TouchableOpacity>

            {/* Go to signup */}
            <TouchableOpacity onPress={()=>router.push('/(signIn)/Signup')}>
                <Text className='text-slate-500 text-right p-6 text-sm'>Don’t have an account? <Text className='font-bold text-blue-600'>Sign up</Text></Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(100),
    width: wp(100)
  },

  content: {
    height: hp(50),
    width: wp(100),
    marginVertical: 25
  },

  footer : {
    height: hp(35)
  },
  spacer: {
    height: hp(3)
  }
})