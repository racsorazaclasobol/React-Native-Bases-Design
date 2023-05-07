import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>
        <Text style={ styles.caja1 } >Caja 1</Text>
        <Text style={ styles.caja2 } >Caja 2</Text>
        <Text style={ styles.caja3 } >Caja 3</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'tomato',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    caja1: {
        // flex: 1,
        // alignSelf: 'center', //Se utiliza en el contenido hijo
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'white'
        
    },
    caja2: {
        // flex: 1,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'white'
    },
    caja3: {
        // flex: 1,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'white'
    },

});
