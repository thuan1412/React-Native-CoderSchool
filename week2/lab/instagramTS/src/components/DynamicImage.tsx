import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {ImageInfo} from '../types/index';

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    marginBottom: 10,
    marginRight: 15,
    backgroundColor: 'red',
  },
});

const width: number = Dimensions.get('screen').width / 2 - 20; // maximum width of an image

export default ({
  imageInfo,
  navativeMargin,
}: {
  imageInfo: ImageInfo;
  navativeMargin?: number;
}) => {
  const height: number = (imageInfo.height / imageInfo.width) * width;
  return (
    <View>
      <Image
        style={{
          ...styles.image,
          width,
          height,
          marginTop: navativeMargin,
        }}
        source={{uri: imageInfo.urls.small}}
      />
    </View>
  );
};
