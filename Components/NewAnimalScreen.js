
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { firebase } from '../firebase';

export default function NewAnimalScreen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onAddAnimalPress = () => {
    if (name === '' || age === '' || picture === '') {
      setErrorMsg('All fields are required.');
      return;
    }

    firebase
      .firestore()
      .collection('animals')
      .add({
        name,
        age,
        picture,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        setErrorMsg('Error adding animal. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

        <TextInput
          placeholder="Animal Name"
          onChangeText={setName}
          value={name}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          onChangeText={setAge}
          value={age}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Picture URL"
          onChangeText={setPicture}
          value={picture}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={onAddAnimalPress}>
          <Text style={styles.buttonText}>Add Animal</Text>
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
    width: '85%', // Adjust the width as needed
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff', // White background for the box
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#28a745', // Green color
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});
