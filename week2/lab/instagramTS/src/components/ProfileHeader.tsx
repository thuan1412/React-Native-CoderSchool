import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  headerContainer: {
    height: 250,
    padding: 5,
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    marginBottom: 20,
    marginTop: 10,
  },

  userInfo: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userJob: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginRight: 20,
  },
  follow: {
    backgroundColor: '#3C72FF',
    width: 80,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  send: {
    backgroundColor: '#56D8FE',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  accountDetailContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 20,
    fontWeight: '600',
  },
  countedObject: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      {/* navigation bar */}
      <View style={styles.navigationBar}>
        <Feather name="arrow-left" size={20} />
        <Feather name="menu" size={20} />
      </View>

      {/* User Information */}
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.avatar}
          source={require('../assets/avatar.png')}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.userName}>Mr. No One</Text>
          <Text style={styles.userJob}>Workless</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight style={styles.follow}>
              <Text style={{color: 'white'}}>Follow</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.send}>
              <Feather name="send" color="white" />
            </TouchableHighlight>
          </View>
        </View>
      </View>

      {/* User account detail */}
      <View style={styles.accountDetailContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.count}>210</Text>
          <Text style={styles.countedObject}>Photos</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.count}>15k</Text>
          <Text style={styles.countedObject}>Followers</Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.count}>605</Text>
          <Text style={styles.countedObject}>Following</Text>
        </View>
      </View>
    </View>
  );
}
