import React from 'react'
import { useState } from 'react'
import * as RNElements from "@rneui/base";
import { Text, View, Image, Pressable, Dimensions, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
//import SvgComponent from '../SvgComponent';


const HomeScreen = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <Text style={styles.title}>
                        Dice App
                  </Text>
                  <Pressable
                        onPress={() => navigation.navigate('Jouer')} >
                        <Text>  <Image
                              style={{
                                    width: 350,
                                    height: 100,
                                    display: "block",
                                    margin: "auto"
                              }}
                              source={require("../assets/lancer_la_joue.png")}
                              onPress={() => navigation.navigate("Jouer")}
                        /></Text>
                  </Pressable>
            </View>
      )
}

export default HomeScreen

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#d9b6bc",
            width: windowWidth,
      },
      title: {
            fontSize: 36,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: "#9d5465",
            textAlign: 'center',
            marginVertical: 100,
      },
      imageStyle: {
            width: 512,
            height: 512,
            display: "block",
            margin: "auto",

      }
});

