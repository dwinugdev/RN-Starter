import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' } || { type: 'decrement' }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <View style={styles.viewStyle}>
        <Text>Current Count:</Text>
        <Text>{state.count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterScreen;
