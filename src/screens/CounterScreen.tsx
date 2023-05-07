import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {

    const [contador, setContador] = useState(0)

    return (
        <View style={ styles.container }>

            <Text style={ styles.title }>
                Contador: { contador }
            </Text>

            <Fab 
                title='+1'
                position='br'
                onPress={ () => setContador( contador + 1 ) }
            />

            <Fab 
                title='-1'
                position='bl'
                onPress={ () => setContador( contador - 1 ) }
            />

        </View>
    )
}

const styles = StyleSheet.create({ 

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 40,
    },

    fabLocationBottonRigth: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },

    fabLocationBottonLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },

    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },

    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

})