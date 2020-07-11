import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    backgroundColor: '#f3f6fa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: undefined,
    flex: 1,
  },
  inbox: {
    position: 'absolute',
    right: 10,
  },
});

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/Instagram_logo.png')}
      />
      <Feather style={styles.inbox} name="inbox" size={25} />
    </View>
  );
};
