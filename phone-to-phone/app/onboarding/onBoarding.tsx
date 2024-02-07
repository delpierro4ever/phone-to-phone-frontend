import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

const onBoarding = () => {
  return (
    <View>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: (<View>
                <Text>Hello World</Text>
            </View>),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          
        ]}
      />
      <Text>Home</Text>
    </View>
  )
}

export default onBoarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})