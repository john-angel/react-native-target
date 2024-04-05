import { Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";

export default function GameScreen(){
    return (
        <View style={ styles.screen }>
            <Title>Opponnent's guess</Title>
            <Text>GUESS</Text>
            <View>
                <Text>Higher or lower?</Text>
                <PrimaryButton>+</PrimaryButton>
                <PrimaryButton>-</PrimaryButton>
            </View>
            <View><Text>LOG Rounds</Text></View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})