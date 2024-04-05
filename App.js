import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import background from './assets/images/background.jpg';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import COLORS from './constants/colors';

export default function App() {
  const[userNumber, setUserNumber] = useState(undefined);

  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber)

  let screen = <StartGameScreen onPickedNumber={ pickedNumberHandler }/>

  if(userNumber){
    screen = <GameScreen userNumber={ userNumber }/>
  }

  return (
    <LinearGradient colors={ [COLORS.primary700,COLORS.accent500] } style={ styles.rootScreen }>
      <ImageBackground 
        source={ background }
        resizeMode='cover'
        style={ styles.rootScreen }
        imageStyle={ styles.backgroundImage }
      >
        <SafeAreaView style={ styles.rootScreen }>
        { screen }
        </SafeAreaView>        
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1    
  },
  backgroundImage:{
    opacity: 0.15
  }
});
