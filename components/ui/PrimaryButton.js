import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


export default function PrimaryButton({children, onPress}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{color: Colors.pink3}} >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOutercontainer: {
        borderRadius: 30,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        borderRadius: 30,
        margin: 4,
        backgroundColor: Colors.pink2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4
    },
    buttonText: {
        fontFamily: 'open-sans',
        color: Colors.white,
        textAlign: 'center',
        fontSize: 20
    },
    pressed: {
        opacity: 0.75
    }
})