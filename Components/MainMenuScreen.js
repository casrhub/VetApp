
import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import { firebase } from '../firebase';

export default function MainMenuScreen({ navigation }) {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('animals')
      .onSnapshot((snapshot) => {
        const animalList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAnimals(animalList);
      });

    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('AnimalDetail', { animal: item })}
    >
      {item.picture ? (
        <Image source={{ uri: item.picture }} style={styles.image} />
      ) : null}
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.age}>Age: {item.age}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.addButtonContainer}>
        <Button
          title="Add Animal"
          onPress={() => navigation.navigate('NewAnimal')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    marginTop: 5,
    color: '#777',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addButtonContainer: {
    padding: 10,
  },
});
