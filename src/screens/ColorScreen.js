import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export default function ColorScreen() {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title='Add Random Color'
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ backgroundColor: item, height: 100, width: '100%' }}
            />
          );
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({});
