import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeProps = (props) => {
  return (
    <View style={{backgroundColor: 'green'}}>
      <Text>THIS IS CHILD COMPONENT: {props.name} </Text>
    </View>
  );
}


export default HomeProps