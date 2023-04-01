import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import competencias from './assets/competencias.json'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import bgImage from './assets/back.png';

export default function Competencias() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [items, setItems] = useState(
        competencias
    )

    return (
        <ImageBackground source={bgImage} style={styles.background}>

        <View style={styles.container}>
  <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity
                style={{marginLeft: 10}}
                    onPress={goBack}>
                    <Entypo name="chevron-thin-left" size={15}  />
                </TouchableOpacity>

                <Text style={styles.textTitle}>Promovendo Competências</Text>
            </View>


            <ScrollView
                style={styles.scroll}
            >
                {/* <View style={{ alignItems: 'center' }}>
                    <Image source={require('./assets/icon.png')}
                        style={styles.icon} />

                </View> */}
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
        flexWrap: 'wrap',
        alignItems: 'center'
    },


    container: {
        width: '100%', height: '100%', backgroundColor: '#EBEAEA'
    },

    textTitle: {
        fontSize: 20, marginStart: 15
    },
    scroll: { backgroundColor: '#EBEAEA', width: '100%' },

    icon: {
        width: 350, height: 230 },

    containerInfo: { width: '100%', paddingTop: 20, borderRadius: 20 },

    textInfo: { fontSize: 16, textAlign: 'center', margin: 10, color: '#573205' },

    option: {
        backgroundColor: '#EED3BA',
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


