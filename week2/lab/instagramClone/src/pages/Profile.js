import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  backBtn: {
    backgroundColor: 'white',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
  },
  userInfo: {
    height: 150,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDes: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userJob: {
    color: 'gray',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  followButton: {
    height: 25,
    width: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(60, 114, 255)',
  },
  whiteText: {
    color: 'white',
  },
  sendBtn: {
    backgroundColor: 'rgb(86, 216,254)',
    marginLeft: 5,
    width: 40,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 30,
    marginRight: 30,
  },
  counNumber: {
    fontWeight: '800',
    fontSize: 20,
  },
  countedThings: {
    color: 'gray',
    fontSize: 12,
  },
});

export default () => {
  // return <Text>abs</Text>;
  return (
    <SafeAreaView style={styles.pageContainer}>
      {/* navigation bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.backBtn}>
          <Feather name={'arrow-left'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name={'menu'} size={20} />
        </TouchableOpacity>
      </View>
      {/* user information */}
      <View style={styles.userInfo}>
        <Image
          style={styles.avatar}
          source={require('../assets/avatar.png')}
          resizeMode="cover"
        />
        {/* <View style={styles.userInfo}> */}
        <View style={styles.userDes}>
          <Text style={styles.userName}>Floy asdasd</Text>
          <Text style={styles.userJob}>Coder</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.whiteText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendBtn}>
              <Feather name={'send'} color="white" />
            </TouchableOpacity>
          </View>
          {/* </View> */}
        </View>
      </View>
      {/* Counter */}
      <View style={styles.countContainer}>
        <View style={styles.countSomthing}>
          <Text style={styles.counNumber}> 210</Text>
          <Text style={styles.countedThings}>Photos</Text>
        </View>
        <View style={styles.countSomthing}>
          <Text style={styles.counNumber}> 15k</Text>
          <Text style={styles.countedThings}>Follower</Text>
        </View>
        <View style={styles.countSomthing}>
          <Text style={styles.counNumber}> 210</Text>
          <Text style={styles.countedThings}>Photos</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
