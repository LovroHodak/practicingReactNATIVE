import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeProps from './HomeProps';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page and some props: </Text>
      <HomeProps name='Veronja' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400
  },
});

export default Home
