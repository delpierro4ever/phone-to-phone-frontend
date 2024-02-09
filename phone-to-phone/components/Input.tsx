import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


interface InputFieldProps {
  label: string;
  placeholder?: string;
  initialValue?: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputFieldProps>  = ({ label, placeholder, initialValue, onChangeText }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newText: any) => {
    setValue(newText);
    onChangeText(newText); // Pass the updated value to the parent component
  };

  return (
    <View style={styles.container} className='w-full'>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});


export default Input;