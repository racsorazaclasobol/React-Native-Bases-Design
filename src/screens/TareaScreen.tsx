import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Archivo Tarea.zip

export const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaVerde } />
            <View style={ styles.cajaBlue } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'purple'
    },
    cajaVerde: {
        top: 50,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'green'
    },
    cajaBlue: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'blue'
    },
});