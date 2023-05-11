import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export function Home() {
    const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];

    function handleParticipantAdd() {
        console.log("Você clicou no botão de Adicionar!");
    }

    function handleParticipantRemove(name) {
        console.log(`Você clicou em remover o participante ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Evento
            </Text>

            <Text style={styles.eventDate}>
                Quinta, 11 de maio de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.buttonAdd} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View style={styles.containerP}>
                        <Text style={styles.name}>
                            {item}
                        </Text>

                        <TouchableOpacity style={styles.buttonRm} onPress={() => handleParticipantRemove(item)}>
                            <Text style={styles.buttonText}>
                                -
                            </Text>
                        </TouchableOpacity>
                    </View>

                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    );
}