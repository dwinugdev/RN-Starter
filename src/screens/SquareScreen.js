import { StyleSheet, Text, View } from 'react-native';
import React, { useReducer } from 'react';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const colorReducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'set_red' || 'set_green' || 'set_blue', payload: 15 || -15 }

  switch (action.type) {
    case 'set_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'set_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'set_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [{ red, green, blue }, dispatch] = useReducer(colorReducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({
            type: 'set_red',
            payload: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: 'set_red',
            payload: -COLOR_INCREMENT,
          })
        }
        color='Red'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({
            type: 'set_blue',
            payload: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: 'set_blue',
            payload: -COLOR_INCREMENT,
          })
        }
        color='Blue'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({
            type: 'set_green',
            payload: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            type: 'set_green',
            payload: -COLOR_INCREMENT,
          })
        }
        color='Green'
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
