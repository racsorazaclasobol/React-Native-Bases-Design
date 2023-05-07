import React from 'react'
import { HolaMundoScreens } from './src/screens/HolaMundoScreens';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* <HolaMundoScreens />
			<CounterScreen /> */}
			{/* <BoxObjectModelScreen /> */}
			{/* <PositionScreen /> */}
			{/* <FlexScreen /> */}
			<TareaScreen />

		</SafeAreaView>
	)
}

export default App;