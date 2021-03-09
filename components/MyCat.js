import React from 'react'
import {View, Text, Image, ScrollView, TextInput } from 'react-native'

const catImage = { uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}

const MyCat = () => {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>Different Text</Text>
        <Image source={catImage} style={{ width: 200, height: 200}} />
      </View>
      <TextInput style={{height: 40, borderColor: 'grey', borderWidth: 1}} defaultValue='Type in mee' />
    </ScrollView>
  )
}

export default MyCat