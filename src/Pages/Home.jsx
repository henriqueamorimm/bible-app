import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
const Home = () => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    fetch('https://www.abibliadigital.com.br/api/verses/nvi/random')
      .then(response => response.json())
      .then(data => {
        const { text, book } = data;
        setVerse(`${book.name} ${data.chapter}:${data.number} - ${text}`);
      })
      .catch(error => {
        console.error('Erro ao obter versículo:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.navHeader}>
      <Text style={styles.header}>Bíblia Chamon</Text>
      {verse ? (
        <>
        <Card title="Versículo que deus te enviou:" subtitle={verse}></Card>
        </>
      ) : (
        <Text style={styles.loading}>📖Carregando...</Text>
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#111',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  verseText: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white'
  },
  navHeader: { 
   marginBottom: 400,
  },
  verse: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
  },
  loading: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'white',
  },
});

export default Home;
