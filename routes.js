import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './src/pages/menu';
import Calendario from './src/pages/calendarioVacinal/index.js';
import Reflexos from './src/pages/reflexos/index.js';
import Saltos from './src/pages/saltos/index.js';

function Rotas() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Saltos" component={Saltos} />
                <Stack.Screen name="Calendario" component={Calendario} />
                <Stack.Screen name="Reflexos" component={Reflexos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;