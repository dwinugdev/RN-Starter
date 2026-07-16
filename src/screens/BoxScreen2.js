import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen2 = () => {
  return (
    <View style={styles.viewParentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewParentStyle: {
    bordercolor: 'black',
    borderWidth: 3,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    top: 50,
    // alignSelf: 'flex-end',
    // marginTop: 50,
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    height: 50,
    width: 50,
  },
});

export default BoxScreen2;
