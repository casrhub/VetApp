import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image, // Import Image for optional logo
} from 'react-native';
import { firebase } from '../firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('MainMenu');
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* Optional: Add Logo/Image */}
        {/* 
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
        */}

        {/* Title */}
        <Text style={styles.title}>Welcome Back!</Text>

        {/* Display Error Message */}
        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

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

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]} // Differentiate Sign Up button
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f0f0f0', // Light gray background
  },
  box: {
    width: '85%', // Increased width for better spacing
    padding: 25, // Increased padding for more space
    borderRadius: 10,
    backgroundColor: '#fff', // White background for the box
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15, // Reduced margin for better spacing
  },
  title: {
    fontSize: 28, // Suitable font size for a title
    fontWeight: '700', // Bold text
    color: '#333', // Dark color for readability
    textAlign: 'center', // Center the title
    marginBottom: 20, // Space below the title
  },
  input: {
    height: 50,
    borderColor: '#ccc', // Lighter border color
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15, // More padding inside the input
    borderRadius: 8, // Rounded corners
    fontSize: 16, // Increased font size for readability
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center', // Center the error message
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8, // More rounded button
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
    elevation: 5, // Shadow for Android
  },
  signUpButton: {
    backgroundColor: '#34C759', // Green color for Sign Up button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increased font size
    fontWeight: '600', // Semi-bold text
  },
});
