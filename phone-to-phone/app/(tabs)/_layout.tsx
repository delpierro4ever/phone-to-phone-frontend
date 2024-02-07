import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'


// icons imports
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
            fontFamily: 'popMed'
        }
    }}>

        {/* Nav Home Screen Seetings */}
        <Tabs.Screen name='index' options={{
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => 
                <Entypo name="home" size={size} color={color} />
        }} />

        
        {/* Nav History Screen Seetings */}
        <Tabs.Screen name='history' options={{
            tabBarLabel:'History',
            tabBarIcon: ({ color, size }) => 
                <MaterialIcons name="history" size={size} color={color} />
        }} />

        {/* Nav Help Screen Seetings */}
        <Tabs.Screen name='help' options={{
            tabBarLabel:'Help',
            tabBarIcon: ({ color, size }) => 
                <MaterialIcons name="help-outline" size={size} color={color} />
        }} />


        {/* Nav Help Screen Seetings */}
        <Tabs.Screen name='profile' options={{
            tabBarLabel:'Profile',
            tabBarIcon: ({ color, size }) => 
                <AntDesign name="user" size={size} color={color} />
        }} />
    </Tabs>
  )
}

export default _layout