import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./style";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {

  const [name, setName] = useState('Eu');

  function handleParticipantAdd() {
    return
  }
  function handleParticipantRemove(name: string) {
    console.log(`Remover participante: ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 15 de Março de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant name={name} onRemove={() => handleParticipantRemove(name)}/>
      <Participant name={name} onRemove={() => handleParticipantRemove(`${name}-2`)}/>
    </View>
  )
}