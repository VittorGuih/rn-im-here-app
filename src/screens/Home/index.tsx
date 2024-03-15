import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { useRef, useState } from "react";

import { styles } from "./style";
import { Participant } from "../../components/Participant";

export function Home() {

  const [name, setName] = useState('')
  const [participants, setParticipants] = useState<string[]>([]);
  const textInputRef = useRef<TextInput>(null)

  function handleParticipantAdd(name: string) {
    if (participants.includes(name))
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    else if(!name)
      return Alert.alert("Participante vazio", "É necessário preencher o campo com o nome de um participante.");

    setParticipants([name, ...participants])
    textInputRef.current?.clear()
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("❌ Remover Participante", `\n Deseja remover o participante: ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter((participant) => {return participant != name}))
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
          onChange={(value) => setName(value.nativeEvent.text)}
          ref={textInputRef}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd(name)}>
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