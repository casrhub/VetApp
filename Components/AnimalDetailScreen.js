import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AnimalDetailScreen({ route }) {
  const { animal } = route.params;

  return (
    <View style={styles.container}>
      {animal.picture ? (
        <Image
          source={{ uri: animal.picture }}
          style={styles.image}
        />
      ) : null}
      <Text style={styles.title}>{animal.name}</Text>
      <Text style={styles.age}>Age: {animal.age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    padding: 20,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Make the image circular
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    color: '#666',
  },
});
