import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';

//recupeur le dimension
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


//console.log(windowHeight);
//console.log(windowWidth);

const GameScreen = () => {
      const [firstDice, setFirstDice] = useState(0)
      const [lastDice, setLastDice] = useState(0)

      //inilise value a zero
      const reinitilize = () => {
            setFirstDice(0);
            setLastDice(0);
      }
      //faire un objet avec des images
      const diceImage = {
            zero: require('../assets/dices/dice-0.png'),
            un: require('../assets/dices/dice-1.png'),
            deux: require('../assets/dices/dice-2.png'),
            trois: require('../assets/dices/dice-3.png'),
            quatre: require('../assets/dices/dice-4.png'),
            cinq: require('../assets/dices/dice-5.png'),
            six: require('../assets/dices/dice-6.png'),
      }
      //creer duex nombre aleatoire
      const nombreAleatoire = (min = 1, max = 6) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      //method addition deux dice
      const startGame = () => {
            setFirstDice(nombreAleatoire());
            setLastDice(nombreAleatoire());
            if (firstDice === lastDice) {
                  setFirstDice(nombreAleatoire());
                  setLastDice(nombreAleatoire());
            }
      }
      //trouver dice image
      const getImage = (num) => {
            switch (num) {
                  case 0:
                        return diceImage.zero;
                  case 1:
                        return diceImage.un;
                  case 2:
                        return diceImage.deux;
                  case 3:
                        return diceImage.trois;
                  case 4:
                        return diceImage.quatre;
                  case 5:
                        return diceImage.cinq;
                  case 6:
                        return diceImage.six;
            }
      }
      return (
            <View style={styles.container}>
                  <Text style={styles.lblResult}> Resultat: </Text>
                  <Text style={styles.txtResult}>{firstDice + lastDice}</Text>
                  <View style={styles.souscontainer}>
                        <TouchableOpacity style={styles.btnReinitilize} onPress={reinitilize}>
                              <Text style={styles.reninilizeTxt}>REINILISER</Text>
                        </TouchableOpacity>
                        <Text style={styles.imgBox}>
                              <Image source={getImage(firstDice)} style={styles.imgDice1} />
                              <Image source={getImage(lastDice)} style={styles.imgDice2} />
                        </Text>
                        <TouchableOpacity style={styles.btnStart} onPress={startGame}>
                              <Text style={styles.btnStartText}>
                                    Lancer les Dèu
                              </Text>
                        </TouchableOpacity>
                  </View>
            </View>
      )
}
export default GameScreen;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#d9b6bc",
            justifyContent: "center",
            textAlign: "center",
            height: windowHeight,
            width: windowWidth
      },
      lblResult: {
            fontSize: 26,
            fontWeight: "bold",
            color: "#9d5465",
            marginTop: "10%",
            marginBottom: "10%"
      },
      txtResult: {
            fontSize: 26,
            fontWeight: "bold",
            color: "#9d5465"
      },
      souscontainer: {
            flex: 1,
            margin: 15,
            marginBottom: 15,
            backgroundColor: "#fff",
            margin: 30,
            width: "85%",
            margin: "auto",
            borderRadius: 10,
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            borderWidth: 18,
            borderColor: "#F3F3FB"
      },
      btnReinitilize: {
            marginTop: 50,
            width: '40%',
            height: 'auto',
            padding: 8,
            margin: "auto",
            backgroundColor: "#9d5465",
            display: "block",
            borderRadius: 5,
      },
      reninilizeTxt: {
            color: "#fff",
            fontSize: 20,
      },
      imgDice1: {
            margin: 10,
            width: 85,
            height: 85,
            borderRadius: 16,
            textAlign: 'center',
      },
      imgDice2: {
            margin: 10,
            width: 85,
            height: 85,
            borderRadius: 16,
            textAlign: 'center',
      },
      imgBox: {
            margin: "auto",
            width: '80%',
            marginTop: 0,
            marginBottom: 0
      },
      btnStartText: {
            color: "#9d5465",
            textTransform: "uppercase",
            fontWeight: "bolder",
            fontSize: 20
      },
      btnStart: {
            marginBottom: 50,
            marginTop: "15%",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 5,
            paddingRight: 5,
            margin: "auto",
            backgroundColor: "#d9b6bc",
            borderRadius: 5,
            border: 5,
            marginBottom: 45,
            width: '40%',

      }
})