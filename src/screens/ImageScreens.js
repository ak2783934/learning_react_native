import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default function ImageScreens() {
  return (
    <View>
      <Text>Image screen!</Text>
      <ImageDetail
        msg='Forest'
        imageSource={require('../../assets/forest.jpg')}
        score='5'
      />
      <ImageDetail
        msg='Beach'
        imageSource={require('../../assets/beach.jpg')}
        score='6'
      />
      <ImageDetail
        msg='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        score='9'
      />
    </View>
  );
}
const style = StyleSheet.create({});
