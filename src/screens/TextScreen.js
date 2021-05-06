import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function TextScreen() {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Password</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={style.input}
        value={name}
        onChangeText={newValue => {
          setName(newValue);
        }}
      />
      <Text>Our Password input is {name}</Text>
      {name.length >= 5 ? null : (
        <Text>The password should be more than 5 letters</Text>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
