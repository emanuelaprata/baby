import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import bgImage from './assets/back.png';
import styles from './styles'
import infos from './assets/picos.json'


export default function PicoCrescimento() {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const picos = (

        infos

    )


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

                    <Text style={styles.textTitle}>Picos de crescimento</Text>
                </View>


                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.containerInfos}>
                                        <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 30, marginBottom: 15 }}>O crescimento físico não é constante, ele ocorre de forma mais intensa em alguns períodos específicos que chamamos de picos. Podemos identificar com o aumento das mamadas que também podem influenciar no sono do bebê.</Text>

                        <View style={styles.flexRow}>

                            {picos.map((item, i) => {

                                return (
                                    <TouchableOpacity style={styles.card} onPress={() => {
                                        Alert.alert(
                                            'Sobre o ' + item.numero + ':',
                                            item.descricao,
                                            [
                                                { text: 'Ok' },
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
                                backgroundColor: '#EED3BA',
                                height: 110,
                                borderRadius: 20,
                                alignItems: 'center',
                                margin: '2%',
                                justifyContent: 'center',
                                shadowColor: '#5C5C5C',
                                textAlign: 'center',
                                shadowOffset: {
                                    width: 0,
                                    height: 4
                                },
                                shadowRadius: 5,
                                shadowOpacity: 1.0,
                                elevation: 3
                            }}
                            onPress={() => {
                                Alert.alert(
                                    'Sobre o 7° pico:',
                                    'Pico de crescimento que pode ser associado ao desenvolvimento da mobilidade, incluindo o início do engatinhar ou andar, além de afetar o sono e o apetite do bebê.',
                                    [
                                        { text: 'Ok' },
                                    ],
                                    {
                                        cancelable: false,

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

