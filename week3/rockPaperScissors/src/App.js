/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

const paperImage = require('../assets/images/paper.png');
const rockImage = require('../assets/images/rock.png');
const scissorsImage = require('../assets/images/scissors.png');

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerTitle: {
    fontSize: 24,
  },
  gameDisplay: {
    height: 300,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#bfc1c1',
    marginHorizontal: 5,
    borderColor: 'black',
    justifyContent: 'space-around',
  },
  choiceDisplay: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choiceButtonsContainer: {
    alignItems: 'center',
  },
  choiceButton: {
    height: 30,
    width: 120,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

const Choice = ({choice, player}) => {
  let image = null;
  if (choice === 'Paper') {
    image = paperImage;
  } else if (choice === 'Rock') {
    image = rockImage;
  } else {
    image = scissorsImage;
  }
  return (
    <View style={styles.choiceDisplay}>
      <Text>{player}</Text>
      <Text style={{fontSize: 30}}>{choice}</Text>
      <Image style={{width: 80, height: 80}} source={image} />
      <Text style={{fontSize: 12}}>{choice}</Text>
    </View>
  );
};

const App = () => {
  const [userChoice, setUserChoice] = useState('Rock');
  const [computerChoice, setcomputerChoice] = useState('Rock');
  const [result, setResult] = useState(null);
  const [countUserWins, setcountUserWins] = useState(0);
  const [countComputerWins, setcountComputerWins] = useState(0);
  const choices = ['Paper', 'Rock', 'Scissors'];

  const onChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setcomputerChoice(computerChoice);
    setUserChoice(choice);

    if (choice === computerChoice) {
      setResult('Draw');
    } else {
      if (choice === 'Paper') {
        if (computerChoice === 'Rock') {
          setResult('Win');
          setcountUserWins((currentCount) => currentCount + 1);
        } else {
          setResult('Lost');
          setcountComputerWins((currentCount) => currentCount + 1);
        }
      } else if (choice === 'Rock') {
        if (computerChoice === 'Scissors') {
          setResult('Win');
          setcountUserWins((currentCount) => currentCount + 1);
        } else {
          setResult('Lost');
          setcountComputerWins((currentCount) => currentCount + 1);
        }
      } else {
        if (computerChoice === 'Paper') {
          setResult('Win');
          setcountUserWins((currentCount) => currentCount + 1);
        } else {
          setResult('Lost');
          setcountComputerWins((currentCount) => currentCount + 1);
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.headerContainer}>
        <Text>{countUserWins}</Text>
        {result ? (
          <Text style={styles.headerTitle}> {result}</Text>
        ) : (
          <Text style={styles.headerTitle}>Tie game!</Text>
        )}
        <Text>{countComputerWins}</Text>
      </View>
      <View style={styles.gameDisplay}>
        <Choice player="You" choice={userChoice} />
        <Choice player="Computer" choice={computerChoice} />
      </View>
      <View style={styles.choiceButtonsContainer}>
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => onChoice('Rock')}>
          <Text style={{color: 'white'}}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => onChoice('Paper')}>
          <Text style={{color: 'white'}}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.choiceButton}>
          <Text style={{color: 'white'}} onPress={() => onChoice('Scissors')}>
            Scissors
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
