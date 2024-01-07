import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import TabBar from '../components/TabBar';
import nviVerses from '../data/nvi.json';


const getVerseOfTheDay = () => {
  const currentDate = new Date();
  const dayOfYear = Math.ceil((currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000);
  const chapterIndex = Math.floor(dayOfYear / 50); 
  const verseIndex = dayOfYear % 50; 
  return nviVerses[chapterIndex]?.chapters[0]?.[verseIndex] || '';
};

const Home = ({ navigation }) => {
  const [verse, setVerse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verseOfTheDay = getVerseOfTheDay();
    setVerse(verseOfTheDay);
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sacred Insights</Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <View style={styles.content}>
          <Card title="Versículo que Deus te enviou:" subtitle={verse}></Card>
        </View>
      )}

      <TabBar navigation={navigation} activeTab="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Home;
