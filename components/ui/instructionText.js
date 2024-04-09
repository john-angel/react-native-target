import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

export default function InstructionText({ children, style }){
    return(
        <Text style={ [styles.text, style] }>
            { children }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans-regular',
        color: COLORS.accent500,
        fontSize: 18
    }
})