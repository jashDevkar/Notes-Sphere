import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Style/Styles";
import { useNavigation } from "@react-navigation/native";

const RenderError = (props)=> {
    const navigation = useNavigation();
    return (
        <View style={styles.errorContainer}>
            <View style={styles.mssgBox}>
                <Text style={styles.errorTitle}>Oops! Something went wrong...</Text>
                <Text style = {styles.errormssg}>{props.mssg}</Text>
                <TouchableOpacity onPress={() => props.homeState? navigation.navigate('Home'):navigation.navigate('Odd Sem')} style={styles.button}>
                    <Text style={styles.errorBtnText}>Go back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default RenderError;