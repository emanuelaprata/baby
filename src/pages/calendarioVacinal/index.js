import React, { useState } from 'react';
import {StyleSheet} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import vacinas from './assets/vacinas.json'
import calendario from './assets/calendario.json'

export default function Calendario() {

    const [vacina, setVacina] = useState(
        vacinas
    )

    const [calendarioVac, setCalendario] = useState(
        calendario
    )

    return (
        <View styles={styles.container}>
            <View style={styles.flexRow}>
                <TouchableOpacity style={{ marginLeft: 20 }}
                >
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Calendário Vacinal</Text>
            </View>

            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                    <Image source={require('./assets/icon.png')}
                        style={styles.icon} />

                </View>

                <ScrollView
                style={styles.flexRow}
                horizontal={true}
                >
                   <View style={{ alignItems: 'center' }}>
                    {items.map((vacinas, i) => {
                        return (
                            <View style={styles.option}>
                                <ScrollView
                                    style={{ width: '100%' }}>
                                   
                                        <Text
                                            style={styles.textInfoTitle}>
                                            {vacinas.name}
                                        </Text>
                                        <Text style={styles.textInfo}>
                                            {vacinas.doença}
                                        </Text>
                                </ScrollView>

                            </View>
                        )
                    })}
                </View>

                </ScrollView>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%'
    },

    flexRow: {
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'
    },

    textTitle: { 
        fontSize: 25, color: '#573205', marginTop: 90, textAlign: 'center', flexGrow: 1 
    },

    icon: {
        width: 350, height: 230
    }

})
