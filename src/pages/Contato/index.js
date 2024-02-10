import { Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contato() {
    return (
        <SafeAreaView style={[styles.container]}>

            <Text style={styles.labelInput}>Email</Text>
            <TextInput placeholder='Digite seu e-mail' style={styles.input}></TextInput>

            <Text style={styles.labelInput}>Nome</Text>
            <TextInput placeholder='Digite seu nome' style={styles.input} ></TextInput>

            <Text style={styles.labelInput}>Senha</Text>
            <TextInput placeholder='Digite sua senha' style={styles.input} secureTextEntry={true}></TextInput>

            <Button title='Entrar' onPress={() => Alert.alert('Login Verificado!!!')}/>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      padding: 10,
      fontSize: 20,
      borderRadius: 10,
      margin: 10
    },
    labelInput: {
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10
      },
});
