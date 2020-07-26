import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

const data = require('../../../data/Data/data.json');


const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    backgroundColor: '#F2F4F7',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 20,
  },
  iconHeader: {
    width: 25,
    height: 25,
  },
  infoView: {},
  infoCardContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoCard: {
    width: 100,
    height: 65,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  infoText: {
    color: 'white',
  },
  totalText
});

export default function DashboardTab() {
  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.header}>
        <Image
          style={styles.iconHeader}
          source={require('../../assets12/Icons/256.png')}
        />
        <Text>Dashboard</Text>
        <Image
          style={styles.iconHeader}
          source={require('../../assets12/Icons/255.png')}
        />
      </View>

      <View style={styles.infoView}>
        <Text style={{fontSize: 18, fontWeight: '100'}}>List of Account</Text>
        <View style={styles.infoCardContainer}>
          <View style={[styles.infoCard, {backgroundColor: '#E437BC'}]}>
            <Text style={styles.infoText}>Bank</Text>
            <Text style={styles.infoText}>
              {data.account_information.bank.total}
            </Text>
          </View>
          <View style={[styles.infoCard, {backgroundColor: '#EFA75A'}]}>
            <Text style={styles.infoText}>Credit card</Text>
            <Text style={styles.infoText}>
              {data.account_information.credit.total}
            </Text>
          </View>
          <View style={[styles.infoCard, {backgroundColor: '#23E3D6'}]}>
            <Text style={styles.infoText}>Credit card</Text>
            <Text style={styles.infoText}>
              {data.account_information.cash.total}
            </Text>
          </View>
        </View>

      </View>

      <View style={styles.}/>
    </SafeAreaView>
  );
}
