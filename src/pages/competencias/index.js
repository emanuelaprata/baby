import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import competencias from './assets/competencias.json'
import { useNavigation } from '@react-navigation/native'
import bgImage from './assets/back.png';
import styles from './style'

export default function Competencias() {

    const navigation = useNavigation();
    function goBack() { navigation.goBack() }
    const items = (competencias)

    return (
        <ImageBackground source={bgImage} style={styles.background}>

            <View style={styles.container}>

                <StatusBar style="auto" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={goBack}>
                        <Entypo name="chevron-thin-left" size={15} />
                    </TouchableOpacity>

                    <Text style={styles.textTitle}>Promovendo Competências</Text>
                </View>


                <ScrollView
                    style={styles.scroll}
                >
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

