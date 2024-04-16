import { StyleSheet, Text, View } from "react-native";

export default function GuessItem({ index, item }){
    return (
        <View key={ index } style={ styles.guessList }>
            <Text style={ styles.guessItem }>Round: { index + 1 }</Text>
            <Text style={ styles.guessItem }>Guess: { item }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessList: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    guessItem: {
        marginBottom: 45
    }
})