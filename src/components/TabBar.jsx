import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabBar = ({ navigation, activeTab }) => {
  return (
    
    <View style={styles.tabBar}>
       <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tabItem}>
        <Ionicons name="ios-home" size={24} color={activeTab === 'Home' ? '#fff' : '#888'} />
        <Text style={{ color: activeTab === 'Home' ? '#fff' : '#888' }}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Procurar')} style={styles.tabItem}>
        <Ionicons name="ios-search" size={24} color={activeTab === 'Procurar' ? '#fff' : '#888'} />
        <Text style={{ color: activeTab === 'Procurar' ? '#fff' : '#888' }}>Procurar</Text>
      </TouchableOpacity>


     
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
  },
  tabItem: {
    alignItems: 'center',
    flex: 1, 
    paddingVertical: 8, 
  },
});

export default TabBar;
