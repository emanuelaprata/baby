import React from 'react';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'


import saltos from './assets/saltos.json'
import SaltosDetail from '../saltosDetail';

export default function Saltos() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const [items, setItems] = useState(
        saltos
    )

    return (
        <View style={styles.container}>

            <View style={styles.flexRow}>
                <TouchableOpacity style={{ marginLeft: 20, flexGrow: 1 }}
                    onPress={goBack}
                >
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: '#573205', marginTop: 100, textAlign: 'center', flexGrow: 1 }}>Saltos de Desenvolvimento</Text>

            </View>

            <ScrollView style={{ width: '100%' }}>

                <View style={styles.containerInfos}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./assets/icon.png')}
                            style={{
                                width: 350, height: 100, marginBottom: 20
                            }} />
                    </View>

                    <Text style={styles.textInfo2}>Os saltos de desenvolvimento estão relacionados com novas habilidades que o bebê conquista.
                    </Text>

                    <List.Section>
                        <List.Accordion
                            title="Quando podemos perceber?"
                            style={styles.itemAcordion}
                            onPress={handlePress}>
                            <Text style={styles.textInfo2}>Quando isso ocorre, o bebê experimenta muitas sensações e emoções novas, o que pode acabar alterando a rotina, alterando o sono o deixando agitado, relutante para suas sonecas e irritado ao fim do dia, ele pode ficar mais choroso, mais carente. Nesse momento o bebê precisa de muito carinho, atenção e contato físico, para que ela se sinta segura e amparada.
                            </Text>
                        </List.Accordion>
                    </List.Section>


                    <View style={styles.flexRow}>


                        {items.map((item, i) => {
                            return (
                                <TouchableOpacity style={styles.card}
                                onPress={() => {
                                    navigation.navigate('SaltosDetail', {item})
                               }}
                                >
                                    <AntDesign name="rocket1" size={34} color="black" />
                                    <View 
                                    key={i}
                                    style={styles.flexRow}>
                                        <View style={{ paddingRight: 20 }}>
                                            <Text style={styles.textInfoTitle}>{item.name}</Text>
                                            <Text style={styles.textInfo}>{item.time}</Text>
                                        </View>
                                        <AntDesign name="right" size={18} color="#6D0F76" />
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
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
        backgroundColor: '#DFDADA',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        height: '43%',
        width: '100%',
        backgroundColor: '#DFDADA',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerInfos: {
        height: '50%',
        width: '100%',
        backgroundColor: '#DFDADA',
        padding: 30,
    },

    itemAcordion: {
        backgroundColor: '#DDAE76',
    },

    textInfoTitle: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        fontWeight: 'bold',
        marginTop: 5
    },

    textInfo: {
        fontSize: 12,
        color: '#573205',
        width: '100%',
    },

    textInfo2: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        margin: 10,
        textAlign: 'center'
    },

    card: {
        width: '46%',
        backgroundColor: '#EBBDFF',
        height: 110,
        borderRadius: 20,
        alignItems: 'center',
        margin: '2%',
        justifyContent: 'center',

    }
})