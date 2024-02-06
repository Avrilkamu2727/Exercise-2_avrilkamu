import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exercise #2 :) </Text>
        <Text style={styles.title1}>React Native Components </Text>
        <Image
          style={styles.image}
          source={require('./assets/jk.jpg')}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Explore the possibilities...."
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Thankyou</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#97c5e8',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 25,
  },
  title1: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 400,
  },
  footerText: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;