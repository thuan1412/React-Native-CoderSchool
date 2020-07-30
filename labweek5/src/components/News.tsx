import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  newsContainer: {
    height: 300,
    marginHorizontal: 5,
    marginVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
  },
  headerContainer: {},
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  image: {
    height: 150,
    width: '100%',
  },
  readMoreBtn: {
    backgroundColor: '#3E57A0',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default function News({news}: {news: any}) {
  return (
    <View style={styles.newsContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{news.title}</Text>
      </View>
      <Image
        style={styles.image}
        source={{uri: news.urlToImage}}
        resizeMode="contain"
      />
      <Text>Publish: {news.publishedAt}</Text>
      <TouchableOpacity style={styles.readMoreBtn}>
        <Text style={{color: 'white'}}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
}
