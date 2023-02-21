import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Octicons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import competencias from './assets/competencias.json'
import { useState } from 'react';




export default function Competencias() {

    const [items, setItems] = useState(
        competencias
    )

    return (
        <View style={styles.container}>

            <View style={styles.flexRow}>
                <TouchableOpacity style={{ marginLeft: 20 }}
                >
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={styles.fontTitle}>Promovendo Competência</Text>

            </View>


            <ScrollView
                style={styles.scroll}
            >
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('./assets/icon.png')}
                        style={styles.icon} />

                </View>
                <View style={styles.containerInfo} >
                    <Text style={styles.textInfo}>Descobertas feitas pelo inventário HOME e por estudos neurológicos e outras pesquisas sugerem
                        as seguintes diretrizes para promover o desenvolvimento cognitivo de bebês e crianças pequenas:</Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    {items.map((item, i) => {
                        return (

                            <View style={styles.option}>
                                <ScrollView
                                    style={{ width: '100%' }}>
                                   
                                        <Text
                                            style={styles.textInfoTitle}>
                                            {item.number}
                                        </Text>
                                        <Text style={styles.textInfo}>
                                            {item.competencia}
                                        </Text>
                                </ScrollView>

                            </View>
                        )
                    })}
                </View>

            </ScrollView>

        </View >
    );
}

const styles = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },


    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#EBEAEA',
        alignItems: 'center',
    },

    fontTitle: { fontSize: 25, color: '#573205', marginTop: 90, textAlign: 'center', flexGrow: 1 },

    scroll: { backgroundColor: '#EBEAEA', width: '100%' },

    icon: {
        width: 350, height: 230 },

    containerInfo: { width: '100%', backgroundColor: '#EBEAEA', paddingTop: 20, borderRadius: 20 },

    textInfo: { fontSize: 16, textAlign: 'center', margin: 10, color: '#573205' },

    option: {
        backgroundColor: '#DADCFF',
        width: '90%',
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 20,
        shadowColor: '#AFAFAF',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
    },

    textInfoTitle: {
        fontSize: 21,
        color: '#573205',
        width: '100%',
        fontWeight: 'bold',
        marginHorizontal: 14,
        marginTop: 5,
        textAlign: 'center'

    },

    textInfo: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
        textAlign: 'center'
    }
})


