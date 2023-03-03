import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'


export default function PicoCrescimento() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const [picos, setPicos] = React.useState(
        [
            { title: '1° Salto', time: '7 - 10 dias' },
            { title: '2° Salto', time: '2 - 3 semanas' },
            { title: '3° Salto', time: '4 - 6 semanas' },
            { title: '4° Salto', time: '3 meses' },
            { title: '5° Salto', time: '4 meses' },
            { title: '6° Salto', time: '6 meses' },
        ]
    )



    return (
        <View style={styles.container}>

            <View style={styles.flexRow}>
                <TouchableOpacity style={{ marginLeft: 10 }}
                    onPress={goBack}
                >
                    <Entypo name="chevron-thin-left" size={18} color="black" />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Picos de Crescimento</Text>
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
                                <View style={styles.card}>
                                <Image source={require('./assets/cresc.png')}
                                    style={{
                                        width: 50, height: 50
                                    }} />
                                <View>
                                    <Text style={styles.textInfoTitle}>{item.title}</Text>
                                    <Text style={styles.textInfo}>{item.time}</Text>
                                </View>
                            </View>
                            )
                        })}
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

const styles = StyleSheet.create(
    {
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
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
            backgroundColor: 'white',
            paddingHorizontal: 30
        },

        itemAcordion: {
            backgroundColor: '#E3CCAA',
            borderRadius: 10,
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