import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import TabBar from '../components/TabBar';
import { Ionicons } from '@expo/vector-icons';

const Search = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchVerse = async () => {
    try {
      setLoading(true);
      const response = await fetch(`URL-SEARCH-VERSICLE`);
      const data = await response.text();
      setResponse(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching verse:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Quero procurar um versículo para:"
          value={question}
          placeholderTextColor={'white'}
          onChangeText={(text) => setQuestion(text)}
          onSubmitEditing={fetchVerse}
        />
        <TouchableOpacity style={styles.cancelButton} onPress={() => setQuestion('')}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.cardContainer}>
        <View style={styles.card}>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : response ? (
            <Text style={styles.cardText}>{response}</Text>
          ) : null}
        </View>
      </ScrollView>
      <TabBar navigation={navigation} activeTab="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#111',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  searchIcon: {
    color: 'white',
  },
  cancelButton: {
    marginLeft: 'auto',
  },
  cancelText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    marginTop: 15,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 20,
  },
  cardText: {
    color: 'white',
  },
});

export default Search;
