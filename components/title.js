import { Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

export default function Title({ children }){
    return(
        <Text style={ styles.title }>{ children }</Text>            
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: COLORS.accent500,
        padding: 12
    }
})