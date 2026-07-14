import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default BoxScreen;
