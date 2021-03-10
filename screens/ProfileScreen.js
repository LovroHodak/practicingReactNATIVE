import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeProps from '../components/HomeProps';

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>ProfileSCREEN and some props: This is {route.params.name}'s profile</Text>
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

export default ProfileScreen