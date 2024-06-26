import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/primaryButton";
import COLORS from "../constants/colors";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";

export default function StartGameScreen({ onPickedNumber }){
    const[enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => setEnteredNumber(enteredText);
    
    const resetInputHandler = () => setEnteredNumber('')

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number',
                'Number has to be between 1 and 99',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler}]
                )
            return;
        }
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={ styles.rootContainer }>
            <Title>Guess my number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                    style={ styles.numberInput }
                    maxLength={ 2 }
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    value={ enteredNumber }
                    onChangeText={ numberInputHandler }
                />
                <View style={ styles.ctaContainer }>
                    <View style={ styles.buttonContainer }>
                        <PrimaryButton onPress={ confirmInputHandler }>Confirm</PrimaryButton>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <PrimaryButton onPress={ resetInputHandler }>Reset</PrimaryButton>
                    </View>
                </View>
            </Card>            
        </View>        
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    instructionText: {
        color: COLORS.accent500
    },
    inputContainer: {    
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: COLORS.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: COLORS.accent500,
        borderBottomWidth: 2,
        color: COLORS.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ctaContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1
    }

})