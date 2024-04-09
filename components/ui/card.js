import { StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";

export default function Card({ children }){
    return(
        <View style={ styles.card }>
            { children }                
        </View>
    )
}

const styles = StyleSheet.create({
    card: {    
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
    }
})