import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Image } from 'react-native'

import Colors from '@/constants/Colors'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



 const slides=[
  {
    id: 1,
    image: require('@/assets/images/one.png'),
    title:'Pay',
    subtitle:'Send money easily and with one click everything will be sent every time you make a transaction',
  },
  {
    id: 2,
    image: require('@/assets/images/two.png'),
    title: 'Receive Payment',
    subtitle: 'Receive money easily and with one click everything will be sent every time you make a transaction',
  },
  {
    id: 3,
    image: require('@/assets/images/three.png'),
    title: 'Easy To Use',
    subtitle: 'Very easy to use and easy to understand for those of you who are beginners',
  },
  
]

const Slide = ({item}:any) => {
  return (
    <View style={{width: wp(100)}} className=' justify-center items-center'>
      <Image source={item.image} style={{height: hp(40), width: wp(40), resizeMode: 'contain'}} />
      <Text style={styles.color} className='font-bold text-lg'>{item.title}</Text>
      <Text className='text-sm text-slate-600 w-8/12 text-center'>{item.subtitle}</Text>
    </View>
  )
}
const onBoarding = () => {

  const ref = useRef<any>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const Footer = () => {
    return (
      <View style={{height: hp(28)}} className='justify-between px-14'>
        <View className='flex-row justify-center mt-1 mb-14'>
          {slides.map((_, index) =>(
            <View key={index} style={ currentSlideIndex  == index && styles.bg} className='h-2 w-2 bg-blue-100 rounded-lg mx-2'/>
          ))}
        </View>
        
        { currentSlideIndex !== 2 ? (<>
          <TouchableOpacity style = {styles.buttonContainer} onPress={goNextSlide}>
            <Text className='text-white p-5 rounded-full text-center font-medium bg-blue-600'>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={skipSlide}><Text style={styles.color} className='font-bold text-center mb-3 underline'>Skip this step</Text></TouchableOpacity>
        </>) : 
            (<>
              <TouchableOpacity style = {styles.buttonContainer} onPress={() => router.push('/(signIn)/Signup')}>
                <Text className='text-white p-5 font-medium rounded-full text-center bg-blue-600'>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.gap}></View>
              <TouchableOpacity style = {styles.buttonContainer} onPress={() => router.push('/(signIn)/Login')}>
                <Text style = {styles.outline} className='text-blue-600 p-5 font-medium rounded-full text-center outline-2 outline-blue-600'>Login Now</Text>
              </TouchableOpacity>
            
            </>)
        }
        
      </View>
    )
  }

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round( contentOffsetX / wp(100))
    setCurrentSlideIndex(currentIndex)
    console.log("slide move")
  }

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if(nextSlideIndex != slides.length) {
      const offset = nextSlideIndex + wp(100) 
      ref?.current?.scrollToOffset({ offset })
      setCurrentSlideIndex(nextSlideIndex)
      console.log("next slide")
    }
  }

  const skipSlide = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex + wp(100)
    ref?.current?.scrollToOffset({ offset })
    setCurrentSlideIndex(lastSlideIndex);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='black'/>
      <FlatList 
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides} 
        contentContainerStyle={{height: hp(75)}} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  )
}

export default onBoarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(100),
  }, 
  color: {
    color: Colors.primary
  },
  bg: {
    backgroundColor: Colors.primary
  },
  buttonContainer : {
    width : wp(100),
    paddingHorizontal : 20,
  },
  outline : {
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  gap : {
    height: hp(1)
  }
})