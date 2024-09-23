import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
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
      {!!errorMsg && <Text style={styles.error}>{errorMsg}</Text>}

      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />

<TouchableOpacity style={styles.button} onPress={onSignUpPress}>
  <Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },      
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    input: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    error: {
      color: 'red',
      marginBottom: 15,
    },
    item: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    title: {
      fontSize: 24,
      marginBottom: 15,
    },
    image: {
      width: '100%',
      height: 200,
    },
  });
  