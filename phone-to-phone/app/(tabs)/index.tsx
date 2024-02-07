import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Page = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={'/(signIn)/login'}>Login</Link>
    </View>
  )
}

export default Page