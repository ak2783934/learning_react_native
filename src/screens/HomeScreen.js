import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Welcome to my App!</Text>
      <Button
        onPress={() => {
          navigation.navigate('Screen');
        }}
        title='Go to Screen!'
      />
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}
        title='Go to list'
      />
      <Button
        onPress={() => {
          navigation.navigate('Image');
        }}
        title='Go to image screen'
      />
      <Button
        onPress={() => {
          navigation.navigate('Counter');
        }}
        title='Go to Counter screen'
      />
      <Button
        onPress={() => {
          navigation.navigate('Color');
        }}
        title='Go to Color screen'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignContent: 'center',
    color: 'red',
    textAlign: 'center',
  },
});

export default HomeScreen;
