import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import IntlPhoneInput from 'react-native-intl-phone-input';

const PhoneInputWithFlags = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (phoneObject : any) => {
      setPhoneNumber(phoneObject.formattedNumber);
    };

  return (
    <View style={styles.container}>
    <Text className='text-sm text-slate-500'>Phone Number:</Text>
    <IntlPhoneInput
      onChangeText={handleChange}
      defaultCountry="CM" // Set your default country code for Cameroon
      placeholder="Enter phone number"
      containerStyle={styles.phoneInputContainer}
      textInputStyle={styles.textInputStyle}
    />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  padding: 15,
},
phoneInputContainer: {
  width: '100%',
  backgroundColor: '#fff',
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  padding: 0,
},
textInputStyle: {
  fontSize: 10,
},
});


export default PhoneInputWithFlags;