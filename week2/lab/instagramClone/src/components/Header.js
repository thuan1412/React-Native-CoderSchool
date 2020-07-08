import React from 'react';

import {View, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const styles = {
  headerContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F2F5FB',
    alignItems: 'center',
  },
  logo: {
    height: 30,
    width: null,
    flex: 1,
  },
  inbox: {
    position: 'absolute',
    flex: 1,
    right: 15,
  },
};
export default () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/Instagram_logo.png')}
        resizeMode="contain"
      />
      <Feather name="inbox" size={30} style={styles.inbox} />
    </View>
  );
};
