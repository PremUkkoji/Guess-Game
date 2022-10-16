import {View, StyleSheet} from 'react-native'
import Colors from '../../constants/colors';

function Card({children}) {
    return <View style={styles.card}>
        {children}
    </View>
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 24,
        backgroundColor: Colors.blue2,
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.25
    }
})

export default Card;
