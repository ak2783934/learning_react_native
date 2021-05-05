import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CounterScreen() {
  //todo: fix this
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Counter screen :{counter}</Text>
      <Button
        title='Increase'
        onPress={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({});
