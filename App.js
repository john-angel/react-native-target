import { useCallback, useRef, useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import openSansBoldFont from './assets/fonts/OpenSans-Bold.ttf';
import openSansRegularFont from './assets/fonts/OpenSans-Regular.ttf';

import background from './assets/images/background.jpg';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import COLORS from './constants/colors';
import GameOver from './screens/gameOver';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'open-sans-regular': openSansRegularFont,
    'open-sans-bold': openSansBoldFont
  });
 

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  const[userNumber, setUserNumber] = useState(undefined);
  const[gameIsOver, setGameIsOver] = useState(false);
  const roundsRef = useRef(0);

  const pickedNumberHandler = (pickedNumber) => setUserNumber(pickedNumber)

  const gameOverHandler = (rounds) => {
    setGameIsOver(true);
    roundsRef.current = rounds;
  }

  const newGameHandler = () => {
    setUserNumber(undefined);
    setGameIsOver(false);
    roundsRef.current = 0;
  }

  let screen = <StartGameScreen onPickedNumber={ pickedNumberHandler }/>

  if(userNumber){
    screen = <GameScreen userNumber={ userNumber } onGameOver={ gameOverHandler }/>
  }

  if(gameIsOver){
    screen = <GameOver rounds={ roundsRef.current } userNumber={ userNumber } onStartNewGame={ newGameHandler }/>
  }

  if(!fontsLoaded){
    return null;
  }

  return (
    <LinearGradient colors={ [COLORS.primary700,COLORS.accent500] } style={ styles.rootScreen }>
      <ImageBackground 
        source={ background }
        resizeMode='cover'
        style={ styles.rootScreen }
        imageStyle={ styles.backgroundImage }
      >
        <SafeAreaView 
          style={ styles.rootScreen }
          onLayout={ onLayoutRootView }
        >
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
