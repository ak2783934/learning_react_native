import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ImageDetail(props) {
  console.log(props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.msg}</Text>
      <Text>Score is {props.score}</Text>
    </View>
  );
}
const style = StyleSheet.create({});
