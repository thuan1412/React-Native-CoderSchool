import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

import DynamicImage from '../components/DynamicImage';
import ProfileHeader from '../components/ProfileHeader';

const sampleImage = {
  id: 'Dwu85P9SOIk',
  width: 160,
  height: 200,
  color: '#6E633A',
  urls: {
    raw: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
    full:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg',
    regular:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
    small:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
    thumb:
      'https://imagesProfileHeader.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max',
  },
};

const sampleImage1 = {
  id: 'Dwu85P9SOIk',
  width: 160,
  height: 100,
  downloads: 1345,
  urls: {
    raw: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
    full:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg',
    regular:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
    small:
      'https://images.unsplash.com/photo-1593294353764-f76527c3b853?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    thumb:
      'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max',
  },
};

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  list: {
    width: 200,
  },
});

const width: number = Dimensions.get('screen').width / 2 - 20; // maximum width of an image

const list = [
  sampleImage,
  {...sampleImage1, id: '1'},
  {...sampleImage1, id: 'asdsa'},
  {...sampleImage, id: '1231'},
  {...sampleImage, id: '123'},
  {...sampleImage1, id: '1234'},
];

export default function Profile() {
  useEffect(() => {
    console.log();
  });
  return (
    <View style={styles.imagesContainer}>
      <FlatList
        data={list}
        renderItem={({item}) => <DynamicImage imageInfo={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ItemSeparatorComponent={() => (
          <View style={{width: 10, backgroundColor: 'green'}} />
        )}
        ListHeaderComponent={ProfileHeader}
      />
    </View>
  );
}
