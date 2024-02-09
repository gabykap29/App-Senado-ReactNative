import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";



const ButtonInquiry = () => {
    const handlePress = () => {
        alert('Botón presionado');
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.btnConsulta} >
                Realizar Consulta
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnConsulta: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 50,
        marginTop: 20,
        width: 250,
        fontSize: 25,
        fontWeight: 'bold',
      },
});
export default ButtonInquiry;
