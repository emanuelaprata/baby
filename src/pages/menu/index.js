import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import bgImage from './assets/back.jpg';
import styles from './styles'

import Reflexos from '../reflexos';
import Calendario from '../calendarioVacinal';
import Janelas from '../janelasDoSono';
import PicoCrescimento from '../picosCrescimento';
import Desenvolvimento from '../desenvolvimento';
import Competencias from '../competencias';
import Marcos from '../marcos';




export default function Menu() {

    const navigation = useNavigation();

    return (
        <ImageBackground source={bgImage} style={styles.background}>
        <View style={styles.container}>
            

            <Image source={require('./assets/icon2.png')}
                style={{
                    width: 300, height: 230, marginTop: 40
                }} />

            <ScrollView
                style={styles.containerOptions}>
                <View style={{ alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Janelas)
                        }}
                        style={styles.option}>
                        <Text style={styles.textOptions}>
                            Janelas do Sono
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Calendario)
                        }}
                        style={styles.option}>
                        <Text style={styles.textOptions}>
                            Calendário Vacinal
                        </Text>



                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Desenvolvimento)
                        }}
                        style={styles.option}>
                        <Text style={styles.textOptions}>
                            Desenvolvimento do bebê
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Saltos')
                        }}
                        style={styles.option}>
                        <Text style={styles.textOptions}>
                            Saltos de Desenvolvimento
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(PicoCrescimento)
                        }}
                        style={styles.option}>

                        <Text style={styles.textOptions}>
                            Picos de Crescimento
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Marcos)
                        }}
                        style={styles.option}>
                        <Text style={styles.textOptions}>
                            Marcos do Desenvolvimento
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Competencias)
                        }}
                        style={styles.option}>
                        <Text style={styles.textOptions}>
                            Competências
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Reflexos)
                        }}
                        style={styles.option}>
                        <Text style={styles.textOptions}>
                            Reflexos
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                >
                    <Text style={{ textAlign: 'center', color: '#A4A2A2', marginBottom: 10 }}>Esse aplicativo possui informações generalizadas e não substitui o acompanhamento pediatrico.</Text>
                </View>

            </ScrollView>
        
        </View>
        </ImageBackground>
    );
}
