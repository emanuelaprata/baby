import React from 'react';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import bgImage from './assets/back.png';

import infos from './assets/picos.json'


export default function PicoCrescimento() {

    

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const [picos, setPicos] = React.useState(
        
           infos
        
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

                <Text style={styles.textTitle}>Picos de crescimento</Text>
            </View>


            <ScrollView style={{ width: '100%' }}>
                <View style={styles.containerInfos}>
                    <Image source={require('./assets/picos.png')}
                        style={{
                            width: 300, height: 170
                        }} />
                    <List.Section >
                        <List.Accordion
                            title="O que é?"
                            style={styles.itemAcordion}
                            onPress={handlePress}>
                            <Text style={styles.textInfo}>Diz respeito ao crescimento físico. O crescimento não é constante, ele ocorre de forma mais intensa em alguns períodos específicos que chamamos de picos.</Text>
                        </List.Accordion>
                    </List.Section>


                    <List.Section
                        style={{ marginBottom: 30 }}>
                        <List.Accordion
                            title="Como identificar"
                            style={styles.itemAcordion}
                            onPress={handlePress}>
                            <Text style={styles.textInfo}>Com o aumento das mamadas que também podem influenciar no sono do bebê.</Text>
                        </List.Accordion>
                    </List.Section>


                    <View style={styles.flexRow}>

                        {picos.map((item, i) => {
                            
                            return (
                                <TouchableOpacity style={styles.card} onPress={() => {
                                    Alert.alert(
                                        'Sobre o ' + item.numero + ':',
                                        item.descricao,
                                        [
                                            { text: 'Ok'},
                                          ],
                                        { cancelable: false }
                                    )
                                }}>
                                
                                
                                <View >
                                <Image source={require('./assets/cresc.png')}
                                    style={{
                                        width: 50, height: 50
                                    }} />
                                <View>
                                    <Text style={styles.textInfoTitle}>{item.numero}</Text>
                                    <Text style={styles.textInfo}>{item.idade}</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            )
                        })}
                    </View>

                    <TouchableOpacity
                     style={{
                        backgroundColor: '#E4F2EF',
                        height: 110,
                        borderRadius: 20,
                        alignItems: 'center',
                        margin: '2%',
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                                    Alert.alert(
                                        'Sobre o 9° pico:',
                                        'Pico de crescimento que pode ser associado ao desenvolvimento da mobilidade, incluindo o início do engatinhar ou andar, além de afetar o sono e o apetite do bebê.',
                                        [
                                            { text: 'Ok', onPress: () => console.log('Botão 1 pressionado') },
                                          ],
                                          {
                                            cancelable: false,
                                            containerStyle: {
                                                borderRadius: 10,
                                                backgroundColor: "#fff",
                                                borderWidth: 1,
                                                borderColor: "#ccc",
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2,
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 3.84,
                                                elevation: 5,
                                            },
                                            
                                          }
                                    )
                                }}> 
                    <View>
                        
                        <Image source={require('./assets/cresc.png')}
                            style={{
                                width: 50, height: 50
                            }} />
                        <View>
                            <Text style={styles.textInfoTitle}>7° Pico</Text>
                            <Text style={styles.textInfo}>9 meses</Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>


        </View >
        </ImageBackground>
    );
}

const styles = StyleSheet.create(
    {
        background: {
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
          },

        container: {
            width: '100%', height: '100%'
        },

        textTitle: {
            fontSize: 20, marginStart: 15
        },

        flexRow: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center'
        },

        textHeader: { fontSize: 30, color: 'black', marginTop: 90, textAlign: 'center', flexGrow: 1, fontWeight: '600' },

        containerInfos: {
            width: '100%',
            paddingHorizontal: 30
        },

        itemAcordion: {
            backgroundColor: '#DDAE76',
            height: 50,

        },

        textInfoTitle: {
            fontSize: 15,
            color: '#573205',
            width: '100%',
            fontWeight: 'bold',
            marginTop: 5
        },

        textInfo: {
            fontSize: 15,
            color: '#573205',
            width: '100%',
            textAlign: 'center'
        },

        card: {
            width: '46%',
            backgroundColor: '#E4F2EF',
            height: 110,
            borderRadius: 20,
            alignItems: 'center',
            margin: '2%',
            justifyContent: 'center',
        }
    }
)