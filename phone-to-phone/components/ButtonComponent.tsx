import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'


interface ButtonComponentProps {
    name: string,
    color: any,
    onPress: Function
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({name, color}) => {
  return (
    <>
        <TouchableOpacity style = {styles.container}>
            <Text className='text-white p-5 rounded-full text-center bg-blue-600'>Next</Text>
        </TouchableOpacity>
    </>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container : {
        width : widthPercentageToDP(100),
        paddingHorizontal : 20,
    }
})