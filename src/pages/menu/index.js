import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import bgImage from './assets/back.jpg';

import Reflexos from '../reflexos';
import Saltos from '../saltos';
import Calendario from '../calendarioVacinal';
import Janelas from '../janelasDoSono';
import PicoCrescimento from '../picosCrescimento';
import Desenvolvimento from '../desenvolvimento';
import Competencias from '../competencias';




export default function Menu() {

    const navigation = useNavigation();

    return (
        <ImageBackground source={bgImage} style={styles.background}>
        <View style={styles.container}>
            

            <Image source={require('./assets/icon.png')}
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
                            navigation.navigate(Competencias)
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
                    <Text style={{ textAlign: 'center', color: '#A4A2A2' }}>Esse aplicativo possui informações generalizadas e não substitui o acompanhamento pediatrico.</Text>
                </View>

            </ScrollView>
        
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
      },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    containerOptions: {
        marginTop: -20,
        height: '100%',
        width: '100%',
    },

    option: {
        backgroundColor: 'white',
        width: 347,
        height: 92,
        borderRadius: 10,
        marginTop: 30,
        marginHorizontal: '2%',
        justifyContent: 'center',
        shadowColor: '#5C5C5C',
        textAlign: 'center',
        shadowOffset: {
            width: 0,
            height: 4
        },
        width: '45%',
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },


    textOptions: {
        fontSize: 15,
        color: '#573205',
        marginStart: 10
    }
})