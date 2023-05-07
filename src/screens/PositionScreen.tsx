import { StyleSheet, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>

        <View style={ styles.cajaAzul } />
        <View style={ styles.cajaVerde } />
        <View style={ styles.cajaAmarilla } />
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        height: 300,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'tomato'
    },
    cajaVerde: {
        position: "absolute",
        width: 100,
        height: 100,
        borderWidth: 7,
        borderColor: 'white',
        backgroundColor: 'green',
        bottom: 0,
        right: 0
    },
    cajaAmarilla: {
        width: 100,
        height: 100,
        borderWidth: 7,
        borderColor: 'white',
        backgroundColor: 'yellow',
        top: 0,
        left: 200
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 7,
        borderColor: 'white',
        backgroundColor: 'blue',
        top: 0,
        left: 200
    }
});
