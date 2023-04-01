import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './src/pages/menu';
import Calendario from './src/pages/calendarioVacinal/index.js';
import Reflexos from './src/pages/reflexos/index.js';
import Saltos from './src/pages/saltos/index.js';
import Janelas from './src/pages/janelasDoSono';
import PicoCrescimento from './src/pages/picosCrescimento';
import Desenvolvimento from './src/pages/desenvolvimento';
import Competencias from './src/pages/competencias';
import Marcos from './src/pages/marcos';

function Rotas() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Saltos" component={Saltos} />
                <Stack.Screen name="Janelas" component={Janelas} />
                <Stack.Screen name="PicoCrescimento" component={PicoCrescimento} />
                <Stack.Screen name="Calendario" component={Calendario} />
                <Stack.Screen name="Reflexos" component={Reflexos} />
                <Stack.Screen name="Competencias" component={Competencias} />
                <Stack.Screen name="Desenvolvimento" component={Desenvolvimento} />
                <Stack.Screen name="Marcos" component={Marcos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;