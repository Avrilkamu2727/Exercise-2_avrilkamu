import React from 'react';
import { 
  Text,
  View, 
  Image, 
  StyleSheet, 
  TextInput, 
  ScrollView 
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Exercise #2</Text>
      <Text style={styles.title1}>Basic Computer in RN</Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'black' }]} />
        <View style={[styles.box, { backgroundColor: 'purple' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
      <Image source={require('./assets/wal.jpg')} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan teks di sini"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  title1: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  box: {
    width: 100,
    height: 50,
    marginRight: 40,
    borderRadius: 90,
  },
  image: {
    marginBottom: 20,
    borderTopRightRadius:10,
  },
  textInput: {
    height: 50,
    borderColor: 'purple',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default App;
