
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Inicio from '../pages/Inicio';
import Contato from '../pages/Contato';
import StackRoutes from './stackRoutes';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'black'
                }
            }}>

            <Tab.Screen
                name='InicioStack'
                component={Inicio}
                options={{
                    tabBarLabel: 'Tela Inicial',
                    headerTintColor: '#ff0000',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='home' color='red' size={size}></FontAwesome>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Cursos'
                component={StackRoutes}
                options={{
                    title: 'Cursos',
                    headerTintColor: '#ff0000',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='graduation-cap' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />

            {/* <Tab.Screen
             name='Detalhes'
             component={Detalhes}
            /> */}

            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    title: 'Contato',
                    headerTintColor: '#ff0000',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='id-card' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />

        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
