import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({label, placeholder, value}:any ) => {
  return (
    <View className='outline-2 outline-slate-600 w-100 justify-start py-2 flex-1'>
      <Text className='mb-1 text-slate-700 text-sm'>{label}</Text>
      <TextInput placeholder={placeholder} value={value} className='w-full outline-4 outline-slate-600 bg-white p-4 rounded-lg'/>
    </View>
  )
}

export default Input