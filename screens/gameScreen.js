import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from "../components/ui/primaryButton";
import Title from "../components/ui/title";
import NumberContainer from "../components/game/numberContainer";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";
import GuessItem from "../components/ui/guessItem";

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }){
    const initialGuess = generateRandomBetween(1, 100, userNumber);    
    const[currentGuess, setCurrentGuess] = useState(initialGuess);
    const[guessedNumbers, setGuessedNumbers] = useState([initialGuess]);
    const roundsRef = useRef(0);
    const [rounds, setRounds] = useState(0);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver(roundsRef.current);
        }
    },[currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('Wrong action', 'You\'re lying :-(', { text: 'Sorry', style: 'cancel' });
            return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess;            
        }else{
            minBoundary = currentGuess + 1;            
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        roundsRef.current = roundsRef.current + 1;
        setRounds(prevState => prevState + 1);
        setGuessedNumbers(prevState => [...prevState, newRndNumber]);
    }

    const renderItem = ({ item, index }) => <GuessItem index={ index } item={ item }/>

    return (
        <View style={ styles.screen }>
            <Title>Opponnent's guess</Title>
            <NumberContainer>{ currentGuess }</NumberContainer>
            <Card>
                <InstructionText style={ styles.instructionText }>Higher or lower?</InstructionText>                
                <View style={ styles.ctaContainer }>
                    <PrimaryButton onPress={ nextGuessHandler.bind(this, 'greater') }>
                        <Ionicons name='add' size={ 24 } color='white'/>
                    </PrimaryButton>
                    <PrimaryButton onPress={ nextGuessHandler.bind(this, 'lower') }>
                        <Ionicons name='remove' size={ 24 } color='white'/>
                    </PrimaryButton>
                </View>                
            </Card>
            <View style={ styles.listContainer }>
                <FlatList
                    data={ guessedNumbers }
                    renderItem={ renderItem }
                />                               
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginBottom: 12
    },
    ctaContainer: {
        flexDirection: 'row'
    },
    guessList: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})