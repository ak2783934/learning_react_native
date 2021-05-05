import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const BoxOfColor = props => {
  return (
    <View
      style={{ height: 100, width: '100%', backgroundColor: props.color }}
    />
  );
};

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
      {colors.map((color, index) => {
        return <BoxOfColor color={color} key={index} />;
      })}
      {/* <View
        style={{ height: 100, width: '100%', backgroundColor: randomRGB() }}
      /> */}
    </View>
  );
}
const style = StyleSheet.create({});
