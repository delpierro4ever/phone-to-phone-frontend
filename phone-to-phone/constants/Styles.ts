import { StyleSheet } from "react-native"
import Colors from "./Colors"
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const defaultStyles = StyleSheet.create({
    buttonContainer : {
        width : wp(100),
        paddingHorizontal : 20,
      },
      InputContainer: {
        paddingHorizontal: 15,
        
        
      },
      label: {
        color: Colors.darkGray,
        fontSize: 12,
        marginBottom: 5,
      },
      input: {
        backgroundColor: '#fff',
        borderColor: Colors.lightGray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
      },
})