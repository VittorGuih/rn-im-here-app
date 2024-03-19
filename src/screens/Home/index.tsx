import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { useState } from "react";

import { styles } from "./style";
import { Participant } from "../../components/Participant";

export function Home() {

  const [ParticipantName, setParticipantName] = useState('')
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd() {
    const noSpaceParticipantName = ParticipantName.trim();
    const noSpaceParticipantNames = participants.map(participant => participant.trim());

    if (noSpaceParticipantNames.includes(noSpaceParticipantName))
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    else if(!ParticipantName)
      return Alert.alert("Participante vazio", "É necessário preencher o campo com o nome de um participante.");

    setParticipants((prevState) => [...prevState, ParticipantName])
    setParticipantName('')
  }
// 
  function handleParticipantRemove(ParticipantName: string) {
    Alert.alert("❌ Remover Participante", `\n Deseja remover o participante: ${ParticipantName} ?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((prevState) => prevState.filter((participant) => {return participant !== ParticipantName}))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
    
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
          onChangeText={setParticipantName}
          value={ParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            ✔
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
        )}

        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
            </Text>
          </View>
        )}
      />

    </View>
  )
}