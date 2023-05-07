import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export const BoxObjectModelScreen = () => {

	// const { width, height } = Dimensions.get('window'); //Obtengo las medidas de la pantalla
	const { width, height } = useWindowDimensions(); //Obtengo las medidas de la pantalla, pero se actualiza segun la horientacion del celu

    return (
		<View>
			<View style={ styles.cajaBlue } />
			<View style={ styles.cajaTomato } />

		</View>
    )
}

const styles = StyleSheet.create({
	// container: {
	// 	backgroundColor: 'tomato',
	// 	flex: 1
	// },
	// title: {
	// 	// backgroundColor: 'tomato'
	// 	fontSize: 30,
	// 	borderWidth: 2
	// },

	cajaBlue: {
		backgroundColor: 'blue'	
	},
	cajaTomato: {
		backgroundColor: 'tomato'	
	},

});