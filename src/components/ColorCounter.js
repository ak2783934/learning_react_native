import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => {
          console.log('Increased');
          onIncrease();
        }}
        title={`Increase ${color}`}
      />
      <Button
        onPress={() => {
          console.log('Decreased');
          onDecrease();
        }}
        title={`Decrease ${color}`}
      />
    </View>
  );
}
const style = StyleSheet.create({});
