import { Image, Text, View, StyleSheet } from "react-native";
import background from '../assets/images/success.png';
import Title from "../components/ui/title";
import COLORS from "../constants/colors";

export default function GameOver(){
    return(
        <View style={ styles.rootContainer }>
            <Title>GAME OVER</Title>
            <View style={ styles.imageContainer }>
                <Image style={ styles.image } source={ background }/>
            </View>
            <Text>Your phone needed X rounds to guess the number Y.</Text>
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
    }
})