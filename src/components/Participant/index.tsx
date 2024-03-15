import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

export function Participant(){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                Eu
            </Text>

            <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        </View>
    )
}