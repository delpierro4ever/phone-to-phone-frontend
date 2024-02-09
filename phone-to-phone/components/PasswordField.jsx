import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const PasswordField = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={!isPasswordVisible}
        style={styles.input}
        rightView={
          <TextInput.Icon
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            onPress={togglePasswordVisibility}
          />
        }
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default PasswordField;