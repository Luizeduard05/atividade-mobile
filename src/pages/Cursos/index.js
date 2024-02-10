import { Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const curso1 = require('../../assets/curso1.png')
const curso2 = require('../../assets/curso2.png')
const curso3 = require('../../assets/curso3.png')


export default function Cursos() {

    const navigation = useNavigation();

    function veiculos() {
        navigation.navigate('Detalhes',{nomeCurso: 'VEÍCULOS ELÉTRICOS E HÍBRIDOS',image: curso1 , descricao: 'Conheça as características dos veículos elétricos e híbridos em relação a tecnologia do motor, bateria e sistemas de recarga, além dos procedimentos de manutenção e reparo e os benefícios para a sustentabilidade ambiental.'});
    }
    function economia() {
        navigation.navigate('Detalhes', {nomeCurso: 'CURSO ECONOMIA CIRCULAR EM PORTUGUÊS', image: curso2, descricao: 'O curso Economia Circular tem como objetivo apresentar o modelo de produção circular, identificando o sistema econômico vigente e compreendendo as formas de transição nas esferas comportamental, empresarial e político-institucional.'})
    }
    function trabalho() {
        navigation.navigate('Detalhes', {nomeCurso: 'PREPARAÇÃO PARA O MUNDO DO TRABALHO', image: curso3, descricao: 'O curso apresenta estratégias que contribuem para inserção ou recolocação de jovens e adultos no mundo do trabalho, além dos desafios do mercado e as habilidades do profissional do futuro e dicas para se destacar em processos seletivos.'})
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <Button style={[styles.title]} onPress={veiculos} title='VEÍCULOS ELÉTRICOS E HÍBRIDOS'></Button>
                <Image source={curso1} style={[styles.imgCurso]}></Image>
               
                <Button style={[styles.title]} onPress={economia} title='CURSO ECONOMIA CIRCULAR EM PORTUGUÊS'></Button>
                <Image source={curso2} style={[styles.imgCurso]}></Image>
                
                <Button style={[styles.title]} onPress={trabalho} title='PREPARAÇÃO PARA O MUNDO DO TRABALHO'></Button>
                <Image source={curso3} style={[styles.imgCurso]}></Image>  
            </ScrollView>
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
    imgCurso: {
        width: 350,
        height: 350,
        marginBottom: 30
    }
});
