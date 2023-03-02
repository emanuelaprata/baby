import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
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
        <View style={styles.container}>

            <View style={styles.containerBanner}>
                {/* <Image
                    style={{ width: '100%', height: '100%', opacity: 0.6 }} source={require('./assets/back.jpeg')}
                /> */}
            <Text style={{ justifyContent: 'flex-start', fontSize: 28, textAlign: 'left', paddingBottom: 10, paddingLeft: 15 }}>O que veremos hoje?</Text>
            </View>



            <ScrollView
                style={styles.containerOptions}>



                <View style={{ alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Janelas)
                        }}
                        style={styles.option}>
                        <View style={styles.flexRow}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.textOptions}>
                                    Janelas do Sono
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: 170, height: 106 }} source={require('./assets/sono.png')}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Calendario)
                        }}
                        style={styles.optionOne}>
                        <View style={styles.flexRow}>
                            <View style={{ justifyContent: 'center', padding: 40, marginLeft: -40 }}>
                                <Text style={styles.textOptions}>
                                    Calendário Vacinal
                                </Text>
                            </View>

                            <View >
                                <Image
                                    style={{ width: 110, height: 120 }} source={require('./assets/vacina.png')}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Desenvolvimento)
                        }}
                        style={styles.optionTwo}>
                        <View style={styles.flexRow}>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={styles.textOptions}>
                                    Desenvolvimento do bebê
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: 90, height: 100, marginTop: -9 }} source={require('./assets/desenvolvimento.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Saltos')
                        }}
                        style={styles.optionThree}>
                        <View style={styles.flexRow}>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={styles.textOptions}>
                                    Saltos de Desenvolvimento
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: 90, height: 100, marginTop: -9 }} source={require('./assets/salto.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(PicoCrescimento)
                        }}
                        style={styles.option}>
                        <View style={styles.flexRow}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.textOptions}>
                                    Picos de Crescimento
                                </Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginLeft: 15 }}>
                                <Image
                                    style={{ width: 100, height: 100, marginTop: -9 }} source={require('./assets/picos.png')}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(Competencias)
                    }}
                        style={styles.optionOne}>
                        <View style={styles.flexRow}>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={styles.textOptions}>
                                    Marcos do Desenvolvimento
                                </Text>
                            </View>

                            <View >
                                <Image
                                    style={{ width: 110, height: 120 }} source={require('./assets/desenvolvimento.png')}
                                />
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(Competencias)
                    }}
                        style={styles.optionTwo}>
                        <View style={styles.flexRow}>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={styles.textOptions}>
                                    Competências
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: 90, height: 100, marginTop: -9 }} source={require('./assets/desenvolvimento.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(Reflexos)
                        }}
                        style={styles.optionThree}>
                        <View style={styles.flexRow}>
                            <View style={{ width: '65%', justifyContent: 'center' }}>
                                <Text style={styles.textOptions}>
                                    Reflexos
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{ width: 90, height: 100, marginTop: -9 }} source={require('./assets/salto.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    containerBanner: {
        height: '15%',
        width: '100%',
        justifyContent: 'flex-end',
        backgroundColor: '#EBEAEA',
    },

    containerOptions: {
        height: '67%',
        width: '100%',
        backgroundColor: '#EBEAEA',
    },

    option: {
        backgroundColor: '#A0CEDD',
        width: 347,
        height: 92,
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        shadowColor: '#5C5C5C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },

    optionOne: {
        backgroundColor: '#FDC571',
        width: 347,
        height: 92,
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#5C5C5C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },

    optionTwo: {
        backgroundColor: '#B2B1ED',
        width: 347,
        height: 92,
        borderRadius: 30,
        marginTop: 30,
        shadowColor: '#5C5C5C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
    },

    optionThree: {
        backgroundColor: '#A1E2A8',
        width: 347,
        height: 92,
        borderRadius: 30,
        marginTop: 30,
        shadowColor: '#5C5C5C',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
    },

    textOptions: {
        fontSize: 20,
        color: '#573205',
        marginLeft: 12
    }
})