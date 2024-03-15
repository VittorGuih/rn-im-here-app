import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

import { styles } from "./style";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {

  const Participants = ['Eu-01', 'Eu-02', 'Eu-03', 'Eu-04', 'Eu-05'];

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          Participants.map((participant, _) => (
            <Participant key={_} name={participant} onRemove={() => handleParticipantRemove(participant)} />
          ))
        }
      </ScrollView>

    </View>
  )
}