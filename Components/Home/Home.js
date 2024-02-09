import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonInquiry from '../ButtonInquiry/ButtonIniquiry.js';
const Home = () => {

    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image source={require('./img/iconoSenado.png')} style={styles.banner} />
 
          <StatusBar style="auto" />
        </View>
        <View style={styles.container2}>
          <Image source={require('./img/home_color.png')} style={styles.image} />
        <ButtonInquiry />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    container1: {
      flex: 0.3, // 
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 0.7, // Cambiado de 1 a 1 para que ocupe menos espacio
      backgroundColor: 'black',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    banner: {
      width: 210,
      height: 159,
    },
    image: {
      width: 150,
      height: 150,
      marginTop: 50,
      marginBottom:15,
    },
    
  });
  
  export default Home;
  