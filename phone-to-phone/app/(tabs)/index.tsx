import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Page = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={'/(signIn)/Login'}>Login</Link>
      <Link href={'/onboarding/onBoarding'}>Onboarding</Link>
    </View>
  )
}

export default Page