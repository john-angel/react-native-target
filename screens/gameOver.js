import { Image, Text, View, StyleSheet } from "react-native";
import background from '../assets/images/success.png';
import Title from "../components/ui/title";
import COLORS from "../constants/colors";
import PrimaryButton from "../components/ui/primaryButton";

export default function GameOver({ rounds, userNumber, onStartNewGame }){
    return(
        <View style={ styles.rootContainer }>
            <Title>GAME OVER</Title>
            <View style={ styles.imageContainer }>
                <Image style={ styles.image } source={ background }/>
            </View>
            <Text style={ styles.summaryText }>
                Your phone needed <Text style={ styles.highlight }>{ rounds }</Text> rounds to 
                guess the number <Text style={ styles.highlight }>{ userNumber }</Text>.
            </Text>
            <PrimaryButton onPress={ onStartNewGame }>Start new game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'    
    },  
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: COLORS.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: COLORS.primary500
    }
})