import {  Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Participant({name, remove}) {
    return(
        <View style={styles.containerP}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.buttonRm} onPress={remove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}