import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default function SqareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  console.log(green);
  console.log(blue);
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setRed(red + 1);
        }}
        onDecrease={() => {
          setRed(red - 1);
        }}
        color={'red'}
        value={red}
      />
      <ColorCounter
        onIncrease={() => {
          setGreen(green + 1);
        }}
        onDecrease={() => {
          setGreen(green - 1);
        }}
        color={'green'}
        value={green}
      />
      <ColorCounter
        onIncrease={() => {
          setBlue(blue + 1);
        }}
        onDecrease={() => {
          setBlue(blue - 1);
        }}
        color={'blue'}
        value={blue}
      />
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({});
