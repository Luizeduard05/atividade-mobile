import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import {useRoute, useNavigation } from "@react-navigation/native";

export default function Detalhes() {

    const route = useRoute()



    return (
        <SafeAreaView>
            <Text>{route.params?.nomeCurso}</Text>
            <Text>{route.params?.descricao}</Text>

        
        
        </SafeAreaView>
    )
}