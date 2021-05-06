import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state: object {red:number,green:number,blue:number};
  //action: object {colorToChange:red||blue||green,amount:15||-15};

  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };

    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };

    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };

    default:
      return state;
  }
};

export default function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT });
        }}
        color={'red'}
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT });
        }}
        color={'green'}
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT });
        }}
        color={'blue'}
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
