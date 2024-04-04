import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/primaryButton";

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
        <View style={ styles.inputContainer }>
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
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {    
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#3B021F',
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
        borderBottomColor: '#DDB52F',
        borderBottomWidth: 2,
        color: '#DDB52F',
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