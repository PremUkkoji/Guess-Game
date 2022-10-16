import { Text, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';

function InstructionText({children, customStyle}) {
    return <Text style={[styles.instructionText, customStyle]}>
        {children}
    </Text>
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.pink1,
        fontSize: 25
    },
})

export default InstructionText;