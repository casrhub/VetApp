import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { auth } from '../firebase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onSignUpPress = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('MainMenu');
      })
      .catch(error => {
        setErrorMsg(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* Optional: Add Logo/Image */}
      {/* 
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />
      */}

      {/* Title */}
      <Text style={styles.title}>Create Your Account</Text>

      {/* Display Error Message */}
      {!!errorMsg && <Text style={styles.error}>{errorMsg}</Text>}

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32, // Increased font size
    fontWeight: 'bold', // Bold text
    color: '#333', // Darker color for better readability
    textAlign: 'center', // Center the text
    marginBottom: 30, // Space below the title
  },
  input: {
    height: 50,
    borderColor: '#ccc', // Lighter border color
    borderWidth: 1,
    marginBottom: 20, // Increased spacing between inputs
    paddingHorizontal: 15, // More padding inside the input
    borderRadius: 8, // Slightly more rounded corners
    fontSize: 16, // Increased font size for better readability
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8, // More rounded button
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
    elevation: 5, // Shadow for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increased font size
    fontWeight: '600', // Semi-bold text
  },      
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center', // Center the error message
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
