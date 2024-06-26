import { Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export default function Title({ children }){
    return(
        <Text style={ styles.title }>{ children }</Text>            
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})