import { Text, TextInput, View } from "react-native";

import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 15 de Março de 2024.
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  )
}