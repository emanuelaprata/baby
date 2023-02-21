import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Octicons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { useState } from 'react';



export default function SaltosDetail() {

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);


    return (
        <View style={styles.container}>



            <ScrollView style={{ width: '100%' }}>
                {items.map((item, i) => {
                    return (
                        <View>
                            <View style={styles.flexRow}>
                                <TouchableOpacity style={{ marginLeft: 20 }}
                                >
                                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                                </TouchableOpacity>
                                <Text style={styles.textHeader}>{item.name}</Text>
                            </View>

                            <ScrollView>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={{
                                            width: 200, height: 200
                                        }}
                                        source={{ uri: `${item.image}` }} />
                                    <Text style={styles.textInfo}>
                                        {item.details}
                                    </Text>

                                    <View>
                                        <Text style={styles.textInfoTitle}>Sinais:</Text>
                                        <Text>{item.sinais}</Text>
                                    </View>
                                </View>
                            </ScrollView>


                        </View>

                    )
                })}

            </ScrollView>

            <View style={styles.flexRow}>
                <TouchableOpacity
                    style={{
                        flexGrow: 1, isplay: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    }}>
                    <Entypo name="chevron-thin-left" size={10} color="#573205" />
                    <Text>Salto anterior</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.flexRow}>
                    <Text>Próximo Salto</Text>
                    <Entypo name="chevron-thin-right" size={10} color="#573205" />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 10,
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

    textHeader: {
        fontSize: 30, color: '#573205', marginTop: 50, textAlign: 'center', flexGrow: 1
    },

    textInfo: {
        fontSize: 17,
        color: '#573205',
        width: '100%',
        margin: 10,
        textAlign: 'center'
    },

    textInfoTitle: {
        fontSize: 17,
        color: '#573205',
        width: '100%',
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})