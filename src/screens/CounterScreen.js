import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Text>Counter screen :{counter}</Text>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase', payload: 1 });
          console.log(counter);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrease', payload: -1 });
          console.log(counter);
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({});
