import { SafeAreaView, Text, StyleSheet, Button,Image } from 'react-native'

const logo = require('../../assets/logo-senai.png')

export default function Inicio() {
    return (
        <SafeAreaView style={styles.container}>
           <Image source={logo} style={styles.logo}></Image>
            <Text>Luiz Eduardo Santana</Text>
            <Text>Sumaré, 30/01/2024</Text>
            <Text>Escola SENAI Celso Charuri</Text>
            <Text>Técnico em Desenvolvimento de Sistemas</Text>
            <Text>INDMO - Interface para Dispositivos Móveis</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 250,
        margin: 50
      },
});
