import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is Component screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ComponentScreen;
