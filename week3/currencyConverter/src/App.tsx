import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
  },
  textHeader: {
    margin: 10,
  },
  input: {
    height: 50,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    fontSize: 22,
    borderColor: 'lightblue',
  },
  conversionTypeBtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 10,
    width: 150,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  selectedTypeBtn: {
    backgroundColor: 'lightblue',
  },
  currencyResult: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
  },
});

const flags: {[key: string]: string} = {
  USD: '🇺🇲',
  VND: '🇻🇳',
};

const ConversionTypeButton = ({
  onClick,
  from,
  to,
  selectedFrom,
}: {
  onClick: Function;
  from: string;
  to: string;
  selectedFrom: string;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.conversionTypeBtn,
        selectedFrom === from && styles.selectedTypeBtn,
      ]}
      onPress={() => onClick()}>
      <Text>
        {flags[from]} {from} to {flags[to]} {to}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [input, setInput] = useState<number>(1);
  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('VND');

  return (
    <View style={styles.app}>
      <Text style={styles.textHeader}>
        {' '}
        Please enter the value of the currency you want to convert
      </Text>
      <TextInput
        style={styles.input}
        autoFocus
        editable
        onChangeText={(text) => setInput(parseFloat(text))}
        textAlignVertical="center"
        keyboardType="number-pad"
        placeholder="100000"
      />
      <ConversionTypeButton
        onClick={() => {
          setFrom('USD');
          setTo('VND');
        }}
        from="USD"
        to="VND"
        selectedFrom={from}
      />
      <ConversionTypeButton
        onClick={() => {
          setFrom('VND');
          setTo('USD');
        }}
        from="VND"
        to="USD"
        selectedFrom={from}
      />

      <View style={styles.resultContainer}>
        <Text>Current currency:</Text>
        <Text style={styles.currencyResult}>{input}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text>Converted currency:</Text>
        <Text style={styles.currencyResult}>
          {from === 'USD' ? input / 23000 : input * 23000}
        </Text>
      </View>
    </View>
  );
}
