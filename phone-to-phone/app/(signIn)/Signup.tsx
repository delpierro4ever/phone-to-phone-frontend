import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
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
      <View style={{height: hp(10)}} />


      <View style={styles.wrapper}>
        {/* Header Section */}
        <View style={styles.headingContainer} className='items-center justify-center'> 
          <Text className='font-bold text-3xl text-slate-900 text-center mb-2'> Sign Up</Text>
          <Text className='font-regular text-md text-slate-900 text-center'>Enter the following details to create an account</Text>
        </View>

        {/* Space between Header and body */}
        <View style={styles.verticalSpacer}></View>


        {/* Body section */}
        <View style={styles.body}>

          {/* Name Input */}
          <View style={styles.inputWrap} className='flex-row'>
            <View style={defaultStyles.InputContainer} className='w-full flex-1'>
              <Text style={defaultStyles.label}>Enter First Name</Text>
              <TextInput
                value={value}
                onChangeText={handleChange}
                placeholder="First Name"
                style={defaultStyles.input}
              />
            </View>

            <View style={defaultStyles.InputContainer} className='w-full flex-1'>
              <Text style={defaultStyles.label}>Enter Last Name</Text>
              <TextInput
                value={value}
                onChangeText={handleChange}
                placeholder="Enter Last Name"
                style={defaultStyles.input}
              />
            </View>
            
          </View>

          {/* Space */}
          <View style={{ height: 15}} />


          {/* Mobile Operator input */}
          <View style={defaultStyles.InputContainer} className='w-full '>
              <Text style={defaultStyles.label}>Enter Mobile Money Operator</Text>
              <TextInput
                value={value}
                onChangeText={handleChange}
                placeholder="Select Mobile Operator"
                style={defaultStyles.input}
              />
            </View>
          <PhoneInputWithFlags />
          
          
          <View style={defaultStyles.InputContainer} className='w-full '>
              <Text style={defaultStyles.label}>Enter Password</Text>
              <TextInput
                value={value}
                onChangeText={handleChange}
                placeholder="Password"
                style={defaultStyles.input}
                secureTextEntry
              />
            </View>
            <View style={styles.verticalSpacer}></View>

          {/* Terms and Condition Button */}
          <View className='w-full flex-row space-x-2 justify-left ml-10 items-center'>
            <TouchableOpacity><View className='w-4 h-4 outline-2 outline-slate-500 rounded-sm bg-white flex justify-center items-center'><View className='w-3 h-3 rounded-full bg-slate-200' /></View></TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Read terms")}>
            <Text className='text-slate-500 text-right'>I have agree to our <Text className='underline font-bold text-blue-600'> Terms and Condition</Text></Text>
            </TouchableOpacity>
            
          </View>
        </View>
        

        {/* Button Section */}
        <View style={styles.buttonsContainer} >
          <TouchableOpacity style = {defaultStyles.buttonContainer} onPress={() => router.push('/(signIn)/accountCreatedSuccess')}>
                <Text className='text-white p-5 font-medium rounded-full text-center bg-blue-600'>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.push('/(signIn)/Login')}>
              <Text className='text-slate-500 text-right px-6 text-sm'>Don’t have an account? <Text className='font-bold text-blue-600'>Sign In</Text></Text>
            </TouchableOpacity>
         </View>
        
      </View>
    </SafeAreaView>
  )
}

export default login


const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: hp(100)
    
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: Colors.darkGray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  wrapper : {
    marginHorizontal: 10
  },
  headingContainer: {
    flex: 1,
    height: hp(15),
    paddingHorizontal:50,
  },
  verticalSpacer: {
    height: 20,
  },
  body : {
    flex: 3,
    width: wp(100),
    height: hp(55),
  },
  buttonsContainer: {
    flex: 1,
    height: hp(25),
    paddingVertical: 30,

  },
  inputWrap : {
    width: wp(100)
  },
  border : {
    borderColor: Colors.black,
    borderWidth: 1
  }


})