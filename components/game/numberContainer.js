import { Text, View, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export default function NumberContainer({ children }){
    return(
        <View style={ styles.container }>
            <Text style={ styles.numberText }>{ children }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: COLORS.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8
    },
    numberText: {
        color: COLORS.accent500,
        fontSize: 36,
        fontWeight: 'bold'        
    }
})