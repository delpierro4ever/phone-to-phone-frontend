import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '@/components/Input'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const login = () => {
  return (
    <View style={styles.container} className="flex-1 items-center justify-center ">
      <View style={styles.body}>
        <Text className='text-3xl font-bold text-center'>Sign Up</Text>
        <Text className="text-center">Enter the following details to create an account</Text>
      </View>
      <View style={styles.body} className='flex flex-row space-x-2 justify-between px-5 w-full'>
        <Input label="Enter First Name" placeholder='First Name' className="flex-1" />
        <Input label="Enter First Name" placeholder='First Name' className="flex-1"  />
      </View>
      <View style={styles.body} ></View>
    </View>
  )
}

export default login


const styles = StyleSheet.create({
    container : {
        height: hp(100),
        width: wp(100),
        padding: 5
    },
    body : {
        width: wp(100)
    }

})