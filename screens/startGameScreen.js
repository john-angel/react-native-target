import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/primaryButton";

export default function StartGameScreen(){
    return (
        <View style={ styles.inputContainer }>
            <TextInput 
                style={ styles.numberInput }
                maxLength={ 2 }
                keyboardType="number-pad"
                autoCapitalize="none"
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {        
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#4E0329',
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
    }
})