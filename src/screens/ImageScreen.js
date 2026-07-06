import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/img/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/img/beach.jpg')}
        score={8}
      />
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/img/mountain.jpg')}
        score={7}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
