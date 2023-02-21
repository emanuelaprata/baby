import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Octicons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { width } from 'dom-helpers';

import styles from './styles';


export default function PicoCrescimento() {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.container}>

            <View style={styles.flexRow}>
                <TouchableOpacity style={{ marginLeft: 20 }}
                >
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={{fontSize: 30, color: '#573205', marginTop: 90, textAlign: 'center', flexGrow: 1 }}>Picos de Crescimento</Text>
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
                    style={{marginBottom: 30}}>
                        <List.Accordion
                            title="Quando podemos perceber?"
                            style={styles.itemAcordion}
                            onPress={handlePress}>
                            <Text style={styles.textInfo}>Com o aumento das mamadas que também podem influenciar no sono do bebê.</Text>
                        </List.Accordion>
                    </List.Section>


                    <View style={styles.flexRow}>

                        <View style={styles.card}>
                            <Image source={require('./assets/cresc.png')}
                                style={{
                                    width: 50, height: 50
                                }} />
                            <View>
                                <Text style={styles.textInfoTitle}>1° Pico</Text>
                                <Text style={styles.textInfo}>7 - 10 dias</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Image source={require('./assets/cresc.png')}
                                style={{
                                    width: 50, height: 50
                                }} />
                            <View>
                                <Text style={styles.textInfoTitle}>2° Pico</Text>
                                <Text style={styles.textInfo}>2 - 3 semanas</Text>
                            </View>
                        </View>


                        <View style={styles.card}>
                            <Image source={require('./assets/cresc.png')}
                                style={{
                                    width: 50, height: 50
                                }} />
                            <View>
                                <Text style={styles.textInfoTitle}> 3° Pico</Text>
                                <Text style={styles.textInfo}>4 - 6 semanas</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Image source={require('./assets/cresc.png')}
                                style={{
                                    width: 50, height: 50
                                }} />
                            <View>
                                <Text style={styles.textInfoTitle}>4° Pico</Text>
                                <Text style={styles.textInfo}>3 meses</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Image source={require('./assets/cresc.png')}
                                style={{
                                    width: 50, height: 50
                                }} />
                            <View>
                                <Text style={styles.textInfoTitle}>5° Pico</Text>
                                <Text style={styles.textInfo}>4 meses</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Image source={require('./assets/cresc.png')}
                                style={{
                                    width: 50, height: 50
                                }} />
                            <View>
                                <Text style={styles.textInfoTitle}>6° Pico</Text>
                                <Text style={styles.textInfo}>6 meses</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{
                        backgroundColor: '#E4F2EF',
                        height: 110,
                        borderRadius: 20,
                        alignItems: 'center',
                        margin: '2%',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('./assets/cresc.png')}
                            style={{
                                width: 50, height: 50
                            }} />
                        <View>
                            <Text style={styles.textInfoTitle}>7° Pico</Text>
                            <Text style={styles.textInfo}>9 meses</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>


        </View >
    );
}

